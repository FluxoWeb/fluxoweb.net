import Nanduti from "./nanduti";
import Container from "./container";
import { WhatsAppButton } from "./ui";

// Cierre (capa Movimiento + CTA): el manifiesto y una sola acción, con hilos sutiles en los bordes.
export default function Closing({
  title = "Tu negocio sabe más de lo que imaginás.",
  text = "Hacé que su inteligencia trabaje para vos.",
  label = "Conversemos sobre tu negocio",
}) {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/10 bg-night text-night-ink" aria-labelledby="cierre-title">
      <Nanduti variant="quiet" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(29,29,29,0.95)_45%,rgba(29,29,29,0.55))]"
      />
      <Container className="relative z-10 flex flex-col items-center py-24 text-center sm:py-32">
        <h2 id="cierre-title" className="max-w-[18ch] text-title font-semibold">
          {title}
        </h2>
        <p className="mt-5 max-w-[48ch] text-lead text-night-muted">{text}</p>
        <WhatsAppButton className="mt-10" label={label} />
      </Container>
    </section>
  );
}
