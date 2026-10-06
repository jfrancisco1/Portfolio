import { existsSync } from "node:fs";
import { join } from "node:path";

const PUBLIC_DIR = join(process.cwd(), "public");

export function publicAssetExists(src: string): boolean {
  return existsSync(join(PUBLIC_DIR, src));
}
