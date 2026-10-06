import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Contact() {
  const { email, githubUrl, linkedinUrl } = profile.person;
  const { heading, message } = profile.contact;

  return (
    <Section id={SECTION_IDS.contact} eyebrow="Contact" title={heading} className="bg-surface-muted">
      <Reveal>
        <Card className="max-w-3xl">
          <p className="text-lg leading-relaxed text-pretty">{message}</p>
          <a
            href={`mailto:${email}`}
            className="mt-6 inline-block font-mono text-base break-all text-accent underline-offset-4 hover:underline sm:text-lg"
          >
            {email}
          </a>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${email}`}>
              <Mail className="size-4" aria-hidden="true" />
              Email me
            </Button>
            <Button href={linkedinUrl} variant="secondary" external>
              <FaLinkedinIn className="size-4" aria-hidden="true" />
              LinkedIn
            </Button>
            <Button href={githubUrl} variant="secondary" external>
              <FaGithub className="size-4" aria-hidden="true" />
              GitHub
            </Button>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
