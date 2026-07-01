const BG_IMAGE = "https://www.figma.com/api/mcp/asset/11a920cd-0674-4d96-8bc8-21e997112888";

export default function PracticeAreasGateway() {
  return (
    <section className="relative min-h-[80dvh] overflow-hidden px-[var(--space-inline)] py-[var(--space-section)]" aria-labelledby="practice-heading">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        <img src={withBasePath(BG_IMAGE)} alt="" className="animate-slow-pan absolute inset-0 size-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-[rgba(35,28,28,0.3)] mix-blend-luminosity" />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1321 750' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><g transform='matrix(132.1 -2.3744e-14 -2.3156e-14 243 0 750)' opacity='0.6000000238418579'><rect height='27.778' width='100' fill='url(%23grad)' id='quad' shape-rendering='crispEdges'/><use href='%23quad' transform='scale(1 -1)'/><use href='%23quad' transform='scale(-1 1)'/><use href='%23quad' transform='scale(-1 -1)'/></g><defs><linearGradient id='grad' gradientUnits='userSpaceOnUse' x2='5' y2='5'><stop stop-color='rgba(35,28,28,1)' offset='0'/><stop stop-color='rgba(57,51,46,1)' offset='0.5'/><stop stop-color='rgba(79,73,64,1)' offset='1'/></linearGradient></defs></svg>\")",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[80dvh] max-w-[1280px] flex-col justify-center gap-[24px] text-[#f4efed]">
        <p className="font-poppins text-[13px] font-medium leading-[18.2px] tracking-[0.22px] text-[#848484]">Sectores y capacidades</p>

        <div className="max-w-[954px]">
          <h2 id="practice-heading" className="max-w-[16ch] font-fraunces text-[56px] font-normal leading-[1.08] tracking-[-0.02em]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
            La profundidad técnica de una firma integrada.
          </h2>
          <p className="mt-[24px] font-poppins text-[20px] leading-[1.2] text-[#ebebeb]">
            Combinamos lectura sectorial, profundidad técnica y coordinación multidisciplinaria para acompañar asuntos de alta complejidad desde una mirada integral.
          </p>
          <a href={withBasePath("/sectores-y-capacidades")} className="group mt-[24px] inline-flex h-[37px] items-center gap-[10px] py-[8px] font-poppins text-[14px] font-bold text-[#f4efed] transition-opacity hover:opacity-80">
            Explorar capacidades
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-[200ms] ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[2px]">
              <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
import { withBasePath } from "@/lib/paths";
