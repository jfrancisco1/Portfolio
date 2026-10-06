import { MediaFrame } from "@/components/ui/MediaFrame";
import type { CaseStudyApp } from "@/types/profile";

interface CaseStudyAppsProps {
  apps: CaseStudyApp[];
}

const SCREENSHOT_SIZES = "(min-width: 1024px) 340px, (min-width: 640px) 33vw, 100vw";

export function CaseStudyApps({ apps }: CaseStudyAppsProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-3">
      {apps.map((app) => (
        <li key={app.name}>
          <figure>
            <MediaFrame asset={app.screenshot} device={app.device} sizes={SCREENSHOT_SIZES} />
            <figcaption className="mt-4">
              <h4 className="font-semibold">{app.name}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{app.summary}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
