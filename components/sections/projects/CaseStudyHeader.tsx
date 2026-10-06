import type { ReactNode } from "react";
import { Badge } from "@/components/ui/Badge";
import type { CaseStudyBase } from "@/types/profile";

interface CaseStudyHeaderProps {
  caseStudy: CaseStudyBase;
  /** Optional call to action shown beside the header, e.g. a store button. */
  action?: ReactNode;
}

export function CaseStudyHeader({ caseStudy, action }: CaseStudyHeaderProps) {
  const { eyebrow, title, role, tagline, stack } = caseStudy;

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-medium tracking-wide text-accent uppercase">{eyebrow}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h3>
        <p className="mt-1 text-sm text-muted">{role}</p>
        <p className="mt-4 text-lg leading-relaxed text-pretty">{tagline}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {stack.map((item) => (
            <li key={item.name}>
              <Badge item={item} />
            </li>
          ))}
        </ul>
      </div>

      {action}
    </div>
  );
}
