import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { MessageCircle, X, CheckCircle, XCircle, Loader2, ArrowLeft } from "lucide-react";

const PopupWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Mensaje" });

  const onSubmit = async (data, e) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
          setMessage(result.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(result.message);
        }
      } else {
        setIsSuccess(false);
        setMessage('Error al enviar el correo.');
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('Error al enviar el correo. Verifica la consola para obtener más información.');
      console.error(error);
    }
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-40 flex items-center justify-center right-5 bottom-5 h-12 w-12 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      >
        <span className="sr-only">Abrir formulario de contacto</span>
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="fixed z-50 bottom-[76px] right-5 w-[340px] max-h-[calc(100vh-100px)] flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-xl">
          {/* Header */}
          <div className="flex flex-col items-center justify-center px-6 py-5 bg-green-600">
            <h3 className="text-base font-semibold text-white">¿En qué podemos ayudarte?</h3>
            <p className="mt-1 text-sm text-green-100">
              Usualmente respondemos en 1 hora
            </p>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto p-5 bg-white dark:bg-gray-950">
            {!isSubmitSuccessful && (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                <input type="hidden" value="YOUR_ACCESS_KEY_HERE" {...register("apikey")} />
                <input type="hidden" value={`${userName} Enviado desde el formulario de FluxoWeb`} {...register("subject")} />
                <input type="hidden" value="Fluxo Web" {...register("from_name")} />
                <input type="checkbox" className="hidden" {...register("botcheck")} />

                {/* Name Field */}
                <div className="space-y-1.5">
                  <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    placeholder="Tu nombre"
                    {...register("name", {
                      required: "Se requiere el nombre completo",
                      maxLength: 80,
                    })}
                    className={`w-full h-10 px-3 text-sm rounded-md border bg-white dark:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 dark:border-gray-700 focus:border-green-600 focus:ring-green-600"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="tu@email.com"
                    {...register("email", {
                      required: "Ingrese su email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Por favor ingrese un correo válido",
                      },
                    })}
                    className={`w-full h-10 px-3 text-sm rounded-md border bg-white dark:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 dark:border-gray-700 focus:border-green-600 focus:ring-green-600"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Tu mensaje
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    placeholder="¿Cómo podemos ayudarte?"
                    {...register("message", {
                      required: "Ingrese su mensaje",
                    })}
                    className={`w-full px-3 py-2 text-sm rounded-md border bg-white dark:bg-gray-900 resize-none transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 dark:border-gray-700 focus:border-green-600 focus:ring-green-600"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-10 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>
              </form>
            )}

            {/* Success State */}
            {isSubmitSuccessful && isSuccess && (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                  ¡Mensaje enviado!
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{Message}</p>
                <button
                  onClick={() => reset()}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Enviar otro mensaje
                </button>
              </div>
            )}

            {/* Error State */}
            {isSubmitSuccessful && !isSuccess && (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                  Ha ocurrido un error
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{Message}</p>
                <button
                  onClick={() => reset()}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Intentar de nuevo
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupWidget;
