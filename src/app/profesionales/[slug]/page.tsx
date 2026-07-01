import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getProfessionalBySlug } from "@/data/professionals-server";
import { getProfessionalsDirectory } from "@/data/professionals-server";
import { getProfessionalDetail } from "@/data/professional-details";
import { withBasePath } from "@/lib/paths";
import { BioParagraphs } from "./BioParagraphs";

type Params = Promise<{ slug: string }>;

const FRAUNCES = { fontVariationSettings: '"SOFT" 0, "WONK" 1' };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const professional = await getProfessionalBySlug(slug);
  return {
    title: professional
      ? `${professional.name} | Bruchou & Funes de Rioja`
      : "Profesional | Bruchou & Funes de Rioja",
    description: professional ? professional.role : "Perfil profesional del estudio.",
    alternates: { canonical: `/profesionales/${slug}` },
  };
}

export async function generateStaticParams() {
  const professionals = await getProfessionalsDirectory();
  return professionals.map((professional) => ({ slug: professional.slug }));
}

export default async function ProfessionalProfilePage({ params }: { params: Params }) {
  const { slug } = await params;
  const professional = await getProfessionalBySlug(slug);
  const detail = getProfessionalDetail(slug);

  if (!professional) {
    return (
      <div className="relative bg-[#fbfaf8]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-50">
          <div className="pointer-events-auto">
            <Header variant="light" />
          </div>
        </div>
        <main className="flex min-h-[60vh] flex-col items-start justify-center px-[clamp(2rem,5.5vw,5rem)] pb-20 pt-[calc(76px+4rem)]">
          <p className="mb-4 font-poppins text-[12px] font-semibold tracking-[0.2px] text-[#233465] uppercase">
            Profesionales
          </p>
          <h1
            className="mb-6 font-fraunces text-[clamp(2.5rem,4vw,4rem)] font-normal leading-[1.05] text-[#071227]"
            style={FRAUNCES}
          >
            Perfil no disponible
          </h1>
          <Link
            href={withBasePath("/profesionales")}
            className="border border-[#233465] px-5 py-2.5 font-poppins text-[12px] font-semibold tracking-[0.2px] text-[#233465] hover:bg-[#233465] hover:text-white transition-colors rounded-[2px]"
          >
            Volver al directorio
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative bg-[#fbfaf8]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-50">
        <div className="pointer-events-auto">
          <Header variant="light" />
        </div>
      </div>

      <main
        id="main-content"
        tabIndex={-1}
        className="px-[clamp(1.5rem,5.5vw,5rem)] pb-10 pt-[calc(76px+5rem)]"
      >
        <div className="mx-auto max-w-[1280px]">
          {/* Two-column layout */}
          <div className="flex flex-col items-start gap-10 pb-10 lg:flex-row lg:gap-0">

            {/* ── Left column ─────────────────────────── */}
            <div className="w-full shrink-0 lg:w-[459px]">
              <div className="flex flex-col rounded-[4px] overflow-hidden bg-[#2a211d]">

                {/* Photo */}
                <div className="h-[clamp(280px,50vw,452px)] w-full overflow-hidden rounded-[2px] lg:h-[452px]">
                  {professional.image ? (
                    <img
                      src={withBasePath(professional.image)}
                      alt={professional.name}
                      className="size-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-[linear-gradient(180deg,#1a2d5a_0%,#0f1f3d_100%)]">
                      <span
                        className="font-fraunces text-[clamp(5rem,12vw,8rem)] font-normal leading-none text-[#e8ecf4]/20"
                        style={FRAUNCES}
                      >
                        {professional.name.slice(0, 1)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions + Quote */}
                <div className="flex flex-col gap-10 bg-[#fbfaf8] py-10 pr-10">

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-0">
                    <ActionBtn
                      label="V-CARD"
                      href={detail?.vcard}
                      icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <rect x="3" y="6" width="18" height="13" rx="1.5" stroke="#233465" strokeWidth="1.3" />
                          <circle cx="8.5" cy="11" r="2" stroke="#233465" strokeWidth="1.3" />
                          <path d="M5 16.5c0-1.5 1.5-2.5 3.5-2.5s3.5 1 3.5 2.5" stroke="#233465" strokeWidth="1.3" strokeLinecap="round" />
                          <path d="M14 10h4M14 13h2.5" stroke="#233465" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      }
                    />
                    <ActionBtn
                      label="PERFIL"
                      href={professional.profileUrl}
                      icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle cx="12" cy="8" r="3.5" stroke="#233465" strokeWidth="1.3" />
                          <path d="M5 19c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#233465" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      }
                    />
                    <ActionBtn
                      label="MAIL"
                      href={detail?.email ? `mailto:${detail.email}` : undefined}
                      icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <rect x="3" y="6" width="18" height="13" rx="1.5" stroke="#233465" strokeWidth="1.3" />
                          <path d="M3 8l9 6 9-6" stroke="#233465" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      }
                    />
                    <ActionBtn
                      label="LINKEDIN"
                      href={detail?.linkedin}
                      icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#233465" strokeWidth="1.3" />
                          <path d="M7 10v7M7 7.5v.5" stroke="#233465" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M11 17v-4c0-1.5 1-2 2-2s2 .5 2 2v4M11 10v7" stroke="#233465" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                      }
                    />
                  </div>

                  {/* Quote */}
                  {detail?.quote && (
                    <div className="relative">
                      <div className="relative z-[2] flex flex-col gap-4">
                        <p
                          className="font-poppins text-[clamp(1.1rem,1.5vw,1.5rem)] italic leading-[1.2] text-[#071227]"
                        >
                          {detail.quote.text}
                        </p>
                        <p
                          className="font-fraunces text-[16px] font-normal leading-[1.05] text-[#2a211d]"
                          style={FRAUNCES}
                        >
                          {detail.quote.source}
                        </p>
                      </div>
                      {/* Decorative closing quote */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-2 -right-4 z-[1] select-none font-fraunces text-[120px] font-normal leading-none text-[#233465]/10"
                        style={FRAUNCES}
                      >
                        &rdquo;
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── Right column ────────────────────────── */}
            <div className="flex w-full min-w-0 flex-col gap-10 lg:border-l lg:border-[#233465] lg:pl-10">

              {/* Name + Role + Bio */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-2">
                  <h1
                    className="font-fraunces text-[clamp(2.5rem,4vw,3.5rem)] font-normal leading-[1.05] text-[#465567]"
                    style={FRAUNCES}
                  >
                    {professional.name}
                  </h1>
                  <p className="font-poppins text-[clamp(1rem,1.5vw,1.5rem)] uppercase leading-[1.6] text-[#465567]">
                    {detail?.role ?? professional.role}
                  </p>
                </div>

                {detail?.bio && detail.bio.length > 0 && (
                  <BioParagraphs paragraphs={detail.bio} />
                )}
              </div>

              {/* Distinciones */}
              {detail?.distinctions && detail.distinctions.length > 0 && (
                <div className="flex flex-col gap-8">
                  <SectionTitle>Distinciones</SectionTitle>
                  <div className="flex flex-wrap gap-2">
                    {detail.distinctions.map((d) => (
                      <div
                        key={d}
                        className="rounded-[2px] border border-[#233465] px-3 py-2"
                      >
                        <p className="font-poppins text-[10px] font-medium tracking-[0.2px] text-[#233465] whitespace-nowrap">
                          {d}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Expertise */}
              {detail?.expertise && detail.expertise.length > 0 && (
                <div className="flex flex-col gap-4">
                  <SectionTitle>Expertise</SectionTitle>
                  <div className="flex flex-wrap gap-4">
                    {detail.expertise.map((e) => (
                      <div
                        key={e}
                        className="flex h-14 items-center rounded-[2px] bg-[#f4efed] p-3"
                      >
                        <p
                          className="font-fraunces text-[16px] font-normal leading-[1.2] text-[#2a211d] whitespace-nowrap"
                          style={FRAUNCES}
                        >
                          {e}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Formación */}
              {detail?.education && detail.education.length > 0 && (
                <div className="flex flex-col gap-6">
                  <SectionTitle>Formación</SectionTitle>
                  <div className="flex flex-col">
                    {detail.education.map((edu, i) => (
                      <p
                        key={i}
                        className="mb-3 font-poppins text-[16px] leading-[1.45] text-[#535353] last:mb-0"
                      >
                        {edu}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Idiomas */}
              {detail?.languages && detail.languages.length > 0 && (
                <div className="flex flex-col gap-4">
                  <SectionTitle>Idiomas</SectionTitle>
                  <div className="flex flex-wrap gap-4">
                    {detail.languages.map((lang) => (
                      <div
                        key={lang}
                        className="flex h-14 items-center rounded-[2px] bg-[#f4efed] p-3"
                      >
                        <p
                          className="font-fraunces text-[16px] font-normal leading-[1.2] text-[#2a211d] whitespace-nowrap"
                          style={FRAUNCES}
                        >
                          {lang}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Participaciones y casos destacados */}
              {detail?.highlightedMatters && detail.highlightedMatters.length > 0 && (
                <div className="flex flex-col gap-px">
                  <p
                    className="mb-0 font-fraunces text-[24px] font-normal leading-[1.2] text-[#2a2a2a]"
                    style={FRAUNCES}
                  >
                    Participaciones y casos destacados
                  </p>
                  {detail.highlightedMatters.map((matter, i) => {
                    const isLast = i === detail.highlightedMatters!.length - 1;
                    const inner = (
                      <div className="flex flex-col gap-4">
                        {/* Tag + category */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-poppins text-[11px] font-medium uppercase tracking-[1.98px] text-[#ea3725]">
                            {matter.tag}
                          </span>
                          <span className="font-poppins text-[15px] leading-[21px] text-[#071227]">·</span>
                          <span className="font-poppins text-[11px] tracking-[1.65px] text-[#5a6673]">
                            {matter.category}
                          </span>
                        </div>
                        {/* Title */}
                        <p className="font-poppins text-[18px] font-medium leading-[1.3] tracking-[-0.09px] text-[#071227]">
                          {matter.title}
                        </p>
                        {/* Date + arrow */}
                        <div className="flex items-center justify-between">
                          <span className="font-poppins text-[12px] leading-[1.4] text-[#8b8580]">
                            {matter.date}
                          </span>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M3 11L11 3M11 3H5M11 3v6" stroke="#071227" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    );

                    return (
                      <div
                        key={i}
                        className={`py-4 ${!isLast ? "border-b border-[#071227]" : ""}`}
                      >
                        {matter.href ? (
                          <a href={matter.href} target="_blank" rel="noopener noreferrer">
                            {inner}
                          </a>
                        ) : (
                          inner
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-fraunces text-[24px] font-normal leading-[0.95] text-[#2a2a2a]"
      style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
    >
      {children}
    </p>
  );
}

function ActionBtn({
  label,
  href,
  icon,
}: {
  label: string;
  href?: string;
  icon: React.ReactNode;
}) {
  const inner = (
    <span className="flex h-9 items-center gap-2 rounded-[2px] px-2">
      <span className="font-poppins text-[12px] font-bold tracking-[0.2px] text-[#233465]">
        {label}
      </span>
      {icon}
    </span>
  );

  if (!href) {
    return (
      <span className="opacity-40" aria-hidden="true">
        {inner}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="transition-opacity hover:opacity-70"
    >
      {inner}
    </a>
  );
}
