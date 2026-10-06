import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/site";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function About() {
  const { heading, paragraphs, facts } = profile.about;

  return (
    <Section id={SECTION_IDS.about} eyebrow="About" title={heading}>
      <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
        <div className="max-w-prose space-y-5 text-lg leading-relaxed text-pretty text-muted">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <Card className="self-start p-6">
          <dl className="space-y-4">
            {facts.map(({ label, value }) => (
              <div key={label}>
                <dt className="font-mono text-xs tracking-wide text-muted uppercase">{label}</dt>
                <dd className="mt-1 font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </Reveal>
    </Section>
  );
}
