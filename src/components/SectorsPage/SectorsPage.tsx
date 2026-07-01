"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";
import { SECTORS } from "@/data/mock";

const INTRO_COPY = [
  "Mirada sectorial para decisiones complejas.",
  "Trabajo, energía, capital, tecnología, salud, agro y sector público.",
];

export default function SectorsPage() {
  const [stage, setStage] = useState<1 | 2>(1);
  const [activeId, setActiveId] = useState(SECTORS[0]?.id ?? "");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStage(2);
      return;
    }
    const timer = window.setTimeout(() => setStage(2), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const activeSector = useMemo(
    () => SECTORS.find((sector) => sector.id === activeId) ?? SECTORS[0],
    [activeId],
  );

  return (
    <section className="relative overflow-hidden px-[var(--space-inline)] pb-14 pt-8 sm:pb-20 sm:pt-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:gap-10">
        <header className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-end">
          <div className="grid gap-4">
            <p className="kicker text-[#6f675f]">Sectores</p>
            <h1 className="font-fraunces text-[clamp(2.4rem,1.8rem+2.6vw,4.85rem)] font-normal leading-[0.96] tracking-[-0.02em] text-[#171614]">
              {stage === 1 ? INTRO_COPY[0] : "Sectores e industrias"}
            </h1>
          </div>
          <p className="max-w-[34rem] font-poppins text-[clamp(1rem,0.95rem+0.35vw,1.25rem)] leading-[1.5] text-[#514a43] transition-all duration-[420ms] ease-out">
            {stage === 1
              ? INTRO_COPY[1]
              : "Contenido editorial y lectura jurídica para sectores donde la regulación, la inversión y la operación se cruzan."}
          </p>
        </header>

        <div className="grid min-h-[min(72dvh,58rem)] gap-5 lg:grid-cols-[minmax(16rem,0.76fr)_minmax(0,1.24fr)] lg:gap-8">
          <nav aria-label="Sectores" className="order-2 lg:order-1">
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {SECTORS.map((sector, index) => {
                const isActive = sector.id === activeId;
                return (
                  <li key={sector.id}>
                    <button
                      type="button"
                      className={[
                        "group flex w-full items-start justify-between gap-4 rounded-[2px] border px-4 py-4 text-left transition-[background-color,color,transform,border-color] duration-[180ms] ease-out",
                        isActive
                          ? "border-[#171614] bg-[#171614] text-[#f7f5f2]"
                          : "border-[#d9d1c8] bg-transparent text-[#5d564f] hover:border-[#9d958d] hover:bg-[#f0ebe5]",
                      ].join(" ")}
                      onClick={() => setActiveId(sector.id)}
                      onMouseEnter={() => setActiveId(sector.id)}
                      onFocus={() => setActiveId(sector.id)}
                      aria-pressed={isActive}
                    >
                      <span className="font-poppins text-[0.75rem] font-medium tracking-[0.14em] opacity-75">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1 font-fraunces text-[28px] leading-[1.08]">
                        {sector.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-[2px] border border-[#d9d1c8] bg-[#efe9e1]">
              <div className="grid min-h-[32rem] gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="relative flex min-h-[18rem] items-end overflow-hidden bg-[#1a1a18] p-5 sm:p-8 lg:min-h-full">
                  <div
                    className={[
                      "absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,#35312d_0%,#1a1a18_48%,#0f1011_100%)] transition-opacity duration-[420ms] ease-out",
                      stage === 1 ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                  <div
                    className={[
                      "absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(140deg,#6f665a_0%,#47413a_34%,#171614_100%)] transition-opacity duration-[520ms] ease-out",
                      stage === 2 ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 max-w-[28rem] text-[#f7f5f2]">
                    <p className="kicker mb-3 text-white/65">Estado {stage === 1 ? "inicial" : "informativo"}</p>
                    <h2 className="font-fraunces text-[40px] font-normal leading-[0.98]">
                      {stage === 1 ? "Una entrada sobria y concentrada." : "La lectura se abre hacia los sectores."}
                    </h2>
                    <p className="mt-4 max-w-[26rem] font-poppins text-[clamp(0.95rem,0.9rem+0.25vw,1.12rem)] leading-[1.55] text-white/78">
                      {stage === 1
                        ? "La composición prioriza una sola idea visual y prepara la transición sin salto de layout."
                        : "La segunda pantalla consolida el contenido y deja visibles los sectores con interacción equivalente en desktop y touch."}
                    </p>
                  </div>
                </div>

                <article className="flex flex-col justify-between gap-6 p-5 sm:p-8">
                  <div className="grid gap-5">
                    <div className="grid gap-2">
                      <p className="kicker text-[#6f675f]">Sector activo</p>
                      <h3 className="font-fraunces text-[28px] font-normal leading-[1.02] text-[#171614]">
                        {activeSector?.title}
                      </h3>
                    </div>
                    <p className="max-w-[36rem] font-poppins text-[clamp(0.98rem,0.94rem+0.22vw,1.12rem)] leading-[1.6] text-[#4e4740]">
                      {activeSector?.summary}
                    </p>
                    <dl className="grid gap-4 sm:grid-cols-2">
                      <InfoRow label="Contexto" value={activeSector?.business_context ?? "TODO: contenido institucional pendiente"} />
                      <InfoRow label="Marco regulatorio" value={activeSector?.regulatory_tension ?? "TODO: contenido institucional pendiente"} />
                    </dl>
                  </div>

                  <div className="grid gap-4">
                    <div className="flex flex-wrap gap-2">
                      {activeSector?.capability_chips.slice(0, 5).map((chip) => (
                        <span
                          key={chip}
                          className="inline-flex items-center rounded-sm border border-[#d3cbc1] bg-[#fbf9f6] px-3 py-1.5 font-poppins text-[0.75rem] text-[#514a43]"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={withBasePath("/busqueda")}
                      prefetch={false}
                      className="inline-flex w-fit items-center gap-2 font-poppins text-[0.875rem] font-semibold text-[#171614] transition-opacity hover:opacity-70 focus-visible:opacity-70"
                    >
                      Búsqueda asistida <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <p className="sr-only" aria-live="polite">
            {activeSector?.title}
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-2 rounded-[2px] bg-[#f6f1eb] p-4">
      <dt className="font-poppins text-[0.72rem] uppercase tracking-[0.14em] text-[#7a7168]">{label}</dt>
      <dd className="font-poppins text-[0.95rem] leading-[1.55] text-[#2f2a25]">{value}</dd>
    </div>
  );
}
