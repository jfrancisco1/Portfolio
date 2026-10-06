/** Keys for tech/brand logos. Mapped to icon components in `lib/tech-icons.ts`. */
export type TechIconKey =
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "vue"
  | "tailwind"
  | "css"
  | "php"
  | "laravel"
  | "wordpress"
  | "mysql"
  | "postgresql"
  | "graphql"
  | "docker"
  | "railway"
  | "gcp"
  | "git"
  | "claude"
  | "expo"
  | "api"
  | "agile"
  | "code";

export interface TechItem {
  name: string;
  icon?: TechIconKey;
}

export interface Person {
  name: string;
  title: string;
  /** Short line under the name in the hero. */
  pitch: string;
  /** Fuller one-sentence description for search results and link previews. */
  metaDescription: string;
  summary: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  photo: SizedMediaAsset;
}

export interface ExperienceItem {
  role: string;
  company: string;
  /** Optional company website; the company name links to it when set. */
  companyUrl?: string;
  start: string;
  end: string;
  highlights: string[];
}

export type DeviceFrame = "phone" | "tablet";

export interface MediaAsset {
  /** Path relative to `public/`, starting with a slash. */
  src: string;
  alt: string;
}

export interface SizedMediaAsset extends MediaAsset {
  width: number;
  height: number;
}

export interface GalleryImage extends SizedMediaAsset {
  caption: string;
}

export interface CaseStudyApp {
  name: string;
  summary: string;
  device: DeviceFrame;
  screenshot: MediaAsset;
}

/** Shared shape of every case study: header plus Problem → Solution → Impact. */
export interface CaseStudyBase {
  eyebrow: string;
  title: string;
  role: string;
  tagline: string;
  stack: TechItem[];
  problem: string;
  solution: string[];
  impact: string[];
}

/** The featured product case study, with screenshots and a store link. */
export interface CaseStudy extends CaseStudyBase {
  /** Screens shown in a grid above the app cards. Missing files are skipped. */
  gallery: GalleryImage[];
  apps: CaseStudyApp[];
  /** Leave empty to hide the Play Store button. */
  playStoreUrl: string;
  playStoreLabel: string;
}

export interface ClientProject {
  client: string;
  url: string;
  /** Where the work was done, e.g. the agency or employer. Omit for direct/freelance work. */
  company?: string;
  role: string;
  summary: string;
  /** Optional short context shown under the summary, e.g. "Legacy project". */
  note?: string;
  stack: TechItem[];
}

export interface SkillGroup {
  title: string;
  items: TechItem[];
}

export interface Certification {
  title: string;
  issuer: string;
  hours: string;
  completed: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export interface AboutFact {
  label: string;
  value: string;
}

export interface About {
  heading: string;
  paragraphs: string[];
  facts: AboutFact[];
}

export interface ContactCopy {
  heading: string;
  message: string;
}

export interface Profile {
  person: Person;
  about: About;
  contact: ContactCopy;
  caseStudy: CaseStudy;
  /** Text-only case studies shown after the featured one (no screenshots). */
  otherCaseStudies: CaseStudyBase[];
  clientWork: ClientProject[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  education: Education;
  certifications: Certification[];
}
