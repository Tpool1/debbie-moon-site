"use client";

import { campaignGalleryMeta, campaignPieces } from "@/content/campaign";
import Modal from "./Modal";
import WorkGallery from "./WorkGallery";

/**
 * The Bad Molecules campaign used to occupy a section of the home page. It now
 * opens from its Selected Work card on About.
 */
export default function CampaignModal({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <Modal
      label={label}
      title="Bad Molecules campaign"
      className={className}
    >
      <WorkGallery meta={campaignGalleryMeta} pieces={campaignPieces} />
    </Modal>
  );
}
