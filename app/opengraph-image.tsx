import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.person.name}, ${profile.person.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Matches the dark theme tokens in globals.css.
const COLORS = {
  background: "#0c0a09",
  foreground: "#f5f5f4",
  muted: "#a8a29e",
  accent: "#5eead4",
};

export default function OpengraphImage() {
  const { name, title, pitch } = profile.person;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: `radial-gradient(circle at 10% 0%, rgba(94, 234, 212, 0.18), ${COLORS.background} 60%)`,
          color: COLORS.foreground,
        }}
      >
        <div style={{ fontSize: 28, color: COLORS.accent, letterSpacing: 2, textTransform: "uppercase" }}>
          {title}
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 20 }}>{name}</div>
        <div style={{ fontSize: 34, color: COLORS.muted, marginTop: 28, lineHeight: 1.4, maxWidth: 1000 }}>
          {pitch}
        </div>
      </div>
    ),
    size,
  );
}
