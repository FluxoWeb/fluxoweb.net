import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import PageHero from "../../components/pageHero";
import { SectionHeading } from "../../components/ui";
import { ContactLinks } from "../../components/legalDocument";

const documentos = [
  {
    titulo: "Términos y Condiciones",
    descripcion: "Condiciones de uso, alcance del servicio, propiedad intelectual, pagos y política de cancelación.",
    link: "/terminos",
  },
  {
    titulo: "Política de Privacidad",
    descripcion: "Cómo recopilamos, usamos y protegemos la información personal de nuestros clientes y usuarios.",
    link: "/privacidad",
  },
];

const politicas = [
  {
    titulo: "Licencia de Software",
    puntos: [
      "Los derechos de autor pertenecen a Fluxo Web hasta el pago completo.",
      "Una vez saldado el proyecto, el cliente recibe licencia de uso completa.",
      "El código fuente se entrega si así se acuerda en el contrato.",
    ],
  },
  {
    titulo: "Confidencialidad (NDA)",
    puntos: [
      "Ambas partes se comprometen a proteger la información confidencial del otro.",
      "Prohibida la divulgación a terceros sin consentimiento por escrito.",
      "El acuerdo permanece vigente después de finalizado el proyecto.",
    ],
  },
  {
    titulo: "Política de Reembolso",
    puntos: [
      "Los reembolsos aplican solo sobre montos no ejecutados al momento de la solicitud.",
      "El procedimiento de cancelación debe iniciarse por escrito.",
      "Los servicios de hosting se cancelan al vencimiento del período contratado.",
    ],
  },
  {
    titulo: "Acuerdo de Soporte (SLA)",
    puntos: [
      "Tiempo de respuesta para incidencias críticas: máximo 4 horas hábiles.",
      "Resolución de errores funcionales cubierta durante el período de garantía.",
      "El nivel de soporte depende del plan contratado.",
    ],
  },
  {
    titulo: "Limitación de Responsabilidad",
    puntos: [
      "Fluxo Web no se responsabiliza por daños indirectos o consecuentes.",
      "La responsabilidad máxima no excede el monto total del contrato.",
      "El cliente es responsable de la veracidad de la información provista.",
    ],
  },
];

export default function Legal() {
  return (
    <>
      <Head>
        <title>Legal — Fluxo Web</title>
        <meta
          name="description"
          content="Documentos y políticas que regulan la relación entre Fluxo Web Group E.A.S. y sus clientes."
        />
      </Head>
      <Navbar />
      <main>
        <PageHero web={false} title="Información legal." lead="Los documentos y políticas que regulan la relación entre Fluxo Web Group E.A.S. y sus clientes.">
          <p className="text-[15px] text-night-muted">Si tienes alguna consulta, escríbenos a <ContactLinks tone="text-green" />.</p>
        </PageHero>

        <section className="pt-20 sm:pt-24" aria-label="Documentos">
          <Container>
            <ul className="grid gap-3 md:grid-cols-2">
              {documentos.map((d) => (
                <li key={d.link}>
                  <Link href={d.link} className="group frame flex h-full flex-col border border-line/15 bg-panel p-7 transition-colors hover:border-green sm:p-9">
                    <h2 className="text-2xl font-medium tracking-tight">{d.titulo}</h2>
                    <p className="mt-3 max-w-[48ch] flex-1 text-[16px] leading-relaxed text-muted">{d.descripcion}</p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-green-ink">
                      Leer documento
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="pt-24 sm:pt-32" aria-labelledby="politicas-title">
          <Container>
            <SectionHeading title={<span id="politicas-title">Políticas en resumen.</span>} />
            <dl className="mt-14 border-t border-line/15">
              {politicas.map((p) => (
                <div key={p.titulo} className="grid gap-4 border-b border-line/15 py-8 md:grid-cols-[280px_1fr] md:gap-8">
                  <dt className="text-xl font-medium tracking-tight">{p.titulo}</dt>
                  <dd>
                    <ul className="max-w-[68ch] space-y-2.5">
                      {p.puntos.map((punto) => (
                        <li key={punto} className="flex gap-3 text-[16px] leading-relaxed text-muted">
                          <span aria-hidden="true" className="mt-[9px] h-2 w-2 shrink-0 rounded-full border-[1.5px] border-green" />
                          {punto}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
