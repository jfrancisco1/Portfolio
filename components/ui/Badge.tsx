import { cn } from "@/lib/cn";
import { TECH_ICONS } from "@/lib/tech-icons";
import type { TechItem } from "@/types/profile";

interface BadgeProps {
  item: TechItem;
  className?: string;
}

export function Badge({ item, className }: BadgeProps) {
  const Icon = item.icon ? TECH_ICONS[item.icon] : null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground",
        className,
      )}
    >
      {Icon ? (
        <span aria-hidden="true" className="text-accent">
          <Icon className="size-3.5" />
        </span>
      ) : null}
      {item.name}
    </span>
  );
}
