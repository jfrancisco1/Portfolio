import { renderMonogram } from "@/lib/monogram";

const ICON_SIZE = 64;

export const size = { width: ICON_SIZE, height: ICON_SIZE };
export const contentType = "image/png";

export default function Icon() {
  return renderMonogram({ size: ICON_SIZE, radius: 0.22 });
}
