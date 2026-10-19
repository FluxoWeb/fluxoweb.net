import Nanduti from "./nanduti";
import Container from "./container";
import { WhatsAppButton } from "./ui";

// Cierre de página: el ñandutí en calma y una sola acción.
export default function Closing({
  title = "Empecemos por tu negocio.",
  text = "Cuéntanos qué pasa en tu empresa, con tus palabras. Te ayudamos a encontrar qué vale la pena resolver primero.",
  label,
}) {
  return (
    <section className="px-2 pt-24 sm:px-3 sm:pt-32" aria-labelledby="cierre-title">
      <div className="frame isolate bg-night text-night-ink">
        <Nanduti variant="quiet" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(29,29,29,0.92)_30%,rgba(29,29,29,0.35))]"
        />
        <Container className="relative z-10 flex flex-col items-center py-24 text-center sm:py-36">
          <h2 id="cierre-title" className="max-w-[16ch] text-title font-normal">
            {title}
          </h2>
          <p className="mt-6 max-w-[48ch] text-lead text-night-muted">{text}</p>
          <WhatsAppButton className="mt-10" label={label} />
        </Container>
      </div>
    </section>
  );
}
