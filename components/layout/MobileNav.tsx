"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { type NavItem, sectionHref } from "@/lib/site";

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-10 items-center justify-center rounded-full text-foreground hover:bg-placeholder"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>

      <nav
        id={panelId}
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-border bg-background shadow-lg"
      >
        <ul className="flex flex-col px-4 py-3">
          {items.map((item) => (
            <li key={item.sectionId}>
              <a
                href={sectionHref(item.sectionId)}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base text-foreground hover:bg-placeholder"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
