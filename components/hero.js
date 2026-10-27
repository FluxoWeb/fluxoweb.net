import { MapPin } from "lucide-react";
import Container from "./container";
import BrandCircuit from "./brandCircuit";
import { Button, WHATSAPP_URL } from "./ui";

// Hero (capa Marca + Empresa): texto a la izquierda, símbolo animado a la derecha.
// Las dos intenciones llevan al mismo WhatsApp.
const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-night text-night-ink">
      <Container className="grid items-center gap-10 pb-16 pt-28 sm:pt-32 lg:min-h-[min(100svh,880px)] lg:grid-cols-12 lg:gap-8 lg:pb-20">
        <div className="lg:col-span-6">
          <h1 className="fx-rise max-w-[14ch] text-display font-semibold">
            Vos conocés tu negocio. <span className="text-green">Juntos construimos</span> lo que sigue.
          </h1>
          <p className="fx-rise mt-6 max-w-[42ch] text-lead text-night-muted [animation-delay:120ms]">
            Transformamos tus ideas y desafíos en soluciones tecnológicas.
          </p>
          <div className="fx-rise mt-9 flex flex-col gap-3 sm:flex-row [animation-delay:240ms]">
            <Button href={WHATSAPP_URL} size="lg">
              Tengo una idea
            </Button>
            <Button href={WHATSAPP_URL} variant="outline" size="lg">
              Quiero resolver un problema
            </Button>
          </div>
          <p className="fx-rise mt-8 flex items-center gap-2 text-[14px] text-night-muted [animation-delay:320ms]">
            <MapPin className="h-4 w-4" strokeWidth={1.8} />
            Ciudad del Este · Paraguay
          </p>
        </div>

        <div className="lg:col-span-6">
          <BrandCircuit className="mx-auto max-w-[620px]" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
