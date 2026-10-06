import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { EXTERNAL_LINK_PROPS } from "@/lib/site";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** Opens in a new tab with safe `rel` attributes. */
  external?: boolean;
  className?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-hover",
  secondary: "border border-border bg-surface text-foreground hover:border-accent hover:text-accent",
};

/** A link styled as a button. Every call-to-action on this site navigates somewhere. */
export function Button({ href, children, variant = "primary", external = false, className }: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? EXTERNAL_LINK_PROPS : {})}
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
