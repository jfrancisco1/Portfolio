import { Award, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/site";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Certifications() {
  const { education, certifications } = profile;

  return (
    <Section
      id={SECTION_IDS.credentials}
      eyebrow="Credentials"
      title="Education & certifications"
    >
      <Reveal className="grid gap-6 lg:grid-cols-3">
        <Card>
          <GraduationCap className="size-6 text-accent" aria-hidden="true" />
          <h3 className="mt-4 font-semibold">{education.degree}</h3>
          <p className="mt-1 text-muted">
            {education.school}, {education.location}
          </p>
          <p className="mt-3 font-mono text-sm text-muted">{education.period}</p>
        </Card>

        <ul className="grid gap-4 lg:col-span-2">
          {certifications.map((cert) => (
            <Card as="li" key={cert.title} className="flex gap-4 p-5 sm:p-6">
              <Award className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="font-semibold">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer} · {cert.hours} · Completed {cert.completed}
                </p>
              </div>
            </Card>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
