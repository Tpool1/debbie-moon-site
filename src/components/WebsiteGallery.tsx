import { websiteMeta, websiteProjects } from "@/content/website";
import s from "./WebsiteGallery.module.css";

export default function WebsiteGallery() {
  return (
    <>
      <div className={s.head}>
        <div>
          <p className="eyebrow">{websiteMeta.eyebrow}</p>
          <h2 className={`h2 ${s.title}`}>{websiteMeta.title}</h2>
        </div>
        <div>
          {websiteMeta.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className={s.summary}>
              {paragraph}
            </p>
          ))}
          <p className={s.role}>{websiteMeta.role}</p>
        </div>
      </div>

      <div className={s.projects}>
        {websiteProjects.map((project) => (
          <article key={project.slug} className={s.project}>
            <div
              className={s.images}
              data-comparison={project.images.length === 2 ? "true" : "false"}
            >
              {project.images.map((image) => (
                <figure key={image.src} className={s.imageFrame}>
                  {"label" in image && (
                    <figcaption className={s.imageLabel}>{image.label}</figcaption>
                  )}
                  <img
                    className={s.image}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>

            <div className={s.caption}>
              <h3 className={s.projectTitle}>{project.title}</h3>
              <p className={s.description}>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
