import { renderMonogram } from "@/lib/monogram";

const ICON_SIZE = 180;

export const size = { width: ICON_SIZE, height: ICON_SIZE };
export const contentType = "image/png";

// iOS applies its own rounded mask, so the square stays unrounded.
export default function AppleIcon() {
  return renderMonogram({ size: ICON_SIZE, radius: 0 });
}
