import { profile } from "@/data/profile";
import { SITE_URL } from "./site";

const { person, skills, education } = profile;

export const SITE_TITLE = `${person.name} | ${person.title}`;
export const SITE_DESCRIPTION = person.metaDescription;

/** schema.org `Person` structured data for search engines. */
export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.title,
    description: person.summary,
    url: SITE_URL,
    image: `${SITE_URL}${person.photo.src}`,
    email: `mailto:${person.email}`,
    sameAs: [person.githubUrl, person.linkedinUrl],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
    knowsAbout: skills.flatMap((group) => group.items.map((item) => item.name)),
  };
}

/** Serializes JSON-LD for a `<script>` tag, escaping `<` to prevent HTML injection. */
export function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
