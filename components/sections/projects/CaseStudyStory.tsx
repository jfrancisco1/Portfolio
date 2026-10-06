import type { ReactNode } from "react";
import type { CaseStudyBase } from "@/types/profile";

interface CaseStudyStoryProps {
  caseStudy: CaseStudyBase;
}

interface StoryColumnProps {
  step: string;
  heading: string;
  children: ReactNode;
}

function StoryColumn({ step, heading, children }: StoryColumnProps) {
  return (
    <div>
      <p className="font-mono text-xs text-muted">{step}</p>
      <h4 className="mt-1 text-lg font-semibold">{heading}</h4>
      <div className="mt-3 leading-relaxed text-muted">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-accent">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CaseStudyStory({ caseStudy }: CaseStudyStoryProps) {
  return (
    <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-3">
      <StoryColumn step="01" heading="Problem">
        <p>{caseStudy.problem}</p>
      </StoryColumn>
      <StoryColumn step="02" heading="Solution">
        <BulletList items={caseStudy.solution} />
      </StoryColumn>
      <StoryColumn step="03" heading="Impact">
        <BulletList items={caseStudy.impact} />
      </StoryColumn>
    </div>
  );
}
