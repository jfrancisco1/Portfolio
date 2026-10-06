import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/site";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CaseStudyHeader } from "./projects/CaseStudyHeader";
import { CaseStudyApps } from "./projects/CaseStudyApps";
import { CaseStudyStory } from "./projects/CaseStudyStory";
import { ClientWork } from "./projects/ClientWork";
import { CaseStudyGallery } from "./projects/CaseStudyGallery";
import { PlayStoreButton } from "./projects/PlayStoreButton";

export function Projects() {
  const { caseStudy, otherCaseStudies } = profile;

  return (
    <Section
      id={SECTION_IDS.projects}
      eyebrow="Projects"
      title="Selected work"
      className="bg-surface-muted"
    >
      <div className="space-y-8">
        <Reveal>
          <Card as="article" className="space-y-12">
            <CaseStudyHeader
              caseStudy={caseStudy}
              action={<PlayStoreButton url={caseStudy.playStoreUrl} label={caseStudy.playStoreLabel} />}
            />
            <CaseStudyGallery images={caseStudy.gallery} />
            <CaseStudyApps apps={caseStudy.apps} />
            <CaseStudyStory caseStudy={caseStudy} />
          </Card>
        </Reveal>

        {otherCaseStudies.map((study) => (
          <Reveal key={study.title}>
            <Card as="article" className="space-y-12">
              <CaseStudyHeader caseStudy={study} />
              <CaseStudyStory caseStudy={study} />
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <ClientWork projects={profile.clientWork} />
      </Reveal>
    </Section>
  );
}
