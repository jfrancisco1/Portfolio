import type { ComponentType } from "react";
import { cn } from "@/lib/cn";

interface MediaPlaceholderProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  /** Path the real file should be saved to, shown as a hint. */
  path: string;
  className?: string;
}

export function MediaPlaceholder({ icon: Icon, label, path, className }: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex size-full flex-col items-center justify-center gap-2 border border-dashed border-border bg-placeholder p-4 text-center text-muted",
        className,
      )}
    >
      <Icon className="size-6" aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
      <code className="font-mono text-xs break-all">public{path}</code>
    </div>
  );
}
