import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { EXTERNAL_LINK_PROPS, SECTION_IDS } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section id={SECTION_IDS.experience} eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-12 border-l border-border pl-6 sm:pl-10">
        {profile.experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full bg-accent ring-4 ring-background sm:-left-[calc(2.5rem+5px)]"
            />
            <Reveal>
              <p className="font-mono text-sm text-muted">
                {job.start} – {job.end}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">{job.role}</h3>
              <p className="text-accent">
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    {...EXTERNAL_LINK_PROPS}
                    className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
                  >
                    {job.company}
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  job.company
                )}
              </p>
              <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-accent">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
