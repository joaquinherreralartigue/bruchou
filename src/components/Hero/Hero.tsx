const HERO_NEWS = [
  "M&A · Energía — 2026",
  "Mercado de Capitales: nueva emisión de obligaciones negociables",
  "Infraestructura: cierre de financiamiento de proyecto",
  "Reconocimiento: Chambers Latin America 2026",
  "Designación: nuevo socio en Litigios",
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#111f3f] text-[#fbfaf8]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 88% 8%, rgba(35, 52, 101, 0.55) 0%, rgba(35, 52, 101, 0) 55%)",
      }}
      aria-label="Hero"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={withBasePath("/videos/hero-bruchou-1.mp4")} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(35, 52, 101, 0.75) 0%, rgba(35, 52, 101, 0.75) 52%, rgba(7, 18, 39, 0.75) 100%)",
          }}
        />
      </div>

      <div className="relative flex min-h-[72dvh] items-center px-[var(--space-inline)] pt-[52px] pb-10 lg:min-h-[800px]">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex w-full max-w-[680px] flex-col gap-[48px]">
            <div className="flex flex-col gap-[24px]">
              <p className="font-poppins text-[13px] leading-[18.2px] tracking-[0.22px] text-[#c3cddb]">
                Estudio jurídico · Buenos Aires
              </p>

              <h1 className="max-w-[680px] font-fraunces [font-size:var(--type-display)] font-normal leading-[1.2] text-[#fbfaf8]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                Criterio jurídico para decisiones críticas de negocio.
              </h1>

              <p className="max-w-[640px] font-poppins [font-size:var(--step-2)] font-light leading-[1.65] text-[#c3cddb]">
                Integramos conocimiento técnico, mirada sectorial y coordinación multidisciplinaria para acompañar operaciones, disputas y desafíos regulatorios de alta complejidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#0a1e37] py-[16px]" aria-label="Últimas novedades">
        <div className="ticker-wrap flex items-center">
          <p className="shrink-0 whitespace-nowrap pl-[var(--space-inline)] pr-[16px] font-poppins text-[11px] uppercase tracking-[0.18px] text-[#848484]">
            Últimas novedades
          </p>
          <div className="min-w-0 flex-1 overflow-hidden" aria-hidden="true">
            <div className="ticker-track flex w-max gap-[40px]">
              {[...HERO_NEWS, ...HERO_NEWS].map((item, i) => (
                <span key={i} className="inline-flex shrink-0 items-center gap-[8px] whitespace-nowrap font-poppins text-[13px] text-[#ebebeb]">
                  <span className="text-[#ea3725]" aria-hidden="true">
                    ·
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <ul className="sr-only">
          {HERO_NEWS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
import { withBasePath } from "@/lib/paths";
