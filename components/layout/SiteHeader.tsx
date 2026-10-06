import { profile } from "@/data/profile";
import { NAV_ITEMS, SECTION_IDS, sectionHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href={sectionHref(SECTION_IDS.top)}
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          {profile.person.name}
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.sectionId}>
                <a
                  href={sectionHref(item.sectionId)}
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav items={NAV_ITEMS} />
      </Container>
    </header>
  );
}
