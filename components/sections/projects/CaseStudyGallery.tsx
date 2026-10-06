import Image from "next/image";
import { publicAssetExists } from "@/lib/assets";
import type { GalleryImage } from "@/types/profile";

interface CaseStudyGalleryProps {
  images: GalleryImage[];
}

const GALLERY_SIZES = "(min-width: 1152px) 520px, (min-width: 640px) 50vw, 100vw";

/** Grid of product screens. Images whose files are missing are skipped. */
export function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  const available = images.filter((image) => publicAssetExists(image.src));
  if (available.length === 0) return null;

  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {available.map((image) => (
        <li key={image.src}>
          <figure>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={GALLERY_SIZES}
              className="h-auto w-full rounded-xl border border-border shadow-sm"
            />
            <figcaption className="mt-2 text-sm text-muted">{image.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
