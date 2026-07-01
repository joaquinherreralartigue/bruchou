import Link from "next/link";
import { RECOGNITIONS } from "@/data/mock";
import { withBasePath } from "@/lib/paths";

export default function RecognitionsStrip() {
  if (RECOGNITIONS.length === 0) return null;

  return (
    <aside className="bg-[#f7f5f2] px-[var(--space-inline)] py-[20px]" aria-label="Reconocimientos del estudio">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-center justify-start gap-[0px_36px]">
          <div className="shrink-0">
            <span className="font-poppins text-[11px] font-medium text-[#94827a]">
              Reconocimientos
            </span>
          </div>
          <div
            className="flex flex-wrap items-center gap-x-[38px] gap-y-[8px] font-fraunces font-normal"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            {RECOGNITIONS.map((rec) => (
              <Link
                key={rec.id}
                href={withBasePath("/reconocimientos")}
                prefetch={false}
                aria-label={`Ver reconocimientos: ${rec.name} ${rec.year}`}
                className="group/rec inline-flex items-baseline gap-[4px] transition-transform duration-[180ms] ease-out hover:-translate-y-[1px]"
              >
                <span className="text-[16px] text-[#535353] transition-colors duration-[200ms] group-hover/rec:text-[#233465] group-hover/rec:underline group-hover/rec:decoration-[#233465]/35 group-hover/rec:decoration-[1px] group-hover/rec:underline-offset-[3px]">
                  {rec.name}
                </span>
                <span className="text-[11px] text-[#94827a] transition-colors duration-[200ms] group-hover/rec:text-[#233465]/60">
                  {rec.year}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
