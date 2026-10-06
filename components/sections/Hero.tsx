import Image from "next/image";
import { FileDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const PHOTO_SIZES = "(min-width: 1024px) 288px, 112px";

export function Hero() {
  const { name, title, pitch, summary, resumeUrl, githubUrl, linkedinUrl, photo } = profile.person;

  return (
    <section
      id={SECTION_IDS.top}
      aria-labelledby="hero-heading"
      className="hero-backdrop relative scroll-mt-20 overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32"
    >
      <Container className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-mono text-sm font-medium tracking-wide text-accent uppercase">{title}</p>
          <h1
            id="hero-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
          >
            {name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-pretty sm:text-2xl">{pitch}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-pretty text-muted">{summary}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={resumeUrl} external>
              <FileDown className="size-4" aria-hidden="true" />
              Resume (PDF)
            </Button>
            <Button href={githubUrl} variant="secondary" external>
              <FaGithub className="size-4" aria-hidden="true" />
              GitHub
            </Button>
            <Button href={linkedinUrl} variant="secondary" external>
              <FaLinkedinIn className="size-4" aria-hidden="true" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Round avatar on small screens, portrait card on large screens: one image, no double download. */}
        <div className="order-1 lg:order-2">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={PHOTO_SIZES}
            loading="eager"
            fetchPriority="high"
            className="size-28 rounded-full object-cover object-[50%_20%] shadow-lg ring-4 ring-surface lg:aspect-4/5 lg:size-auto lg:w-72 lg:rounded-3xl lg:object-center"
          />
        </div>
      </Container>
    </section>
  );
}
