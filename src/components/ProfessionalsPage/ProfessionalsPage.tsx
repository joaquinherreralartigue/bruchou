"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ProfessionalEntry } from "@/data/professionals";
import { withBasePath } from "@/lib/paths";

type ViewKey = "profesionales" | "lideres" | "consejo" | "directorio";

const VIEWS: Array<{ key: ViewKey; label: string }> = [
  { key: "profesionales", label: "Profesionales" },
  { key: "lideres", label: "Referentes" },
  { key: "consejo", label: "Consejo de administración" },
  { key: "directorio", label: "Directorio" },
];

const VIEW_META: Record<ViewKey, { title: string; subtitle: string }> = {
  profesionales: { title: "Profesionales", subtitle: "El equipo del estudio." },
  lideres: { title: "Referentes", subtitle: "Responsables de cada capacidad del estudio." },
  consejo: { title: "Consejo de administración", subtitle: "Órgano de gobierno del estudio." },
  directorio: { title: "Directorio", subtitle: "" },
};

const SEARCH_ICON = "https://www.figma.com/api/mcp/asset/bff69586-ac6a-466e-8647-e7570eda26d7";

function normalizeView(value: string | null): ViewKey {
  return value && VIEWS.some((view) => view.key === value) ? (value as ViewKey) : "profesionales";
}

function viewList(view: ViewKey, all: ProfessionalEntry[]) {
  if (view === "lideres") return all.filter((p) => p.isPracticeLeader);
  if (view === "consejo") return all.filter((p) => p.isBoardMember);
  if (view === "directorio") return all.filter((p) => p.isDirectoryMember);
  return all;
}

function searchList(list: ProfessionalEntry[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter((p) => [p.name, p.role, p.bio_short ?? ""].join(" ").toLowerCase().includes(q));
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function buildProfileHref(professional: ProfessionalEntry) {
  return professional.profileUrl ?? `/profesionales/${professional.slug}`;
}

function CompactCard({ professional, index }: { professional: ProfessionalEntry; index: number }) {
  return (
    <Link
      href={buildProfileHref(professional)}
      className="group flex items-center gap-4 rounded-[2px] border border-[#d4dae2] bg-white px-4 py-3 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[#b7c1d1] hover:shadow-sm focus-visible:-translate-y-[2px] focus-visible:border-[#233465] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#233465]/20"
      style={{ animationDelay: `${Math.min(index * 35, 280)}ms` }}
      aria-label={`Ver perfil de ${professional.name}`}
    >
      <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-[#e8ecf4]">
        {professional.image ? (
          <img
            src={withBasePath(professional.image)}
            alt=""
            className="size-full object-cover object-top grayscale transition-[transform,filter] duration-300 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-focus-visible:scale-[1.03] group-focus-visible:grayscale-0"
          />
        ) : (
          <span className="flex size-full items-center justify-center font-poppins text-sm font-medium text-[#233465]" aria-hidden="true">
            {initials(professional.name)}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-fraunces text-base font-normal leading-tight text-[#1a1a2e]">
          {professional.name}
        </p>
        <p className="mt-0.5 truncate font-poppins text-xs text-[#6b7280]">{professional.role}</p>
      </div>
      <span className="shrink-0 font-poppins text-xs font-medium text-[#233465] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        Ver perfil ↗
      </span>
    </Link>
  );
}

function LargeCard({ professional, index }: { professional: ProfessionalEntry; index: number }) {
  return (
    <Link
      href={buildProfileHref(professional)}
      className="group flex h-full flex-col overflow-hidden rounded-[2px] border border-[#d4dae2] bg-white transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[#b7c1d1] hover:shadow-md focus-visible:-translate-y-[2px] focus-visible:border-[#233465] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#233465]/20"
      style={{ animationDelay: `${Math.min(index * 45, 280)}ms` }}
      aria-label={`Ver perfil de ${professional.name}`}
    >
      <div className="aspect-[3/4] w-full overflow-hidden bg-[#e8ecf4]">
        {professional.image ? (
          <img
            src={withBasePath(professional.image)}
            alt=""
            className="size-full object-cover object-top grayscale transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-focus-visible:scale-[1.03] group-focus-visible:grayscale-0"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="font-fraunces text-5xl font-normal text-[#233465]/20" aria-hidden="true">
              {initials(professional.name)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="font-fraunces text-lg font-normal leading-tight text-[#1a1a2e] transition-colors duration-200 group-hover:text-[#233465]">
          {professional.name}
        </p>
        <p className="font-poppins text-xs text-[#6b7280]">{professional.role}</p>
      </div>
    </Link>
  );
}

export default function ProfessionalsPage({ professionals }: { professionals: ProfessionalEntry[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeView, setActiveView] = useState<ViewKey>("profesionales");
  const [searchQuery, setSearchQuery] = useState("");
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setActiveView(normalizeView(searchParams?.get("vista") ?? null));
  }, [searchParams]);

  useEffect(() => {
    if (!transitioning) return;
    const timer = window.setTimeout(() => setTransitioning(false), 240);
    return () => window.clearTimeout(timer);
  }, [transitioning, activeView, searchQuery]);

  const handleViewChange = (next: ViewKey) => {
    if (next === activeView) return;
    setTransitioning(true);
    setActiveView(next);
    setSearchQuery("");
    const url = new URL(window.location.href);
    url.searchParams.set("vista", next);
    router.replace(`${pathname}?${url.searchParams.toString()}`, { scroll: false });
  };

  const filtered = useMemo(
    () => searchList(viewList(activeView, professionals), searchQuery),
    [activeView, searchQuery, professionals],
  );

  const meta = VIEW_META[activeView];
  const useLargeCards = activeView === "consejo" || activeView === "directorio";
  const columnsClass =
    filtered.length >= 4 ? "lg:grid-cols-4" : filtered.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      <section className="px-[var(--space-inline)] pb-10 pt-[calc(76px+3rem)]" aria-label="Profesionales">
        <div className="mx-auto max-w-[1280px]">
          <p className="animate-hero-eyebrow kicker mb-4 text-[#233465]">Equipo</p>
          <h1
            className="animate-hero-title font-fraunces text-[40px] font-normal leading-[1.04] text-[#071227]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Profesionales
          </h1>

          <div className="animate-hero-bajada mt-8 max-w-[36rem]">
            <label htmlFor="prof-search" className="sr-only">
              Buscar profesionales
            </label>
            <div className="flex items-center gap-2 border-b border-[#d4dae2] px-1 py-2">
              <img src={SEARCH_ICON} alt="" aria-hidden="true" className="size-4 shrink-0" />
              <input
                id="prof-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Contanos qué estás buscando."
                className="min-w-0 flex-1 bg-transparent font-poppins text-[clamp(0.75rem,0.72rem+0.1vw,0.8125rem)] tracking-[0.22px] text-[#1a1a2e] outline-none placeholder:text-[#1a1a2e]/50"
              />
              <button
                type="button"
                className="shrink-0 text-[#1a1a2e]/60 transition-colors hover:text-[#071227]"
                aria-label="Buscar"
              >
                <SendIcon />
              </button>
            </div>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar profesionales por categoría"
            className="animate-hero-bajada mt-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ animationDelay: "80ms" }}
          >
            {VIEWS.map((view) => (
              <button
                key={view.key}
                role="tab"
                type="button"
                aria-selected={activeView === view.key}
                onClick={() => handleViewChange(view.key)}
                className={[
                  "chip shrink-0 cursor-pointer font-poppins transition-[background-color,border-color,color] duration-200",
                  activeView === view.key
                    ? "border-[#233465] bg-[#233465] text-white"
                    : "chip-light hover:border-[#233465] hover:text-[#233465]",
                ].join(" ")}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label={meta.title}
        className="px-[var(--space-inline)] pb-[var(--space-section)]"
        style={{
          opacity: transitioning ? 0 : 1,
          transform: transitioning ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 260ms cubic-bezier(0.22,1,0.36,1), transform 260ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-[#d4dae2] pb-5">
            <h2 className="font-fraunces text-[40px] font-normal text-[#1a1a2e]">{meta.title}</h2>
            <span className="font-poppins text-sm text-[#6b7280]">
              {filtered.length} {filtered.length === 1 ? "profesional" : "profesionales"}
            </span>
            {meta.subtitle && <p className="w-full font-poppins text-sm text-[#6b7280]">{meta.subtitle}</p>}
          </div>

          {filtered.length === 0 && (
            <p className="font-poppins text-sm text-[#6b7280]">
              {activeView === "consejo" || activeView === "directorio"
                ? "TODO: falta cargar data verificable para esta vista."
                : searchQuery
                  ? `Sin resultados para "${searchQuery}".`
                  : "Sin profesionales en esta categoría por el momento."}
            </p>
          )}

          {!useLargeCards && filtered.length > 0 && (
            <div key={activeView} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((professional, index) => (
                <div key={professional.id} className="animate-panel-in" style={{ animationDelay: `${Math.min(index * 35, 280)}ms` }}>
                  <CompactCard professional={professional} index={index} />
                </div>
              ))}
            </div>
          )}

          {useLargeCards && filtered.length > 0 && (
            <div key={activeView} className={`grid gap-5 sm:grid-cols-2 ${columnsClass}`}>
              {filtered.map((professional, index) => (
                <div key={professional.id} className="animate-panel-in" style={{ animationDelay: `${Math.min(index * 45, 280)}ms` }}>
                  <LargeCard professional={professional} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M12 2L2 7l4 2.5L8.5 12 12 2z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
