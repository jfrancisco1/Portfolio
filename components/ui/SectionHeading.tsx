interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-14">
      <p className="font-mono text-sm font-medium tracking-wide text-accent uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{description}</p>
      ) : null}
    </div>
  );
}
