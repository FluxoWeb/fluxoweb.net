import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

// Los socios como anclajes de la red: retratos sobre un mismo hilo.
export default function Members({ members, detailed = false }) {
  return (
    <ul className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      <span aria-hidden="true" className="absolute left-0 right-0 top-12 hidden h-px bg-line/15 lg:block" />
      {members.map((m) => (
        <li key={m.slug} className="relative">
          <Link href={`/empresa/${m.slug}`} className="group block">
            <span className="relative block h-24 w-24 overflow-hidden rounded-full border border-line/20 bg-ground p-1 transition-colors duration-300 group-hover:border-green">
              {m.photo ? (
                <Image src={m.photo} alt="" width={88} height={88} className="h-full w-full rounded-full object-cover object-top" />
              ) : (
                <span className="grid h-full w-full place-items-center rounded-full bg-night-raised text-xl font-light tracking-tight text-night-ink">
                  {m.initials}
                </span>
              )}
            </span>
            <h3 className="mt-6 text-xl font-medium tracking-tight transition-colors group-hover:text-green-ink">{m.name}</h3>
            <p className="mt-1 text-[15px] text-muted">{m.role}</p>
            {detailed && m.summary && <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-muted">{m.summary}</p>}
            {detailed && m.location && (
              <p className="mt-4 flex items-center gap-2 text-[13px] text-muted">
                <MapPin className="h-3.5 w-3.5" />
                {m.location}
              </p>
            )}
            <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium underline-offset-[6px] group-hover:underline">
              Ver perfil
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Campos públicos para getStaticProps (evita mandar portafolios completos al cliente).
export const pickMember = ({ slug, name, initials, role, summary, photo, location }) => ({
  slug,
  name,
  initials,
  role,
  summary: summary || null,
  photo: photo || null,
  location: location || null,
});
