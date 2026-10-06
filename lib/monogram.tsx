import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

// Matches the light theme accent in globals.css; reads well on light and dark browser tabs.
const MONOGRAM_COLORS = {
  background: "#0f766e",
  foreground: "#ffffff",
};

/** First and last initials, e.g. "Julius T. Francisco" → "JF". */
function getInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  const first = words[0]?.[0] ?? "";
  const last = words.length > 1 ? (words[words.length - 1]?.[0] ?? "") : "";
  return `${first}${last}`.toUpperCase();
}

interface MonogramOptions {
  size: number;
  /** Corner radius as a fraction of the size. */
  radius: number;
}

/** Renders the name's initials as a square PNG icon. */
export function renderMonogram({ size, radius }: MonogramOptions): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: size * radius,
          background: MONOGRAM_COLORS.background,
          color: MONOGRAM_COLORS.foreground,
          fontSize: size * 0.5,
          letterSpacing: size * 0.01,
          // The bundled image font is regular weight only; a same-color stroke fakes bold.
          WebkitTextStroke: `${size * 0.03}px ${MONOGRAM_COLORS.foreground}`,
        }}
      >
        {getInitials(profile.person.name)}
      </div>
    ),
    { width: size, height: size },
  );
}
