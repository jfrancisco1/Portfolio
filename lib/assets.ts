import { existsSync } from "node:fs";
import { join } from "node:path";

const PUBLIC_DIR = join(process.cwd(), "public");

/**
 * Whether a file exists in `public/`. Runs on the server at build time,
 * so media dropped into `public/` shows up after the next build.
 */
export function publicAssetExists(src: string): boolean {
  return existsSync(join(PUBLIC_DIR, src));
}
