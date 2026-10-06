const FALLBACK_SITE_URL = "http://localhost:3000";

/** Public origin of the site, without a trailing slash. Set `SITE_URL` in production. */
export const SITE_URL = (process.env.SITE_URL ?? FALLBACK_SITE_URL).replace(/\/+$/, "");

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
