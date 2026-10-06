import { profile } from "@/data/profile";
import { SECTION_IDS } from "@/lib/site";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section
      id={SECTION_IDS.skills}
      eyebrow="Skills"
      title="Tools I work with"
      className="bg-surface-muted"
    >
      <Reveal>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group) => (
            <Card as="li" key={group.title}>
              <h3 className="font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Badge item={item} className="bg-background" />
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
