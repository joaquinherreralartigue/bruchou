"use client";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import type { CSSProperties } from "react";
import { withBasePath } from "@/lib/paths";

const CERT_1      = "/certs/cert-conet.png";
const CERT_2      = "/certs/cert-2.png";
const CERT_IRAM_1 = "/certs/cert-iram-1.png";
const CERT_IRAM_2 = "/certs/cert-iram-2.png";
const ICON_LI     = "/icons/social-linkedin.png";
const ICON_X      = "/icons/social-x.png";
const ICON_IG     = "/icons/social-instagram.png";
const ICON_YT     = "/icons/social-youtube.png";

// ponytail: Fraunces variable font axes — applied inline to avoid a global CSS rule for two lines
const FRAUNCES: CSSProperties = { fontVariationSettings: '"SOFT" 0, "WONK" 1' };

const NAV_COLS = [
  {
    title: "Nosotros",
    links: [
      { label: "Compromiso sustentable",  href: "https://bruchoufunes.com/compromiso-sustentable/" },
      { label: "Premios y Distinciones",  href: "https://bruchoufunes.com/premios-y-distinciones/" },
      { label: "Alianzas internacionales", href: "https://bruchoufunes.com/alianzas-internacionales/" },
    ],
  },
  {
    title: "Conocimiento",
    links: [
      { label: "Sectores estratégicos",    href: "/sectores" },
      { label: "Sectores y capacidades",   href: "/sectores-y-capacidades" },
      { label: "Asuntos representativos",  href: "/#matters-heading" },
      { label: "Novedades",               href: "/#insights-heading" },
    ],
  },
  {
    title: "Equipo",
    links: [
      { label: "Profesionales",           href: "/profesionales" },
      { label: "Referentes",              href: "https://bruchoufunes.com/profesionales#tabs" },
      { label: "Trabajar con nosotros",   href: "/contacto#trabaja" },
      { label: "Contacto",               href: "/contacto" },
    ],
  },
];

const SOCIAL = [
  { label: "LinkedIn",    href: "https://www.linkedin.com/company/bruchou",                    icon: ICON_LI },
  { label: "X (Twitter)", href: "https://twitter.com/BruchouFunes/",                           icon: ICON_X  },
  { label: "Instagram",   href: "https://www.instagram.com/bruchoufunes/",                     icon: ICON_IG },
  { label: "YouTube",     href: "https://www.youtube.com/channel/UCzuU44XFqzGK_u_FkeiPQCg",   icon: ICON_YT },
];

export default function Footer() {
  return (
    <footer role="contentinfo">
      {/* ── Upper block ──────────────────────────────────────────────────────── */}
      <div className="bg-[#071227] px-[var(--space-inline)]">
        {/*
          Container is `relative` so the divider line can be absolute.
          gap-[50px] separates row-1 (logo+certs) from row-2 (nav+newsletter).
          The absolute line sits at ~105px from container top:
            36px (pt-9) + 24px (logo) + 45px into the gap = ~105px
        */}
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-[50px] pb-20 pt-9">

          {/* Row 1: logo + certifications */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" prefetch={false} aria-label="Bruchou & Funes de Rioja — Inicio">
              {/* footer-logo: specific size to avoid touching .brand-logo used in the header */}
              <img
                src={withBasePath("/branding/logo-bfdr-white.svg")}
                alt="Bruchou & Funes de Rioja"
                width={251}
                height={24}
                className="block h-6 w-[251px] object-contain"
              />
            </Link>
            <div className="reveal-stagger flex flex-wrap items-center gap-5">
            <img src={withBasePath(CERT_1)}      alt="Certificación CONET" className="h-11 w-auto"                                  />
            <img src={withBasePath(CERT_2)}      alt="Certificación"       className="h-11 w-auto"                                  />
            <img src={withBasePath(CERT_IRAM_1)} alt="IRAM"               className="h-11 w-auto opacity-70 mix-blend-luminosity"  />
            <img src={withBasePath(CERT_IRAM_2)} alt="ISO"                className="h-11 w-auto opacity-70 mix-blend-luminosity"  />
            </div>
          </div>

          {/* Divider — absolute so it adds zero height to the flex gap */}
          <div className="absolute inset-x-0 top-[105px] hidden border-t border-[#d4dae2]/20 lg:block" />

          {/* Row 2: nav columns + newsletter — aligned to bottom edge */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-6">

            {/* Nav columns */}
            <div className="flex min-w-0 flex-1 flex-wrap gap-6">
              {NAV_COLS.map((col) => (
                <div key={col.title} className="w-[220px] shrink-0">
                  <div className="flex flex-col gap-3">
                    <p
                      className="font-fraunces text-[16px] font-normal leading-[21px] text-white"
                      style={FRAUNCES}
                    >
                      {col.title}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {col.links.map(({ label, href }) => (
                        <li key={label}>
                          {href.startsWith("http") ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-poppins text-[12px] leading-[1.6] text-white transition-opacity hover:opacity-70"
                            >
                              {label}
                            </a>
                          ) : (
                            <Link
                              href={href}
                              prefetch={false}
                              className="font-poppins text-[12px] leading-[1.6] text-white transition-opacity hover:opacity-70"
                            >
                              {label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex w-full flex-col gap-3 lg:w-[284px] lg:shrink-0">
              <p
                className="font-fraunces text-[16px] font-normal leading-[21px] text-white"
                style={FRAUNCES}
              >
                Newsletter
              </p>
              <p className="font-poppins text-[12px] leading-[21px] text-white">
                Suscribite a nuestro Boletín de Noticias y Novedades.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full items-center gap-2 border-b border-[#d4dae2]/50 pl-1 pr-3 py-2"
              >
                <input
                  type="email"
                  placeholder="Ingresá tu email"
                  className="min-w-0 flex-1 bg-transparent font-poppins text-[11px] tracking-[0.22px] text-[#e8ecf4] placeholder:text-[#e8ecf4]/60 outline-none"
                  aria-label="Email para el boletín"
                />
                <button
                  type="submit"
                  aria-label="Suscribirse"
                  className="shrink-0 text-[#e8ecf4] transition-opacity hover:opacity-70"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M12 2L2 7l4 2.5L8.5 12 12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────────── */}
      <div className="bg-[#263241] px-[var(--space-inline)] pb-5 pt-2">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-2">
          <span className="font-poppins text-[13px] leading-[1.5] text-white">
            © Bruchou &amp; Funes de Rioja. Todos los derechos reservados
          </span>
          <div className="reveal-stagger flex flex-wrap items-center gap-1">
            <span className="mr-3 font-poppins text-[13px] leading-[1.5] text-white">Seguinos</span>
            {SOCIAL.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-[22px] items-center px-[8px] transition-opacity hover:opacity-70"
              >
                {/* -scale-y-100: Figma stores these icons with inverted Y axis */}
                <span className="-scale-y-100 block size-[15px]">
                  <img src={withBasePath(icon)} alt="" aria-hidden="true" className="block size-full" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
