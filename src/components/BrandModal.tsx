"use client";

import WorkGallery from "./WorkGallery";
import { brandMeta, brandPieces } from "@/content/brand";
import Modal from "./Modal";

/**
 * The NobleAI brand system, opening from its Work I've Led card on About the
 * same way the Bad Molecules campaign does.
 */
export default function BrandModal({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <Modal label={label} title="NobleAI brand system" className={className}>
      <WorkGallery meta={brandMeta} pieces={brandPieces} />
    </Modal>
  );
}
