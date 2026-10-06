import { FaGooglePlay } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";

interface PlayStoreButtonProps {
  url: string;
  label: string;
}

/** Renders nothing when the URL is empty. */
export function PlayStoreButton({ url, label }: PlayStoreButtonProps) {
  if (!url) return null;

  return (
    <Button href={url} external className="self-start lg:self-auto">
      <FaGooglePlay className="size-4" aria-hidden="true" />
      {label}
    </Button>
  );
}
