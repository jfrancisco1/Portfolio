import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { EXTERNAL_LINK_PROPS } from "@/lib/site";
import type { IconComponent } from "@/lib/tech-icons";

interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
  external: boolean;
}

const { email, githubUrl, linkedinUrl } = profile.person;

const LINKS: SocialLink[] = [
  { label: "Email", href: `mailto:${email}`, icon: Mail, external: false },
  { label: "GitHub", href: githubUrl, icon: FaGithub, external: true },
  { label: "LinkedIn", href: linkedinUrl, icon: FaLinkedinIn, external: true },
];

/** Icon-only social links, each with an accessible name. */
export function SocialLinks() {
  return (
    <ul className="flex items-center gap-1">
      {LINKS.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(external ? EXTERNAL_LINK_PROPS : {})}
            className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-placeholder hover:text-foreground"
          >
            <span aria-hidden="true">
              <Icon className="size-5" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
