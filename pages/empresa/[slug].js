import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PopupWidget from "../../components/popupWidget";
import Container from "../../components/container";
import { memberSlugs, getMember } from "../../data/members";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  ExternalLink,
  MessageCircle,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const colorMap = {
  indigo: {
    gradient: "from-indigo-500 to-indigo-700",
    badge: "bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400",
    icon: "bg-indigo-50 dark:bg-indigo-950 border-indigo-100 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400",
    tag: "bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300",
    dot: "bg-indigo-600",
  },
  green: {
    gradient: "from-green-500 to-green-700",
    badge: "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900 text-green-600 dark:text-green-400",
    icon: "bg-green-50 dark:bg-green-950 border-green-100 dark:border-green-900 text-green-600 dark:text-green-400",
    tag: "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300",
    dot: "bg-green-600",
  },
  amber: {
    gradient: "from-amber-500 to-amber-700",
    badge: "bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-900 text-amber-600 dark:text-amber-400",
    icon: "bg-amber-50 dark:bg-amber-950 border-amber-100 dark:border-amber-900 text-amber-600 dark:text-amber-400",
    tag: "bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300",
    dot: "bg-amber-600",
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-700",
    badge: "bg-cyan-50 dark:bg-cyan-950 border-cyan-200 dark:border-cyan-900 text-cyan-600 dark:text-cyan-400",
    icon: "bg-cyan-50 dark:bg-cyan-950 border-cyan-100 dark:border-cyan-900 text-cyan-600 dark:text-cyan-400",
    tag: "bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300",
    dot: "bg-cyan-600",
  },
};

export default function MemberPortfolio({ member }) {
  const c = colorMap[member.color] || colorMap.indigo;

  return (
    <>
      <Head>
        <title>{member.name} — Fluxo Web Group E.A.S.</title>
        <meta
          name="description"
          content={`Portafolio de ${member.name} — ${member.role} en Fluxo Web Group E.A.S.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="py-16 md:py-24">
        <Container>
          <Link
            href="/empresa"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al equipo
          </Link>

          <div className="flex flex-col sm:flex-row items-start gap-8">
            {/* Avatar */}
            <div
              className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center`}
            >
              <span className="text-3xl font-bold text-white">{member.initials}</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium mb-3 ${c.badge}`}
              >
                {member.role}
              </span>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                {member.name}
              </h1>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{member.location}</span>
              </div>

              {/* Social links */}
              {(member.contact.whatsapp ||
                member.contact.email ||
                member.contact.github ||
                member.contact.linkedin) && (
                <div className="mt-4 flex items-center gap-3">
                  {member.contact.whatsapp && (
                    <Link
                      href={member.contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 h-9 px-4 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Link>
                  )}
                  {member.contact.email && (
                    <Link
                      href={`mailto:${member.contact.email}`}
                      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                    >
                      <Mail className="h-4 w-4" />
                    </Link>
                  )}
                  {member.contact.github && (
                    <Link
                      href={member.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  )}
                  {member.contact.linkedin && (
                    <Link
                      href={member.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Bio */}
      <section className="py-12 bg-gray-50 dark:bg-[#1D1D1D]">
        <Container>
          <SectionHeader icon={<MessageCircle className="h-4 w-4" />} title="Sobre mí" colorClass={c.icon} />
          <p className="mt-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            {member.bio}
          </p>
        </Container>
      </section>

      {/* Skills */}
      {member.skills.length > 0 && (
        <section className="py-12">
          <Container>
            <SectionHeader icon={<Code2 className="h-4 w-4" />} title="Stack técnico" colorClass={c.icon} />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {member.skills.map((group) => (
                <div
                  key={group.category}
                  className="p-5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50"
                >
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${c.tag}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Projects */}
      {member.projects.length > 0 && (
        <section className="py-12 bg-gray-50 dark:bg-[#1D1D1D]">
          <Container>
            <SectionHeader icon={<Briefcase className="h-4 w-4" />} title="Proyectos" colorClass={c.icon} />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {member.projects.map((project) => (
                <div
                  key={project.title}
                  className="group p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                      {project.title}
                    </h3>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${c.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Experience & Education */}
      {(member.experience.length > 0 || member.education.length > 0) && (
        <section className="py-12">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Experience */}
              {member.experience.length > 0 && (
                <div>
                  <SectionHeader
                    icon={<Briefcase className="h-4 w-4" />}
                    title="Experiencia"
                    colorClass={c.icon}
                  />
                  <Timeline items={member.experience} dotClass={c.dot} />
                </div>
              )}

              {/* Education */}
              {member.education.length > 0 && (
                <div>
                  <SectionHeader
                    icon={<GraduationCap className="h-4 w-4" />}
                    title="Educación"
                    colorClass={c.icon}
                  />
                  <Timeline items={member.education} dotClass={c.dot} />
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      <Footer />
      <PopupWidget />
    </>
  );
}

function SectionHeader({ icon, title, colorClass }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center justify-center h-8 w-8 rounded-md border ${colorClass}`}
      >
        {icon}
      </div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
    </div>
  );
}

function Timeline({ items, dotClass }) {
  return (
    <div className="relative mt-6 pl-6">
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div
              className={`absolute -left-6 top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-gray-950 -translate-x-1/2 ${dotClass}`}
            />
            <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
              {item.year}
            </span>
            <h3 className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            {item.company && (
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.company}</p>
            )}
            {item.institution && (
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.institution}</p>
            )}
            {item.description && (
              <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
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
