"use client";

import Modal from "./Modal";
import WebsiteGallery from "./WebsiteGallery";

/**
 * The website launches, opening from their Work I've Led card on About. The
 * card used to link straight out to simplifyx.com, which showed one of the
 * three sites and none of the work behind it.
 */
export default function WebsiteModal({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <Modal
      label={label}
      title="Website strategy and launches"
      className={className}
    >
      <WebsiteGallery />
    </Modal>
  );
}
