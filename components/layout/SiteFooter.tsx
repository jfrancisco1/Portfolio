import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "./SocialLinks";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {profile.person.name}
        </p>
        <SocialLinks />
      </Container>
    </footer>
  );
}
