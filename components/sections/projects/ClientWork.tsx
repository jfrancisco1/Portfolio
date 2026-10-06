import { ExternalLink, History } from "lucide-react";
import { EXTERNAL_LINK_PROPS } from "@/lib/site";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { ClientProject } from "@/types/profile";

interface ClientWorkProps {
  projects: ClientProject[];
}

function displayHost(url: string): string {
  return new URL(url).hostname.replace(/^www\./, "");
}

export function ClientWork({ projects }: ClientWorkProps) {
  if (projects.length === 0) return null;

  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold tracking-tight">Client work</h3>
      <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card as="li" key={project.url} className="flex flex-col">
            <h4 className="text-lg font-semibold">{project.client}</h4>
            <p className="mt-1 text-sm text-muted">
              {project.role}
              {project.company ? ` · at ${project.company}` : null}
            </p>
            <p className="mt-4 leading-relaxed text-pretty text-muted">{project.summary}</p>

            {project.note ? (
              <p className="mt-4 flex gap-2 rounded-lg bg-placeholder px-3 py-2 text-sm text-muted">
                <History className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {project.note}
              </p>
            ) : null}

            {project.stack.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.client} tech stack`}>
                {project.stack.map((item) => (
                  <li key={item.name}>
                    <Badge item={item} />
                  </li>
                ))}
              </ul>
            ) : null}

            <a
              href={project.url}
              {...EXTERNAL_LINK_PROPS}
              className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent underline-offset-4 hover:underline md:mt-auto md:pt-6"
            >
              Visit {displayHost(project.url)}
              <ExternalLink className="size-3.5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Card>
        ))}
      </ul>
    </div>
  );
}
