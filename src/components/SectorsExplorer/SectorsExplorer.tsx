"use client";
import { useState } from "react";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";
import { SECTORS } from "@/data/mock";
import type { Sector } from "@/types";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

function SectorDetail({ sector }: { sector: Sector }) {
  const rows = [
    { label: "Contexto de negocio", value: sector.business_context },
    { label: "Tensión regulatoria", value: sector.regulatory_tension },
    { label: "Alcance del servicio", value: sector.service_scope },
  ];

  return (
    <>
      <ScrollReveal variant="reveal-mask" className="font-fraunces text-[28px] font-normal leading-[1.08] text-[#16222f]" as="div">
        <h3 style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>{sector.title}</h3>
      </ScrollReveal>

      <ScrollReveal variant="reveal-stagger" className="grid gap-4" as="div">
        {rows.map(({ label, value }) => (
          <div key={label} className="grid gap-3 xs:grid-cols-[clamp(6.5rem,18vw,8rem)_minmax(0,1fr)] xs:items-start">
            <p className="text-[0.75rem] leading-5 text-[#9a9384]">{label}</p>
            <p className="min-w-0 text-[18px] leading-[1.2] text-[#3a434f]">{value}</p>
          </div>
        ))}
      </ScrollReveal>

      <div className="grid gap-4">
        <ScrollReveal variant="reveal-chip" className="font-poppins text-[13px] font-bold text-[#233465]">
          Capacidades vinculadas
        </ScrollReveal>
        <ScrollReveal variant="reveal-stagger" className="flex flex-wrap gap-2 md:gap-3" as="div">
          {sector.capability_chips.map((chip, idx) => (
            <span
              key={chip}
              className="inline-flex max-w-full items-center rounded-sm bg-[#d7d7d7] px-3 py-1.5 font-fraunces text-[clamp(0.75rem,0.72rem+0.1vw,0.8125rem)] font-normal leading-[1.2] text-[#2a211d]"
              style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1', ["--reveal-stagger-delay" as never]: `${idx * 45}ms` }}
            >
              {chip}
            </span>
          ))}
        </ScrollReveal>
      </div>

      <Link href={withBasePath("/sectores")} prefetch={false} className="inline-flex items-center gap-2 font-poppins text-[13px] font-semibold text-[#16222f] transition-opacity hover:opacity-70">
        Ver sectores <span aria-hidden="true">→</span>
      </Link>
    </>
  );
}

export default function SectorsExplorer() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-white px-[var(--space-inline)] py-[var(--space-section)] lg:flex lg:w-full lg:min-h-[750px] lg:items-center" aria-labelledby="sectors-heading">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="grid gap-4">
          <ScrollReveal variant="reveal-chip" className="font-poppins text-[clamp(0.8125rem,0.78rem+0.08vw,0.875rem)] font-medium leading-[1.35] tracking-[0.22px] text-[#848484]">
              Sectores e industrias
          </ScrollReveal>
          <h2 id="sectors-heading" className="font-fraunces text-[40px] font-normal leading-[1.08] text-[#16222f]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
            Sectores estratégicos. Mirada integral.
          </h2>
          <Link href={withBasePath("/sectores")} prefetch={false} className="inline-flex w-fit items-center gap-2 font-poppins text-[14px] font-semibold text-[#16222f] transition-opacity hover:opacity-70">
            Ver página de sectores <span aria-hidden="true">→</span>
          </Link>
          </div>
          <ScrollReveal variant="reveal-up" delay={120} className="max-w-[42rem] font-poppins text-[18px] leading-[1.2] text-[#4e5862]">
            Trabajamos en sectores donde inversión, regulación, capital y operación se cruzan con decisiones de alto impacto.
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-[clamp(2rem,4vw,5rem)] lg:items-start">
          <nav className="min-w-0 border-r border-[#e8e1dc]" aria-label="Lista de sectores">
            <ol className="flex flex-col list-none">
              {SECTORS.map((sector, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <li key={sector.id}>
                    <button
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={[
                        "grid w-full min-w-0 grid-cols-[auto_minmax(0,1fr)] items-start gap-4 px-5 py-4 text-left transition-[background-color,color,transform] duration-[220ms] ease-out",
                        isActive ? "bg-[#f4efed] text-[#413630]" : "text-[#d0c1bc] hover:bg-[#faf8f6] hover:text-[#9a8e88]",
                      ].join(" ")}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="shrink-0 font-poppins text-[13px] font-medium leading-none tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                      <span className={isActive ? "min-w-0 font-poppins text-[20px] font-semibold leading-[1.2] transition-transform duration-[220ms] ease-out" : "min-w-0 font-fraunces text-[20px] font-normal leading-[1.2] transition-transform duration-[220ms] ease-out"} style={isActive ? { transform: "translateY(0)" } : { fontVariationSettings: '"SOFT" 0, "WONK" 1', transform: "translateY(1px)" }}>
                        {sector.title}
                      </span>
                    </button>
                    {isActive && (
                      <div className="grid gap-6 px-5 pb-7 pt-1 lg:hidden">
                        <SectorDetail sector={sector} />
                      </div>
                    )}
                    {idx < SECTORS.length - 1 && <div className="h-px w-full bg-[#ede8e3]" aria-hidden="true" />}
                  </li>
                );
              })}
            </ol>
          </nav>

          <ScrollReveal key={activeIdx} variant="reveal-card" className="hidden min-w-0 flex-col gap-8 lg:flex lg:justify-center" as="div">
            <SectorDetail sector={SECTORS[activeIdx]} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
