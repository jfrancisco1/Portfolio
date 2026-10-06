import { buildPersonJsonLd, serializeJsonLd } from "@/lib/metadata";
import { MAIN_CONTENT_ID } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id={MAIN_CONTENT_ID} tabIndex={-1} className="flex-1 focus:outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildPersonJsonLd()) }}
      />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
    </main>
  );
}
