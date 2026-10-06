import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import type { SectionId } from "@/lib/site";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

interface SectionProps {
  id: SectionId;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-20 py-20 sm:py-28", className)}
    >
      <Container>
        <SectionHeading id={headingId} eyebrow={eyebrow} title={title} description={description} />
        {children}
      </Container>
    </section>
  );
}
