"use client";
import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { REPRESENTATIVE_MATTERS } from "@/data/mock";
import { withBasePath } from "@/lib/paths";
import type { RepresentativeMatter } from "@/types";

const AI_ICON = "https://www.figma.com/api/mcp/asset/bff69586-ac6a-466e-8647-e7570eda26d7";

type ActiveMenu = "nosotros" | "sectores" | null;
type PrimaryMenuItem = "sectores" | "areas";

interface HeaderProps {
  variant?: "dark" | "light";
}

const NOSOTROS_LINKS = [
  { label: "Nuestra firma", href: "/nosotros" },
  { label: "Compromiso sustentable", href: "/nosotros/sustentabilidad" },
  { label: "Premios y distinciones", href: "/nosotros/premios" },
  { label: "Alianzas internacionales", href: "/nosotros/alianzas" },
];

const SECTORS = [
  { label: "Trabajo, talento y relaciones laborales", href: "/sectores#trabajo-talento-y-relaciones-laborales" },
  { label: "Energía, recursos naturales e infraestructura", href: "/sectores#energia-recursos-naturales-e-infraestructura" },
  { label: "Capital, inversión y mercados financieros", href: "/sectores#capital-inversion-y-mercados-financieros" },
  { label: "Tecnología, datos e innovación", href: "/sectores#tecnologia-datos-e-innovacion" },
  { label: "Salud, farma y ciencias de la vida", href: "/sectores#salud-farma-y-ciencias-de-la-vida" },
  { label: "Agroindustria, alimentos y cadenas productivas", href: "/sectores#agroindustria-alimentos-y-cadenas-productivas" },
  { label: "Sector público, regulación e instituciones", href: "/sectores#sector-publico-regulacion-e-instituciones" },
];

const PRACTICE_AREA_DIVISIONS = [
  { label: "Corporativo", href: "/sectores-y-capacidades#corporativo" },
  { label: "Finanzas", href: "/sectores-y-capacidades#finanzas" },
  { label: "Regulación", href: "/sectores-y-capacidades#regulacion" },
  { label: "Riesgo Empresario", href: "/sectores-y-capacidades#riesgo-empresario" },
  { label: "Laboral", href: "/sectores-y-capacidades#laboral" },
  { label: "Industrias", href: "/sectores-y-capacidades#industrias" },
  { label: "Tecnología IP", href: "/sectores-y-capacidades#tecnologia-ip" },
  { label: "Sustentabilidad", href: "/sectores-y-capacidades#sustentabilidad" },
];

export default function Header({ variant = "dark" }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [activePrimaryItem, setActivePrimaryItem] = useState<PrimaryMenuItem | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileNosotrosOpen, setMobileNosotrosOpen] = useState(false);
  const [mobileCapabilitiesOpen, setMobileCapabilitiesOpen] = useState(false);
  const [mobileSectoresOpen, setMobileSectoresOpen] = useState(true);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerTheme, setHeaderTheme] = useState<"dark" | "light">(variant);
  const [headerSurface, setHeaderSurface] = useState<"transparent" | "solid">("transparent");

  const effectiveHeaderSurface = isMegaMenuOpen ? "solid" : headerSurface;
  const effectiveHeaderTheme = isMegaMenuOpen ? "light" : headerTheme;
  const showLight = effectiveHeaderTheme === "light";
  const textColor = showLight ? "text-[#071227]" : "text-[#fbfaf8]";
  const headerBorderClass =
    effectiveHeaderSurface === "transparent"
      ? "border-b border-transparent"
      : effectiveHeaderTheme === "dark"
        ? "border-b border-transparent"
        : "border-b border-[#081422]/[0.08]";
  const headerSolidBgClass = showLight ? "bg-[#f4f1ed]" : "bg-[rgba(7,18,39,0.96)]";
  const headerBgClass =
    effectiveHeaderSurface === "transparent"
      ? "bg-transparent border-transparent backdrop-blur-0"
      : `${headerSolidBgClass} backdrop-blur-[8px]`;

  const toggleMenu = (menu: NonNullable<ActiveMenu>) => {
    setActiveMenu((prev) => {
      const next = prev === menu ? null : menu;
      setIsMegaMenuOpen(next !== null);
      if (next !== "sectores") setActivePrimaryItem(null);
      return next;
    });
    if (menu === "sectores") setActivePrimaryItem(null);
  };

  const closeAll = () => {
    setActiveMenu(null);
    setActivePrimaryItem(null);
    setIsMegaMenuOpen(false);
    setMobileOpen(false);
    setMobileNosotrosOpen(false);
    setMobileCapabilitiesOpen(false);
    setMobileSectoresOpen(false);
    setMobileAreasOpen(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const onClickOut = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) closeAll();
    };
    let frame = 0;
    const syncTheme = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const header = headerRef.current;
        const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-header-theme]"));

        if (!header || sections.length === 0) return;

        const headerRect = header.getBoundingClientRect();
        const probeY = headerRect.top + headerRect.height / 2;

        const activeSection = sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= probeY && rect.bottom > probeY;
        });

        if (!activeSection) return;

        const nextTheme = activeSection.dataset.headerTheme === "dark" ? "dark" : "light";
        const nextSurface = activeSection.dataset.headerSurface === "transparent" ? "transparent" : "solid";

        setHeaderTheme((current) => (current === nextTheme ? current : nextTheme));
        setHeaderSurface((current) => (current === nextSurface ? current : nextSurface));
      });
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOut);
    window.addEventListener("scroll", syncTheme, { passive: true });
    window.addEventListener("resize", syncTheme);
    syncTheme();
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOut);
      window.removeEventListener("scroll", syncTheme);
      window.removeEventListener("resize", syncTheme);
    };
  }, []);

  const featuredMatter = REPRESENTATIVE_MATTERS[0];

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 top-0 z-50 w-full transition-[background-color,border-color,color] duration-[220ms] ease-out ${headerBgClass} ${headerBorderClass}`}
      role="banner"
    >
      <a href={withBasePath("#main-content")} className="skip-link">
        Saltar al contenido principal
      </a>

      <nav aria-label="Navegación principal" className="px-[var(--space-inline)]">
        <div className="mx-auto flex h-24 max-w-[1280px] items-center justify-between gap-8">
          <Link
            href="/"
            prefetch={false}
            aria-label="Bruchou & Funes de Rioja — Ir al inicio"
            className="brand-logo shrink-0"
          >
            <img
              src={withBasePath(showLight ? "/branding/logo-bfdr.svg" : "/branding/logo-bfdr-white.svg")}
              alt="Bruchou & Funes de Rioja"
              width={282}
              height={27}
              className="block h-auto w-full object-contain transition-opacity duration-[220ms]"
            />
          </Link>

          <ul className="hidden list-none items-center gap-1 lg:flex" role="list">
            <li>
              <NavTrigger
                label="Nosotros"
                isActive={activeMenu === "nosotros"}
                textColor={textColor}
                ariaControls="mega-nosotros"
                onClick={() => toggleMenu("nosotros")}
                onHover={() => {
                  setActiveMenu("nosotros");
                  setIsMegaMenuOpen(true);
                }}
                onFocus={() => {
                  setActiveMenu("nosotros");
                  setIsMegaMenuOpen(true);
                }}
              />
            </li>
            <li>
              <NavTrigger
                label="Sectores y capacidades"
                isActive={activeMenu === "sectores"}
                textColor={textColor}
                ariaControls="mega-sectores"
                onClick={() => toggleMenu("sectores")}
                onHover={() => {
                  setActiveMenu("sectores");
                  setActivePrimaryItem(null);
                  setIsMegaMenuOpen(true);
                }}
                onFocus={() => {
                  setActiveMenu("sectores");
                  setActivePrimaryItem(null);
                  setIsMegaMenuOpen(true);
                }}
              />
            </li>
            <li>
              <Link
                href="/profesionales"
                prefetch={false}
                onClick={() => setActiveMenu(null)}
                className={`nav-underline px-4 py-2 font-poppins text-[14px] font-semibold leading-[18px] ${textColor} transition-opacity hover:opacity-70`}
              >
                Profesionales
              </Link>
            </li>
            <li>
              <Link
                href="/conocimientos"
                prefetch={false}
                onClick={() => setActiveMenu(null)}
                className={`nav-underline px-4 py-2 font-poppins text-[14px] font-semibold leading-[18px] ${textColor} transition-opacity hover:opacity-70`}
              >
                Conocimientos
              </Link>
            </li>
          </ul>

          <div className="hidden items-center lg:flex shrink-0">
            <Link
              href="/busqueda"
              prefetch={false}
              aria-label="Abrir búsqueda asistida"
              className={`flex min-h-10 items-center gap-2 rounded-[2px] px-3 pr-4 font-poppins text-[13px] font-medium transition-colors duration-[220ms] ${
                showLight
                  ? "border border-[#071227] bg-[#071227] text-white hover:bg-[#0e1f3d]"
                  : "border border-[#fbfaf8] text-[#fbfaf8] hover:bg-white/10"
              }`}
            >
              <img src={AI_ICON} alt="" aria-hidden="true" className="size-4" />
              Búsqueda asistida
            </Link>
          </div>

          <button
            className={`p-2 lg:hidden ${textColor}`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => {
              setMobileOpen((v) => !v);
              setActiveMenu(null);
              if (mobileOpen) closeAll();
            }}
          >
            {mobileOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
          </button>
        </div>
      </nav>

      <MegaNosotros open={activeMenu === "nosotros"} matter={featuredMatter} onClose={() => setActiveMenu(null)} />
      <MegaSectores
        open={activeMenu === "sectores"}
        activePrimaryItem={activePrimaryItem}
        onPrimaryItemChange={setActivePrimaryItem}
        onClose={closeAll}
      />

      <div
        id="mobile-menu"
        className={`absolute left-0 top-full z-40 w-full overflow-hidden bg-[#071227] text-white transition-[opacity,transform,max-height] duration-[260ms] ease-out lg:hidden ${
          mobileOpen ? "pointer-events-auto max-h-[100dvh] opacity-100 translate-y-0" : "pointer-events-none max-h-0 opacity-0 -translate-y-2"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
        aria-hidden={!mobileOpen}
      >
        <nav className={`flex flex-col gap-4 px-5 py-6 transition-opacity duration-[220ms] ${mobileOpen ? "opacity-100" : "opacity-0"}`} aria-label="Menú móvil">
          <MobileSection title="Nosotros" open={mobileNosotrosOpen} onToggle={() => setMobileNosotrosOpen((v) => !v)}>
            {NOSOTROS_LINKS.map((l) => (
              <MobileLink key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
                {l.label}
              </MobileLink>
            ))}
          </MobileSection>

          <MobileAccordion title="Sectores y capacidades" open={mobileCapabilitiesOpen} onToggle={() => setMobileCapabilitiesOpen((v) => !v)}>
            <MobileSection
              title="Sectores"
              open={mobileSectoresOpen}
              onToggle={() => {
                setMobileSectoresOpen((v) => !v);
                setMobileAreasOpen(false);
              }}
            >
              {SECTORS.map((l) => (
                <MobileLink key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
                  {l.label}
                </MobileLink>
              ))}
            </MobileSection>

            <MobileSection
              title="Capacidades"
              open={mobileAreasOpen}
              onToggle={() => {
                setMobileAreasOpen((v) => !v);
                setMobileSectoresOpen(false);
              }}
            >
              {PRACTICE_AREA_DIVISIONS.map((l) => (
                <MobileLink key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
                  {l.label}
                </MobileLink>
              ))}
            </MobileSection>
          </MobileAccordion>

          <Link
            href="/profesionales"
            prefetch={false}
            className="border-t border-white/10 pt-4 py-2 font-poppins text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Profesionales
          </Link>

          <Link
            href="/conocimientos"
            prefetch={false}
            className="py-2 font-poppins text-sm font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Conocimientos
          </Link>

          <div className="border-t border-white/20 pt-4">
            <Link
              href="/busqueda"
              prefetch={false}
              className="flex items-center gap-2 rounded-sm border border-white px-4 py-3 font-poppins text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              <img src={AI_ICON} alt="" aria-hidden="true" className="size-4" />
              Búsqueda asistida
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function NavTrigger({
  label,
  isActive,
  textColor,
  ariaControls,
  onClick,
  onHover,
  onFocus,
}: {
  label: string;
  isActive: boolean;
  textColor: string;
  ariaControls: string;
  onClick: () => void;
  onHover: () => void;
  onFocus: () => void;
}) {
  return (
    <button
      type="button"
      aria-expanded={isActive}
      aria-controls={ariaControls}
      onClick={onClick}
      onMouseEnter={onHover}
      onFocus={onFocus}
      className={`relative flex items-center gap-1.5 px-4 py-2 font-poppins text-[14px] font-semibold leading-[18px] ${textColor} transition-opacity hover:opacity-70`}
    >
      {label}
      <span className="inline-flex size-[10px] shrink-0 items-center justify-center">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={`transition-transform duration-[200ms] ease-out ${isActive ? "rotate-180" : ""}`}>
          <path d="M1.5 3.5l3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0.5 left-4 right-1.5 h-px origin-left bg-current transition-[transform,opacity] duration-[180ms] ease-out ${
          isActive ? "scale-x-100 opacity-70" : "scale-x-0 opacity-0"
        }`}
      />
    </button>
  );
}

function MegaNosotros({
  open,
  matter,
  onClose,
}: {
  open: boolean;
  matter: RepresentativeMatter;
  onClose: () => void;
}) {
  return (
    <div
      id="mega-nosotros"
      role="region"
      aria-label="Menú Nosotros"
      aria-hidden={!open}
      className={`absolute left-0 top-full z-30 hidden w-full bg-[#f7f5f2] px-[var(--space-inline)] transition-[opacity,transform] duration-[220ms] ease-out lg:block ${
        open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-3"
      }`}
    >
      <div className="mx-auto grid min-h-[460px] max-w-[1280px] grid-cols-[300px_1fr_360px] gap-14 py-16 content-start">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-fraunces text-[40px] font-normal leading-[1.05] tracking-tight text-[#071227]">Nosotros</h2>
            <p className="mt-4 font-poppins text-[13px] leading-[1.7] text-[#3d4f6b]">
              Bruchou es una firma que brinda servicios legales altamente especializados para acompañar negocios complejos y decisiones críticas en Argentina.
            </p>
          </div>
          <SearchModule onClose={onClose} />
        </div>

        <div className="pt-1">
          <ul className="flex flex-col divide-y divide-[#d4dae2]">
            {NOSOTROS_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch={false}
                  onClick={onClose}
                  className="group flex items-center justify-between py-5 font-poppins text-[15px] font-medium text-[#071227] transition-opacity hover:opacity-60"
                >
                  {item.label}
                  <ChevronRightIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/asuntos/${matter.slug}`}
          prefetch={false}
          onClick={onClose}
          className="group block self-start bg-[#f4efed] px-5 py-5 transition-transform duration-[300ms] ease-out hover:-translate-y-[2px]"
        >
          <div className="border-b border-[#b4a39c]">
            <div className="flex items-center justify-between gap-4 px-1 py-1 text-[11px] leading-[14px] text-[#5b4d47] transition-transform duration-[220ms] group-hover:-translate-y-[1px]">
              <span className="font-poppins">Ficha del asunto</span>
              <span className="font-fraunces font-normal" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                № 01
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-5">
            <h3 className="font-fraunces text-[28px] font-normal leading-[1.2] text-[#2a2a2a] transition-transform duration-[220ms] group-hover:-translate-y-[1px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
              {matter.title}
            </h3>
            <p className="line-clamp-3 font-poppins text-[12px] leading-[1.7] text-[#3d3d3d]">{matter.body}</p>
            <div className="grid gap-2">
              {(matter.metrics ?? []).slice(0, 2).map(({ label, value }) => (
                <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-2 transition-transform duration-[220ms] group-hover:-translate-y-[1px]">
                  <span className="font-poppins text-[11px] text-[#b4a39c]">{label}</span>
                  <span className="font-poppins text-[12px] leading-[1.3] text-[#171717]">{value}</span>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 font-poppins text-[13px] font-bold text-[#2e426b]">
              Leer la historia completa
              <ArrowNEIcon />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

function MegaSectores({
  open,
  activePrimaryItem,
  onPrimaryItemChange,
  onClose,
}: {
  open: boolean;
  activePrimaryItem: PrimaryMenuItem | null;
  onPrimaryItemChange: Dispatch<SetStateAction<PrimaryMenuItem | null>>;
  onClose: () => void;
}) {
  const activeItems = activePrimaryItem === "sectores" ? SECTORS : activePrimaryItem === "areas" ? PRACTICE_AREA_DIVISIONS : null;
  const setPrimaryItem = (item: PrimaryMenuItem) => onPrimaryItemChange((prev) => (prev === item ? null : item));
  const menuRowClass =
    "group grid w-full h-[64px] min-w-0 box-border grid-cols-[minmax(0,1fr)_24px] items-center justify-items-stretch justify-content-stretch gap-4 border-t border-[#d4dae2] px-0 py-4 text-left font-poppins text-[15px] font-medium leading-[1.35] text-[#071227] transition-opacity hover:opacity-60";
  const menuRowLabelClass = "min-w-0 justify-self-start text-left";
  const menuRowIconClass = "justify-self-end";

  return (
    <div
      id="mega-sectores"
      role="region"
      aria-label="Menú Sectores y capacidades"
      aria-hidden={!open}
      onMouseLeave={() => {
        if (open) onClose();
      }}
      className={`absolute left-0 top-full z-30 hidden w-full bg-[#f7f5f2] px-[var(--space-inline)] transition-[opacity,transform] duration-[220ms] ease-out lg:block ${
        open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-3"
      }`}
    >
      <div className={`mx-auto grid h-[620px] max-w-[1280px] gap-16 py-16 content-start ${activeItems ? "grid-cols-[300px_405px_405px]" : "grid-cols-[300px_405px]"}`}>
        <div className="flex w-[300px] shrink-0 flex-col gap-8">
          <div>
            <h2 className="font-fraunces text-[40px] font-normal leading-[1.05] tracking-tight text-[#071227]">
              Sectores y
              <br />
              capacidades
            </h2>
            <p className="mt-4 font-poppins text-[13px] leading-[1.7] text-[#3d4f6b]">
              Asesoramiento legal especializado para acompañar decisiones estratégicas, operaciones complejas y desafíos regulatorios en Argentina.
            </p>
            <Link
              href="/sectores"
              prefetch={false}
              onClick={onClose}
              className="mt-3 inline-flex items-center gap-1.5 font-poppins text-[12px] font-medium text-[#233465] transition-opacity hover:opacity-70"
            >
              Ver todos los sectores y capacidades
              <ArrowRightIcon />
            </Link>
          </div>
          <SearchModule onClose={onClose} />
        </div>

        <div className="min-w-0 pt-1">
          <div className="grid gap-4">
            <ul className="flex flex-col">
              {(["sectores", "areas"] as PrimaryMenuItem[]).map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onMouseEnter={() => onPrimaryItemChange(item as PrimaryMenuItem)}
                    onFocus={() => onPrimaryItemChange(item as PrimaryMenuItem)}
                    onClick={() => setPrimaryItem(item)}
                    className={menuRowClass}
                    aria-expanded={activePrimaryItem === item}
                  >
                    <span
                      className={`min-w-0 justify-self-start overflow-hidden text-ellipsis whitespace-nowrap text-left ${
                        activePrimaryItem === item ? "underline decoration-current decoration-1 underline-offset-[8px]" : ""
                      }`}
                    >
                      {item === "sectores" ? "Sectores" : "Capacidades"}
                    </span>
                    <ChevronRightIcon className={menuRowIconClass} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {activeItems && (
          <div className="min-w-0 pt-1">
            <ul className="flex flex-col">
              {activeItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    prefetch={false}
                    onClick={onClose}
                    className={menuRowClass}
                  >
                    <span className={menuRowLabelClass}>{item.label}</span>
                    <ChevronRightIcon className={menuRowIconClass} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function SearchModule({ onClose }: { onClose: () => void }) {
  return (
    <Link href="/busqueda" prefetch={false} onClick={onClose} className="group flex w-full flex-col gap-3 rounded-[3px] bg-[#071227] p-5 text-white no-underline">
      <span className="font-poppins text-[13px] font-semibold">Búsqueda asistida</span>
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 font-poppins text-[12px] text-white/60">
          <img src={AI_ICON} alt="" aria-hidden="true" className="size-3.5 shrink-0" />
          Contanos qué estás buscando…
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className="shrink-0 text-white/50 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}

function ChevronRightIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex size-6 shrink-0 items-center justify-center ${className}`}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="text-[#3d4f6b] transition-transform duration-150 group-hover:translate-x-0.5">
        <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1.5 6h9M7 2.5l3.5 3.5L7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowNEIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-[200ms] ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
      <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileAccordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div>
      <button className="flex w-full items-center justify-between py-2 font-poppins text-sm font-semibold text-white" aria-expanded={open} onClick={onToggle}>
        {title}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-[220ms] ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="mt-2 flex flex-col gap-1 pl-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

function MobileSection({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div>
      <button className="flex w-full items-center justify-between py-2 font-poppins text-sm font-semibold text-white" aria-expanded={open} onClick={onToggle}>
        {title}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-[220ms] ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="mt-2 flex flex-col gap-1 pl-3">{children}</div>
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <Link href={href} prefetch={false} className="block py-1 font-poppins text-sm text-white/80 transition-colors hover:text-white" onClick={onClick}>
      {children}
    </Link>
  );
}

function MenuIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function XIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
