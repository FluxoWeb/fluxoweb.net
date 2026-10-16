import Head from "next/head";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import PageHero from "../../components/pageHero";
import Closing from "../../components/closing";
import { SectionHeading } from "../../components/ui";
import { memberSlugs, getMember } from "../../data/members";

function contactLinks(contact = {}) {
  return [
    contact.whatsapp && { label: "WhatsApp", href: contact.whatsapp, icon: MessageCircle },
    contact.email && { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
    contact.github && { label: "GitHub", href: contact.github, icon: Github },
    contact.linkedin && { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
  ].filter(Boolean);
}

export default function MemberPortfolio({ member }) {
  const featured = member.projects.filter((p) => p.featured);
  const others = member.projects.filter((p) => !p.featured);
  const links = contactLinks(member.contact);

  return (
    <>
      <Head>
        <title>{`${member.name} — Fluxo Web`}</title>
        <meta name="description" content={`${member.name}, ${member.role} en Fluxo Web Group E.A.S.`} />
      </Head>
      <Navbar />
      <main>
        <PageHero back={{ href: "/empresa", label: "Empresa" }} title={member.name} lead={member.role}>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <ul className="flex flex-wrap gap-2">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 px-4 text-[14px] text-night-ink transition-colors hover:border-green hover:bg-green hover:text-[#0B0B0B]"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            {member.location && (
              <p className="flex items-center gap-2 text-[14px] text-night-muted">
                <MapPin className="h-4 w-4" />
                {member.location}
              </p>
            )}
          </div>
        </PageHero>

        <section className="pt-24 sm:pt-32" aria-labelledby="perfil-title">
          <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <span className="block h-40 w-40 overflow-hidden rounded-full border border-line/20 p-1.5 sm:h-48 sm:w-48">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={192}
                    height={192}
                    priority
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                ) : (
                  <span className="grid h-full w-full place-items-center rounded-full bg-night-raised text-5xl font-light tracking-tight text-night-ink">
                    {member.initials}
                  </span>
                )}
              </span>
            </div>
            <div className="lg:col-span-8">
              <h2 id="perfil-title" className="sr-only">
                Perfil
              </h2>
              <p className="max-w-[56ch] text-[clamp(1.25rem,1.8vw,1.625rem)] font-light leading-relaxed">{member.bio}</p>
            </div>
          </Container>
        </section>

        {member.skills?.length > 0 && (
          <section className="pt-24 sm:pt-32" aria-labelledby="skills-title">
            <Container>
              <SectionHeading title={<span id="skills-title">Habilidades.</span>} />
              <dl className="mt-14 grid border-t border-line/15 sm:grid-cols-2 lg:grid-cols-4">
                {member.skills.map((group) => (
                  <div key={group.category} className="border-b border-line/15 py-8 sm:pr-8">
                    <dt className="text-[15px] font-medium text-muted">{group.category}</dt>
                    <dd className="mt-4">
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-[16px]">
                            <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full border-[1.5px] border-green" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </Container>
          </section>
        )}

        {member.projects?.length > 0 && (
          <section className="pt-24 sm:pt-32" aria-labelledby="proyectos-title">
            <Container>
              <SectionHeading title={<span id="proyectos-title">Proyectos.</span>} />
              {featured.length > 0 && (
                <ul className="mt-14 grid gap-3 md:grid-cols-2">
                  {featured.map((p) => (
                    <li key={p.title} className="frame flex flex-col border border-line/15 bg-panel p-7 sm:p-9">
                      <p className="tabular font-mono text-[13px] text-muted">{p.year}</p>
                      <h3 className="mt-3 text-2xl font-medium tracking-tight">{p.title}</h3>
                      <p className="mt-4 flex-1 text-[16px] leading-relaxed text-muted">{p.description}</p>
                      <Tags tags={p.tags} />
                      {p.url && <ProjectLink url={p.url} />}
                    </li>
                  ))}
                </ul>
              )}
              {others.length > 0 && (
                <ul className="mt-10 border-t border-line/15">
                  {others.map((p) => (
                    <li key={p.title} className="grid gap-3 border-b border-line/15 py-8 md:grid-cols-[80px_1fr_1.4fr] md:gap-8">
                      <p className="tabular font-mono text-[13px] text-muted">{p.year}</p>
                      <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                      <div>
                        <p className="text-[15px] leading-relaxed text-muted">{p.description}</p>
                        <Tags tags={p.tags} />
                        {p.url && <ProjectLink url={p.url} />}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Container>
          </section>
        )}

        {(member.experience?.length > 0 || member.education?.length > 0) && (
          <section className="pt-24 sm:pt-32" aria-label="Trayectoria">
            <Container className="grid gap-16 lg:grid-cols-2 lg:gap-8">
              {member.experience?.length > 0 && <Timeline title="Experiencia" items={member.experience} />}
              {member.education?.length > 0 && <Timeline title="Formación" items={member.education} />}
            </Container>
          </section>
        )}

        <Closing title={`¿Un proyecto para ${member.name.split(" ")[0]}?`} />
      </main>
      <Footer />
    </>
  );
}

function Tags({ tags }) {
  if (!tags?.length) return null;
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-line/15 px-3 py-1 text-[13px] text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectLink({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-green-ink underline-offset-[6px] hover:underline"
    >
      Ver proyecto
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

function Timeline({ title, items }) {
  return (
    <div>
      <h2 className="text-title font-normal">{title}</h2>
      <ol className="relative mt-10">
        <span aria-hidden="true" className="absolute bottom-3 left-[5px] top-3 w-px bg-line/15" />
        {items.map((item, i) => (
          <li key={`${item.year}-${item.title}`} className="relative grid grid-cols-[12px_1fr] gap-x-6 pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className={`relative mt-1.5 h-3 w-3 rounded-full border-[1.5px] ${i === 0 ? "border-green bg-green" : "border-line/50 bg-ground"}`}
            />
            <div>
              <p className="tabular font-mono text-[13px] text-muted">{item.year}</p>
              <h3 className="mt-2 text-xl font-medium tracking-tight">{item.title}</h3>
              {(item.company || item.institution) && <p className="mt-1 text-[15px] text-muted">{item.company || item.institution}</p>}
              {item.description && <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-muted">{item.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: memberSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const member = getMember(params.slug);
  return { props: { member } };
}
