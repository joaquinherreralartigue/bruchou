"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PRACTICES, PRACTICE_GROUPS, type Practice } from "@/data/practices";
import { withBasePath } from "@/lib/paths";

type ViewKey = "sectores" | "capacidades";

const sectorItems = [
  {
    id: "trabajo-talento-relaciones-laborales",
    number: "01",
    title: "Trabajo, talento y relaciones laborales",
    panelText: "Acompañamos a empresas, cámaras empresarias, grupos económicos e inversores en decisiones laborales que impactan sobre la organización, la continuidad operativa, la reputación y la estrategia del negocio.",
    capabilities: ["Relaciones laborales", "Negociación colectiva", "Reestructuraciones", "Litigios laborales", "Movilidad internacional", "Cumplimiento laboral", "Expatriados"],
  },
  {
    id: "energia-recursos-naturales-infraestructura",
    number: "02",
    title: "Energía, recursos naturales e infraestructura",
    panelText: "Acompañamos proyectos intensivos en capital, infraestructura crítica y recursos estratégicos, integrando regulación, financiamiento, contratos, permisos, operación y relacionamiento institucional.",
    capabilities: ["Energía", "Petróleo y gas", "Minería y litio", "Infraestructura", "Proyectos", "Ambiente"],
  },
  {
    id: "capital-inversion-mercados-financieros",
    number: "03",
    title: "Capital, inversión y mercados financieros",
    panelText: "Asesoramos a compañías, entidades financieras, fondos e inversores locales e internacionales en operaciones de financiamiento, inversión, adquisición de activos y acceso a mercados.",
    capabilities: ["Servicios financieros", "Mercado de capitales", "Inversión extranjera", "Fondos", "Financiamiento", "Operaciones internacionales"],
  },
  {
    id: "tecnologia-datos-innovacion",
    number: "04",
    title: "Tecnología, datos e innovación",
    panelText: "Acompañamos modelos de negocio digitales y proyectos de innovación donde tecnología, datos, regulación, propiedad intelectual e inversión avanzan de manera integrada.",
    capabilities: ["Tecnología", "Datos", "Inteligencia artificial", "Fintech", "Telecomunicaciones", "Propiedad intelectual", "Startups"],
  },
  {
    id: "salud-farma-ciencias-vida",
    number: "05",
    title: "Salud, farma y ciencias de la vida",
    panelText: "Asesoramos a compañías farmacéuticas, biotecnológicas, de tecnología médica y salud en entornos regulados, sensibles e intensivos en innovación.",
    capabilities: ["Farma", "Biotecnología", "Salud", "Tecnología médica", "Regulación sanitaria", "Datos sensibles"],
  },
  {
    id: "agroindustria-alimentos-cadenas-productivas",
    number: "06",
    title: "Agroindustria, alimentos y cadenas productivas",
    panelText: "Acompañamos a compañías agroindustriales, alimenticias, exportadores e inversores en operaciones, financiamiento, regulación, comercio exterior y desarrollo de cadenas de valor.",
    capabilities: ["Agroindustria", "Alimentos", "Comercio exterior", "Producción", "Distribución", "Financiamiento"],
  },
  {
    id: "sector-publico-regulacion-instituciones",
    number: "07",
    title: "Sector público, regulación e instituciones",
    panelText: "Trabajamos junto a actores públicos y privados en asuntos donde regulación, financiamiento, contratación pública e institucionalidad definen decisiones críticas.",
    capabilities: ["Regulación", "Contratación pública", "Concesiones", "Servicios públicos", "Financiamiento público", "Relación con autoridades"],
  },
] as const;

export default function SectoresCapacidadesPageClient() {
  const [heroStage, setHeroStage] = useState<1 | 2 | 3>(1);
  const [view, setView] = useState<ViewKey>("sectores");
  const [sectorIndex, setSectorIndex] = useState(1);
  const [pinnedPracticeId, setPinnedPracticeId] = useState<string | null>(PRACTICES[0]?.id ?? null);
  const [hoveredPracticeId, setHoveredPracticeId] = useState<string | null>(null);
  const directoryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setHeroStage(mq.matches ? 3 : 1);
    sync();
    mq.addEventListener("change", sync);
    if (mq.matches) return () => mq.removeEventListener("change", sync);
    const timer1 = window.setTimeout(() => setHeroStage(2), 2000);
    const timer2 = window.setTimeout(() => setHeroStage(3), 4000);
    return () => {
      window.clearTimeout(timer1);
      window.clearTimeout(timer2);
      mq.removeEventListener("change", sync);
    };
  }, []);

  const activeSector = sectorItems[sectorIndex] ?? sectorItems[0];
  const activePracticeId = hoveredPracticeId ?? pinnedPracticeId;
  const practicesById = useMemo(() => Object.fromEntries(PRACTICES.map((practice) => [practice.id, practice])), []);
  const activePractice = activePracticeId ? practicesById[activePracticeId] : null;
  const practicesByGroup = useMemo(() => {
    return PRACTICE_GROUPS.map((group) => ({
      ...group,
      items: group.practiceIds
        .map((practiceId) => practicesById[practiceId])
        .filter((practice): practice is Practice => Boolean(practice)),
    })).filter((group) => group.items.length > 0);
  }, [practicesById]);

  const activateView = (next: ViewKey) => {
    setView(next);
    directoryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="sectores-hero relative h-[336px] min-h-[336px] max-h-[336px] overflow-hidden bg-[#0b0f17] pt-12">
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url('${withBasePath("/images/hero_sectores.png")}')`, backgroundPosition: "center 20%" }} aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,11,20,0.24) 0%, rgba(6,11,20,0.64) 54%, rgba(6,11,20,0.82) 100%)" }} aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col justify-center px-[var(--space-inline)] pt-[48px]">
          <div className="mx-auto w-full max-w-[1280px] grid gap-5 px-4">
            <p className="font-poppins text-[13px] font-medium tracking-[0.24px] text-[#efe7dc]">Sectores y capacidades</p>
            <h1 className="max-w-[12ch] font-fraunces text-[clamp(2.4rem,1.8rem+2.2vw,3.5rem)] font-normal leading-none tracking-[-0.02em] text-[#fbfaf8]">
              La profundidad técnica de una firma integrada.
            </h1>
            <div className="max-w-[52rem]">
              <p className="max-w-[48rem] font-poppins text-[16px] leading-[1.7] text-[#efe7dc]">
                Combinamos lectura sectorial, profundidad técnica y equipos multidisciplinarios para acompañar decisiones complejas en industrias, operaciones y escenarios críticos.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button type="button" onClick={() => activateView("sectores")} className={`inline-flex h-[36px] items-center rounded-[4px] border px-4 font-poppins text-[13px] font-medium transition-colors ${view === "sectores" ? "border-white/70 text-[#fbfaf8]" : "border-white/28 text-[#fbfaf8]/80 hover:text-[#fbfaf8]"}`}>Sectores</button>
                <button type="button" onClick={() => activateView("capacidades")} className={`inline-flex h-[36px] items-center rounded-[4px] border px-4 font-poppins text-[13px] font-medium transition-colors ${view === "capacidades" ? "border-white/70 text-[#fbfaf8]" : "border-white/28 text-[#fbfaf8]/80 hover:text-[#fbfaf8]"}`}>Capacidades</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {heroStage === 3 ? (
        <section ref={directoryRef} className="sectores-capacidades-directory bg-[#f7f5f2] px-[var(--space-inline)] py-16 text-[#16222f] md:px-10 lg:px-20 lg:py-20">
          <div className="mx-auto max-w-[1280px]">
            {view === "sectores" ? (
              <div className="flex w-full flex-col gap-10 pt-4 lg:flex-row lg:items-start lg:gap-0">
                <div className="min-w-0 lg:w-[440px] lg:flex-none" aria-label="Sectores y capacidades">
                  {sectorItems.map((item, index) => (
                    <div key={item.id} className={index < sectorItems.length - 1 ? "border-b border-[#e8ddd4]" : ""}>
                      <button
                        type="button"
                        onClick={() => setSectorIndex(index)}
                        onMouseEnter={() => setSectorIndex(index)}
                        className={[
                          "flex min-h-[46px] w-full items-center gap-4 rounded-none px-0 py-3 text-left transition-colors",
                          index === sectorIndex ? "bg-[#f1ece9] px-4 text-[#332b29]" : "text-[#d8c8c4] hover:bg-[#f1ece9] hover:px-4 hover:text-[#332b29]",
                        ].join(" ")}
                        aria-pressed={index === sectorIndex}
                      >
                        <span className="shrink-0 w-7 font-poppins text-[12px] font-medium leading-none">{item.number}</span>
                        <span
                          className={[
                            "min-w-0 flex-1 whitespace-normal break-words",
                            index === sectorIndex ? "font-poppins text-[16px] font-semibold leading-none" : "font-poppins text-[16px] font-medium leading-none",
                          ].join(" ")}
                        >
                          {item.title}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="hidden lg:block bg-[#e8ddd4]" aria-hidden="true" />

                <div className="hidden lg:block bg-[#e8ddd4]" aria-hidden="true" />

                <div className="min-w-0 pt-0 lg:flex-1 lg:pl-12">
                  <div className="flex min-w-0 max-w-[820px] flex-col gap-6">
                    <h3 className="max-w-[20ch] font-fraunces text-[30px] font-normal leading-[1.08] tracking-[-0.02em] text-[#172334]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                      {activeSector.title}
                    </h3>

                    <div className="flex flex-col gap-4">
                      <p className="font-poppins text-[16px] leading-[1.8] text-[#4e5862]">{activeSector.panelText}</p>
                    </div>

                    <div className="flex flex-col gap-3 pt-1">
                      <p className="font-poppins text-[12px] font-medium uppercase tracking-[0.16em] text-[#8d8379]">Capacidades vinculadas</p>
                      <div className="flex flex-wrap gap-2.5">
                        {activeSector.capabilities.map((capability) => (
                          <span key={capability} className="inline-flex h-[28px] items-center border border-[#d9cbc0] bg-white px-3 font-poppins text-[12px] leading-none text-[#463f39]">
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a href={`/sectores-y-capacidades#${activeSector.id}`} className="inline-flex items-center gap-2 self-start font-poppins text-[13px] font-medium leading-none text-[#071227] transition-opacity hover:opacity-70">
                      Ampliar <span aria-hidden="true" className="text-[16px] leading-[16px]">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:gap-0">
                <div className="min-w-0 lg:w-[660px] lg:flex-none" aria-label="Capacidades">
                  <div className="grid gap-10">
                    {practicesByGroup.map((group) => (
                      <section key={group.id} className="grid grid-cols-1 gap-4 md:grid-cols-[168px_minmax(0,1fr)] md:gap-6">
                        <h3 className="font-poppins text-[16px] font-bold uppercase tracking-[0.64px] text-[#233465]">{group.label}</h3>
                        <div className="min-w-0">
                          {group.items.map((practice, index) => {
                            const isActive = activePracticeId === practice.id;
                            const isPinned = pinnedPracticeId === practice.id;
                            const borderClass = index === group.items.length - 1 ? "" : "border-b border-[rgba(35,52,101,0.12)]";
                            return (
                              <button
                                key={practice.id}
                                type="button"
                                onMouseEnter={() => setHoveredPracticeId(practice.id)}
                                onMouseLeave={() => setHoveredPracticeId(null)}
                                onFocus={() => setHoveredPracticeId(practice.id)}
                                onBlur={() => setHoveredPracticeId(null)}
                                onClick={() => setPinnedPracticeId((current) => (current === practice.id ? null : practice.id))}
                                aria-current={isPinned ? "true" : undefined}
                                className={`group relative flex min-h-[48px] w-full items-center justify-between gap-4 px-0 py-3 text-left transition-colors duration-150 ${borderClass}`}
                              >
                                <span
                                  className={`min-w-0 flex-1 font-fraunces text-[20px] leading-[1.2] transition-colors ${isActive ? "text-[#233465]" : "text-[#74635c] group-hover:text-[#233465] group-focus-visible:text-[#233465]"}`}
                                  style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
                                >
                                  {practice.title}
                                </span>
                                <span className={`flex h-4 w-4 shrink-0 items-center justify-center transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"}`} aria-hidden="true">
                                  <svg viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-[#233465] stroke-[1.6]" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 8h9" />
                                    <path d="M8 3l5 5-5 5" />
                                  </svg>
                                </span>
                                <span
                                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#233465] transition-transform duration-150 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"}`}
                                  aria-hidden="true"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block lg:min-h-[1px] lg:w-px lg:bg-[rgba(35,52,101,0.18)]" aria-hidden="true" />

                <div className="min-w-0 lg:flex-1 lg:pl-10">
                  <aside className="lg:sticky lg:top-[104px]">
                    <div className="min-w-0 bg-[#f7f5f2] px-0 py-0 lg:px-0">
                      <div className="flex min-h-0 flex-col gap-5 border-t border-[rgba(35,52,101,0.12)] pt-6 lg:border-t-0 lg:border-l lg:border-[rgba(35,52,101,0.18)] lg:pl-10 lg:pt-0">
                        <div className="grid gap-5 px-0 py-0 lg:px-0 lg:py-0" aria-live="polite">
                          {activePractice ? (
                            <>
                              <p className="max-w-[36ch] font-poppins text-[16px] leading-[1.4] text-[#535353]">{activePractice.summary}</p>

                              <div className="grid gap-3">
                                <p className="font-poppins text-[14px] font-bold text-[#233465]">Socios de contacto</p>
                                {activePractice.professionals.length > 0 ? (
                                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                    {activePractice.professionals.map((professional) => {
                                      const initials = professional.name
                                        .split(" ")
                                        .filter(Boolean)
                                        .slice(0, 2)
                                        .map((part) => part[0])
                                        .join("")
                                        .toUpperCase();
                                      return (
                                        <li key={professional.id} className="flex items-center gap-3">
                                          <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[4px] bg-[#d7d7d7] font-poppins text-[12px] font-bold text-[#233465]" aria-hidden="true">
                                            {initials}
                                          </div>
                                          <div className="min-w-0">
                                            {professional.href ? (
                                              <a href={professional.href} className="block truncate font-fraunces text-[14px] leading-[1.2] text-[#233465] transition-opacity hover:opacity-75">
                                                {professional.name}
                                              </a>
                                            ) : (
                                              <span className="block truncate font-fraunces text-[14px] leading-[1.2] text-[#233465]">{professional.name}</span>
                                            )}
                                            <p className="font-poppins text-[12px] leading-[1.35] text-[#535353]">{professional.role ?? "Profesional"}</p>
                                          </div>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                ) : (
                                  <p className="font-poppins text-[14px] leading-[1.4] text-[#535353]">Sin socios asociados en esta entrada.</p>
                                )}
                              </div>

                              <div className="grid gap-3">
                                <p className="font-poppins text-[14px] font-bold text-[#233465]">Prácticas relacionadas</p>
                                {activePractice.relatedAreas.length > 0 ? (
                                  <ul className="flex flex-wrap gap-2">
                                    {activePractice.relatedAreas.map((area) => (
                                      <li key={area.id}>
                                        {area.href ? (
                                          <a href={area.href} className="inline-flex h-[30px] items-center rounded-[2px] bg-[#d7d7d7] px-3 font-fraunces text-[12px] leading-none text-[#233465] transition-opacity hover:opacity-75">
                                            {area.title}
                                          </a>
                                        ) : (
                                          <span className="inline-flex h-[30px] items-center rounded-[2px] bg-[#d7d7d7] px-3 font-fraunces text-[12px] leading-none text-[#233465]">
                                            {area.title}
                                          </span>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <p className="font-poppins text-[14px] leading-[1.4] text-[#535353]">Sin relaciones asociadas.</p>
                                )}
                              </div>

                              <a href={activePractice.sourceUrl ?? activePractice.href} className="inline-flex items-center gap-[10px] self-start font-poppins text-[14px] font-bold text-[#2e426b] transition-opacity hover:opacity-75">
                                Ver práctica
                                <svg viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-current stroke-[1.6]" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M3 8h9" />
                                  <path d="M8 3l5 5-5 5" />
                                </svg>
                              </a>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            )}
          </div>
        </section>
      ) : null}
    </>
  );
}



