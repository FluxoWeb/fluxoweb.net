import Head from "next/head";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import PageHero from "../../components/pageHero";
import Closing from "../../components/closing";
import Pricing from "../../components/pricing";
import Faq from "../../components/faq";
import { SectionHeading, WhatsAppButton } from "../../components/ui";

const plans = [
  {
    name: "Starter",
    description: "Para emprendedores y equipos de ventas pequeños.",
    features: ["Hasta 500 contactos", "2 usuarios", "Embudo de ventas básico", "Gestión de tareas", "Historial de actividades", "Soporte por email"],
  },
  {
    name: "Professional",
    description: "Para equipos en crecimiento que necesitan más potencia.",
    featured: true,
    features: [
      "Hasta 5.000 contactos",
      "10 usuarios",
      "Múltiples embudos",
      "Automatización de tareas",
      "Reportes avanzados",
      "Integración con email",
      "Acceso por API",
      "Soporte prioritario",
    ],
  },
  {
    name: "Enterprise",
    description: "Para empresas con alta demanda.",
    features: [
      "Contactos ilimitados",
      "Usuarios ilimitados",
      "Embudos ilimitados",
      "Automatización avanzada",
      "Tableros personalizados",
      "Integraciones avanzadas",
      "API sin límites",
      "Capacitación incluida",
    ],
  },
];

const features = [
  { title: "Gestión de contactos", text: "Toda la información de clientes y prospectos en un solo lugar." },
  { title: "Embudo de ventas", text: "Tableros Kanban para ver y mover cada oportunidad." },
  { title: "Seguimiento de actividades", text: "Llamadas, reuniones y tareas con recordatorios automáticos." },
  { title: "Integración con email", text: "Conecta tu correo y registra las comunicaciones automáticamente." },
  { title: "Reportes", text: "Tableros en tiempo real para medir el rendimiento del equipo." },
  { title: "Automatización", text: "Las tareas repetitivas se hacen solas; tu equipo se enfoca en vender." },
];

const reasons = [
  { title: "Implementación rápida", text: "Configuramos tu CRM e importamos tus contactos por ti." },
  { title: "Datos seguros", text: "Cifrado y copias de seguridad automáticas diarias." },
  { title: "Soporte local", text: "Un equipo de soporte en tu zona horaria y en tu idioma." },
];

const faqCRM = [
  {
    question: "¿Puedo importar mis contactos existentes?",
    answer: "Sí, puedes importar contactos desde Excel, CSV o migrar desde otro CRM. Nuestro equipo te asiste en todo el proceso.",
  },
  {
    question: "¿Hay período de prueba?",
    answer: "Ofrecemos una demostración personalizada y 14 días de prueba gratuita para que evalúes FluxoCRM sin compromiso.",
  },
  {
    question: "¿Puedo cambiar de plan?",
    answer: "Sí, puedes cambiar de plan en cualquier momento. Los cambios se aplican de inmediato y el cobro se prorratea.",
  },
  {
    question: "¿FluxoCRM funciona en el celular?",
    answer: "Sí, funciona en dispositivos móviles desde el navegador. También estamos desarrollando una app nativa.",
  },
];

export default function FluxoCRM() {
  return (
    <>
      <Head>
        <title>FluxoCRM — Gestión de clientes | Fluxo Web</title>
        <meta
          name="description"
          content="FluxoCRM, el sistema de gestión de clientes de Fluxo Web: contactos, oportunidades y automatización comercial."
        />
      </Head>
      <Navbar />
      <main>
        <PageHero
          back={{ href: "/productos", label: "Productos" }}
          title="Gestiona tus clientes con FluxoCRM."
          lead="Nuestro sistema de gestión de clientes para organizar contactos, seguir oportunidades y cerrar más ventas."
        >
          <WhatsAppButton label="Solicitar una demostración" />
        </PageHero>

        <section className="pt-24 sm:pt-32" aria-labelledby="planes-title">
          <Container>
            <SectionHeading title={<span id="planes-title">Planes.</span>}>
              Todos los planes incluyen 14 días de prueba. Te enviamos una propuesta según la cantidad de usuarios y lo que necesite tu equipo.
            </SectionHeading>
            <div className="mt-14">
              <Pricing plans={plans} />
            </div>
          </Container>
        </section>

        <section className="pt-24 sm:pt-32" aria-labelledby="funciones-title">
          <Container>
            <SectionHeading title={<span id="funciones-title">Todo lo que necesitas para vender.</span>} />
            <dl className="mt-14 grid border-t border-line/15 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="border-b border-line/15 py-8 sm:pr-10">
                  <dt className="flex items-center gap-3 text-xl font-medium tracking-tight">
                    <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-[1.5px] border-green" />
                    {f.title}
                  </dt>
                  <dd className="mt-3 max-w-[36ch] pl-[22px] text-[15px] leading-relaxed text-muted">{f.text}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section className="px-2 pt-24 sm:px-3 sm:pt-32" aria-labelledby="razones-title">
          <div className="frame bg-green text-[#0B0B0B]">
            <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:gap-8">
              <h2 id="razones-title" className="text-title font-normal lg:col-span-5">
                ¿Por qué FluxoCRM?
              </h2>
              <ul className="lg:col-span-7">
                {reasons.map((r) => (
                  <li key={r.title} className="grid gap-2 border-t border-[#0B0B0B]/20 py-7 sm:grid-cols-[220px_1fr] sm:gap-8">
                    <h3 className="text-xl font-medium tracking-tight">{r.title}</h3>
                    <p className="text-[16px] leading-relaxed text-[#0B0B0B]/75">{r.text}</p>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        </section>

        <section className="pt-24 sm:pt-32" aria-labelledby="faq-title">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <h2 id="faq-title" className="text-title font-normal lg:col-span-4">
              Preguntas frecuentes
            </h2>
            <div className="lg:col-span-8">
              <Faq items={faqCRM} />
            </div>
          </Container>
        </section>

        <Closing
          title="¿Listo para ordenar tus ventas?"
          text="Agenda una demostración gratuita y descubre cómo FluxoCRM puede ayudarte a cerrar más ventas."
          label="Solicitar una demostración"
        />
      </main>
      <Footer />
    </>
  );
}
