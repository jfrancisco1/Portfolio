import { MAIN_CONTENT_ID } from "@/lib/site";

export function SkipLink() {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="sr-only rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
    >
      Skip to content
    </a>
  );
}
