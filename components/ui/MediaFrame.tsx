import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { publicAssetExists } from "@/lib/assets";
import { cn } from "@/lib/cn";
import type { DeviceFrame, MediaAsset } from "@/types/profile";
import { MediaPlaceholder } from "./MediaPlaceholder";

interface MediaFrameProps {
  asset: MediaAsset;
  device: DeviceFrame;
  /** Responsive `sizes` hint for next/image. */
  sizes: string;
}

const DEVICE_CLASSES: Record<DeviceFrame, string> = {
  phone: "h-[92%] aspect-[9/19.5] rounded-[1.75rem]",
  tablet: "w-[92%] aspect-5/3 rounded-2xl",
};

/** A device-shaped screenshot slot with a fixed aspect ratio (no layout shift). */
export function MediaFrame({ asset, device, sizes }: MediaFrameProps) {
  const exists = publicAssetExists(asset.src);

  return (
    <div className="flex aspect-4/5 items-center justify-center overflow-hidden rounded-xl bg-placeholder">
      <div
        className={cn(
          "relative overflow-hidden border-4 border-frame bg-background shadow-lg",
          DEVICE_CLASSES[device],
        )}
      >
        {exists ? (
          <Image src={asset.src} alt={asset.alt} fill sizes={sizes} className="object-cover object-top" />
        ) : (
          <MediaPlaceholder
            icon={ImageIcon}
            label="Screenshot coming soon"
            path={asset.src}
            className="border-0"
          />
        )}
      </div>
    </div>
  );
}
