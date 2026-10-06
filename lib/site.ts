const FALLBACK_SITE_URL = "http://localhost:3000";

/** Railway sets this (e.g. "portfolio-production.up.railway.app") once a domain is generated. */
const RAILWAY_URL = process.env.RAILWAY_PUBLIC_DOMAIN
  ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  : undefined;

/**
 * Public origin of the site, without a trailing slash.
 * Order: `SITE_URL` (e.g. a custom domain) → Railway's domain → localhost.
 */
export const SITE_URL = (process.env.SITE_URL || RAILWAY_URL || FALLBACK_SITE_URL).replace(
  /\/+$/,
  "",
);

export const MAIN_CONTENT_ID = "main-content";

export const SECTION_IDS = {
  top: "top",
  about: "about",
  projects: "projects",
  experience: "experience",
  skills: "skills",
  credentials: "credentials",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export interface NavItem {
  label: string;
  sectionId: SectionId;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "About", sectionId: SECTION_IDS.about },
  { label: "Projects", sectionId: SECTION_IDS.projects },
  { label: "Experience", sectionId: SECTION_IDS.experience },
  { label: "Skills", sectionId: SECTION_IDS.skills },
  { label: "Credentials", sectionId: SECTION_IDS.credentials },
  { label: "Contact", sectionId: SECTION_IDS.contact },
];

export function sectionHref(id: SectionId): string {
  return `#${id}`;
}

export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
