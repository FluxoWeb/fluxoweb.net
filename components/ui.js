import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const WHATSAPP_URL = "https://wa.link/18ywdk";

const isExternal = (href) => /^https?:\/\//.test(href);

const variants = {
  // Verde relleno: la acción principal de cada pantalla.
  primary: "bg-green text-[#0B0B0B] hover:bg-[#3BE07D]",
  // Borde del color del texto: la acción secundaria al lado de la principal.
  outline: "border border-line/35 text-ink hover:border-green hover:text-green-ink",
  // Negro sobre campos verdes.
  dark: "bg-[#0B0B0B] text-green hover:bg-[#262626]",
};

// Botón con esquinas redondeadas y flecha al final (lenguaje del documento de diseño).
export function Button({ href, children, variant = "primary", size = "md", className = "" }) {
  const external = isExternal(href);
  const sizes = { md: "h-12 px-5 text-[15px]", lg: "h-14 px-6 text-[16px]", sm: "h-10 px-4 text-[14px]" };
  const classes = `group inline-flex items-center justify-center gap-2.5 rounded-control font-medium transition-colors duration-200 ${sizes[size]} ${variants[variant]} ${className}`;
  const arrow = (
    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5" strokeWidth={2} />
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {arrow}
    </Link>
  );
}

// Acción principal hacia WhatsApp.
export function WhatsAppButton({ label = "Conversemos sobre tu negocio", variant = "primary", size = "lg", className = "" }) {
  return (
    <Button href={WHATSAPP_URL} variant={variant} size={size} className={className}>
      {label}
    </Button>
  );
}

// Enlace secundario: texto con flecha que avanza.
export function ArrowLink({ href, children, className = "", external }) {
  const ext = external ?? isExternal(href);
  const Icon = ext ? ArrowUpRight : ArrowRight;
  const props = ext ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link
      href={href}
      {...props}
      className={`group inline-flex items-center gap-2 text-[15px] font-medium underline-offset-[6px] hover:underline ${className}`}
    >
      {children}
      <Icon className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" strokeWidth={1.8} />
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
export function SectionHeading({ title, children, className = "", align = "left", as: Tag = "h2" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <Tag className="text-title font-semibold">{title}</Tag>
      {children && (
        <p className={`mt-5 max-w-[60ch] text-lead text-muted ${centered ? "mx-auto" : ""}`}>{children}</p>
      )}
    </div>
  );
}
