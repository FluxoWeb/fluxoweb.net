import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const WHATSAPP_URL = "https://wa.link/18ywdk";

// CTA principal: píldora verde con la flecha dentro de una terminal negra (el nodo del logo).
export function WhatsAppButton({ label = "Escríbenos por WhatsApp", className = "" }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex h-14 items-center gap-4 rounded-full bg-green pl-6 pr-2 text-[15px] font-medium text-[#0B0B0B] transition-colors duration-300 hover:bg-[#3BE07D] ${className}`}
    >
      <span>{label}</span>
      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0B0B0B] text-green transition-transform duration-500 ease-out-expo group-hover:rotate-45">
        <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={1.8} />
      </span>
    </a>
  );
}

// Enlace secundario: texto con flecha que avanza.
export function ArrowLink({ href, children, className = "", external = false }) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link
      href={href}
      {...props}
      className={`group inline-flex items-center gap-2 text-[15px] font-medium underline-offset-[6px] hover:underline ${className}`}
    >
      {children}
      <Icon className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" strokeWidth={1.8} />
    </Link>
  );
}

// Terminal: el círculo con aro de los extremos del circuito del logo.
export function Terminal({ className = "", lit = false }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-3 w-3 shrink-0 rounded-full border-[1.5px] ${
        lit ? "border-green bg-green" : "border-current bg-transparent"
      } ${className}`}
    />
  );
}

// Encabezado de sección: título y bajada apilados, sin eyebrow.
export function SectionHeading({ title, children, className = "", as: Tag = "h2" }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Tag className="text-title font-normal">{title}</Tag>
      {children && <p className="mt-6 max-w-[60ch] text-lead text-muted">{children}</p>}
    </div>
  );
}
