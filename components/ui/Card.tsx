import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  as?: "div" | "article" | "li";
  className?: string;
}

export function Card({ children, as: Tag = "div", className }: CardProps) {
  return (
    <Tag className={cn("rounded-2xl border border-border bg-surface p-6 sm:p-8", className)}>
      {children}
    </Tag>
  );
}
