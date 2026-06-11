import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
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
  Star,
  Calendar,
} from "lucide-react";

const colorMap = {
  indigo: {
    gradient: "from-indigo-500 to-indigo-700",
    heroBg: "from-indigo-50 via-white to-white dark:from-indigo-950/20 dark:via-gray-950 dark:to-gray-950",
    heroBlob: "bg-indigo-100 dark:bg-indigo-950/30",
    badge: "bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400",
    icon: "bg-indigo-50 dark:bg-indigo-950 border-indigo-100 dark:border-indigo-900 text-indigo-600 dark:text-indigo-400",
    tag: "bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300",
    tagFeatured: "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800",
    dot: "bg-indigo-600",
    ring: "ring-indigo-200 dark:ring-indigo-900",
    featuredBorder: "border-indigo-300 dark:border-indigo-700",
    featuredBg: "bg-indigo-50/50 dark:bg-indigo-950/30",
    categoryText: "text-indigo-600 dark:text-indigo-400",
    ctaBg: "bg-indigo-600 dark:bg-indigo-700",
    availBadge: "bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
  },
  green: {
    gradient: "from-green-500 to-green-700",
    heroBg: "from-green-50 via-white to-white dark:from-green-950/20 dark:via-gray-950 dark:to-gray-950",
    heroBlob: "bg-green-100 dark:bg-green-950/30",
    badge: "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900 text-green-600 dark:text-green-400",
    icon: "bg-green-50 dark:bg-green-950 border-green-100 dark:border-green-900 text-green-600 dark:text-green-400",
    tag: "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300",
    tagFeatured: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800",
    dot: "bg-green-600",
    ring: "ring-green-200 dark:ring-green-900",
    featuredBorder: "border-green-300 dark:border-green-700",
    featuredBg: "bg-green-50/50 dark:bg-green-950/30",
    categoryText: "text-green-600 dark:text-green-400",
    ctaBg: "bg-green-600 dark:bg-green-700",
    availBadge: "bg-green-100 dark:bg-green-900/60 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
  },
  amber: {
    gradient: "from-amber-500 to-amber-700",
    heroBg: "from-amber-50 via-white to-white dark:from-amber-950/20 dark:via-gray-950 dark:to-gray-950",
    heroBlob: "bg-amber-100 dark:bg-amber-950/30",
    badge: "bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-900 text-amber-600 dark:text-amber-400",
    icon: "bg-amber-50 dark:bg-amber-950 border-amber-100 dark:border-amber-900 text-amber-600 dark:text-amber-400",
    tag: "bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300",
    tagFeatured: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800",
    dot: "bg-amber-600",
    ring: "ring-amber-200 dark:ring-amber-900",
    featuredBorder: "border-amber-300 dark:border-amber-700",
    featuredBg: "bg-amber-50/50 dark:bg-amber-950/30",
    categoryText: "text-amber-600 dark:text-amber-400",
    ctaBg: "bg-amber-600 dark:bg-amber-700",
    availBadge: "bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-700",
    heroBg: "from-cyan-50 via-white to-white dark:from-cyan-950/20 dark:via-gray-950 dark:to-gray-950",
    heroBlob: "bg-cyan-100 dark:bg-cyan-950/30",
    badge: "bg-cyan-50 dark:bg-cyan-950 border-cyan-200 dark:border-cyan-900 text-cyan-600 dark:text-cyan-400",
    icon: "bg-cyan-50 dark:bg-cyan-950 border-cyan-100 dark:border-cyan-900 text-cyan-600 dark:text-cyan-400",
    tag: "bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300",
    tagFeatured: "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800",
    dot: "bg-cyan-600",
    ring: "ring-cyan-200 dark:ring-cyan-900",
    featuredBorder: "border-cyan-300 dark:border-cyan-700",
    featuredBg: "bg-cyan-50/50 dark:bg-cyan-950/30",
    categoryText: "text-cyan-600 dark:text-cyan-400",
    ctaBg: "bg-cyan-600 dark:bg-cyan-700",
    availBadge: "bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
  },
};

export default function MemberPortfolio({ member }) {
  const c = colorMap[member.color] || colorMap.indigo;
  const featuredProjects = member.projects.filter((p) => p.featured);
  const otherProjects = member.projects.filter((p) => !p.featured);

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
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${c.heroBg} -z-10`} />
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${c.heroBlob} rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3 -z-10`} />

        <Container>
          <Link
            href="/empresa"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al equipo
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            {/* Left: info */}
            <div className="flex-1 min-w-0">
              {/* Role badge */}
              <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium mb-4 ${c.badge}`}>
                {member.role}
              </span>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl leading-tight">
                {member.name}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  {member.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
                  Disponible
                </span>
              </div>

              {/* Bio summary */}
              <p className="mt-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {member.contact.email && (
                  <Link
                    href={`mailto:${member.contact.email}`}
                    className="inline-flex items-center gap-2 h-9 px-4 text-sm font-medium rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                  >
                    <Mail className="h-4 w-4" />
                    {member.contact.email}
                  </Link>
                )}
                {member.contact.github && (
                  <Link
                    href={member.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-9 px-4 text-sm font-medium rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                )}
                {member.contact.linkedin && (
                  <Link
                    href={member.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-9 px-4 text-sm font-medium rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                )}
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
              </div>
            </div>

            {/* Right: photo */}
            <div className="flex-shrink-0">
              {member.photo ? (
                <div className={`relative w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden ring-4 ${c.ring} shadow-xl`}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className={`w-40 h-40 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shadow-xl`}>
                  <span className="text-5xl font-bold text-white">{member.initials}</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Skills */}
      {member.skills.length > 0 && (
        <section className="py-14 md:py-20 bg-gray-50 dark:bg-[#1D1D1D]">
          <Container>
            <SectionHeader icon={<Code2 className="h-4 w-4" />} title="Stack técnico" colorClass={c.icon} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {member.skills.map((group) => (
                <div
                  key={group.category}
                  className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60"
                >
                  <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 ${c.categoryText}`}>
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
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

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-14 md:py-20">
          <Container>
            <SectionHeader icon={<Star className="h-4 w-4" />} title="Proyectos destacados" colorClass={c.icon} />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <div
                  key={project.title}
                  className={`relative p-6 rounded-xl border ${c.featuredBorder} ${c.featuredBg} flex flex-col gap-4`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {project.year && (
                          <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar className="h-3 w-3" />
                            {project.year}
                          </span>
                        )}
                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${c.tagFeatured}`}>
                          <Star className="h-3 w-3" />
                          Destacado
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400"
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

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className={`py-14 md:py-20 ${featuredProjects.length > 0 ? "bg-gray-50 dark:bg-[#1D1D1D]" : ""}`}>
          <Container>
            <SectionHeader icon={<Briefcase className="h-4 w-4" />} title="Otros proyectos" colorClass={c.icon} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="group p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 flex flex-col gap-3 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      {project.year && (
                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mb-1">
                          <Calendar className="h-3 w-3" />
                          {project.year}
                        </span>
                      )}
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-md border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-400 dark:text-gray-500"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${c.tag}`}
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
        <section className="py-14 md:py-20 bg-gray-50 dark:bg-[#1D1D1D]">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2">
              {member.experience.length > 0 && (
                <div>
                  <SectionHeader icon={<Briefcase className="h-4 w-4" />} title="Experiencia" colorClass={c.icon} />
                  <Timeline items={member.experience} dotClass={c.dot} />
                </div>
              )}
              {member.education.length > 0 && (
                <div>
                  <SectionHeader icon={<GraduationCap className="h-4 w-4" />} title="Educación" colorClass={c.icon} />
                  <Timeline items={member.education} dotClass={c.dot} />
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      {member.contact.email && (
        <section className="py-14 md:py-20">
          <Container>
            <div className={`relative overflow-hidden rounded-2xl ${c.ctaBg} px-8 py-10 md:px-12 md:py-12`}>
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="max-w-xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Disponibilidad</p>
                  <h2 className="text-xl font-bold text-white sm:text-2xl leading-snug">
                    Disponible para desarrollo full stack, mejoras en sistemas empresariales e integraciones
                  </h2>
                  <p className="mt-2 text-sm text-white/80">
                    Enfocado en soluciones que resuelven procesos reales de negocio.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <Link
                    href={`mailto:${member.contact.email}`}
                    className="inline-flex items-center justify-center gap-2 h-10 px-5 text-sm font-medium text-white/90 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {member.contact.email}
                  </Link>
                  {member.contact.linkedin && (
                    <Link
                      href={member.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-10 px-5 text-sm font-medium bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  )}
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute inset-0 -z-0 opacity-20">
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white blur-3xl" />
              </div>
            </div>
          </Container>
        </section>
      )}

      <Footer />
    </>
  );
}

function SectionHeader({ icon, title, colorClass }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`flex items-center justify-center h-8 w-8 rounded-md border ${colorClass}`}>
        {icon}
      </div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
    </div>
  );
}

function Timeline({ items, dotClass }) {
  const [visible, setVisible] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el, index) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => (prev.includes(index) ? prev : [...prev, index]));
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <div className="relative mt-6 pl-6">
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="relative"
            style={{
              opacity: visible.includes(index) ? 1 : 0,
              transform: visible.includes(index) ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
            }}
          >
            <div
              className={`absolute -left-6 top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-[#1D1D1D] -translate-x-1/2 ${dotClass}`}
              style={{
                transform: `translateX(-50%) scale(${visible.includes(index) ? 1 : 0})`,
                transition: `transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.12 + 0.1}s`,
              }}
            />
            <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
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
