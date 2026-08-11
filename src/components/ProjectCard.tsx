import React, { useState } from "react";
import {
  MapPin,
  ArrowRight,
  Home,
  CheckCircle2,
  X,
  Phone,
  BedDouble,
  Ruler,
  Zap,
  Sofa,
  Bath,
  Building2,
} from "lucide-react";

import type { PropertyProject } from "../data/projects";

interface ProjectCardProps {
  project: PropertyProject;
}

/* ========================================
   ICON SPESIFIKASI
======================================== */

const specificationIcons: Record<
  string,
  React.ComponentType<{
    size?: number;
    strokeWidth?: number;
  }>
> = {
  bedroom: BedDouble,
  land: Ruler,
  electricity: Zap,
  building: Building2,
  livingRoom: Sofa,
  bathroom: Bath,
  units: Building2,
};

/* ========================================
   PROJECT CARD
======================================== */

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}) => {
  const [isDetailOpen, setIsDetailOpen] =
    useState(false);

  const [currentImageIndex, setCurrentImageIndex] =
    useState(0);

  const mainImage = project.images[0];

  /* ========================================
     OPEN DETAIL
  ======================================== */

  const openDetail = () => {
    setCurrentImageIndex(0);
    setIsDetailOpen(true);
    document.body.style.overflow = "hidden";
  };

  /* ========================================
     CLOSE DETAIL
  ======================================== */

  const closeDetail = () => {
    setIsDetailOpen(false);
    document.body.style.overflow = "";
  };

  /* ========================================
     NEXT IMAGE
  ======================================== */

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1
        ? 0
        : prev + 1
    );
  };

  /* ========================================
     PREVIOUS IMAGE
  ======================================== */

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0
        ? project.images.length - 1
        : prev - 1
    );
  };

  return (
    <>
      {/* ========================================
          PROJECT CARD
      ======================================== */}

      <article className="project-card">

        {/* FOTO PROJECT */}

        <div className="project-card__image">
          {mainImage ? (
            <img
              src={mainImage}
              alt={project.name}
            />
          ) : (
            <div>Foto Project</div>
          )}

          {/* JUMLAH FOTO */}

          {project.images.length > 1 && (
            <span className="project-card__photo-count">
              {project.images.length} Foto
            </span>
          )}
        </div>

        {/* ========================================
            CONTENT
        ======================================== */}

        <div className="project-card__content">

          {/* NAMA PROJECT */}

          <h3>{project.name}</h3>

          {/* LOKASI */}

          <div className="project-card__location">
            <MapPin size={17} />

            <span>
              {project.location}
            </span>
          </div>

          {/* ========================================
              PRICE
          ======================================== */}

          <div className="project-card__price">
            <span>Harga mulai</span>

            <strong>
              {project.price}
            </strong>
          </div>

          {/* ========================================
              TOTAL UNIT
          ======================================== */}

          <div className="project-card__units">
            <div>
              <span>Total Unit</span>

              <strong>
                {project.totalUnits} Unit
              </strong>
            </div>
          </div>

          {/* ========================================
              DESCRIPTION
          ======================================== */}

          {project.description && (
            <p className="project-card__description">
              {project.description}
            </p>
          )}

          {/* ========================================
              TRUST POINT
          ======================================== */}

          <div className="project-card__trust">

            <CheckCircle2 size={16} />

            <span>
              Proses KPR didampingi tim
              Borneo Real Properti
            </span>

          </div>

          {/* ========================================
              BUTTON
          ======================================== */}

          <button
            type="button"
            className="project-card__button"
            onClick={openDetail}
          >
            Lihat Detail

            <ArrowRight size={17} />
          </button>

        </div>
      </article>

      {/* ========================================
          PROJECT DETAIL MODAL
      ======================================== */}

      {isDetailOpen && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Detail project ${project.name}`}
          onClick={closeDetail}
        >

          {/* ========================================
              MODAL CONTENT
          ======================================== */}

          <div
            className="project-modal__content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* ========================================
                CLOSE BUTTON
            ======================================== */}

            <button
              type="button"
              className="project-modal__close"
              onClick={closeDetail}
              aria-label="Tutup detail project"
            >
              <X size={22} />
            </button>

            {/* ========================================
                IMAGE CAROUSEL
            ======================================== */}

            <div
              className="project-modal__image"
              style={{
                position: "relative",
                isolation: "isolate",
                background: "#fff",
              }}
            >

              {project.images.length > 0 ? (
                <>
                  <img
                    src={
                      project.images[
                        currentImageIndex
                      ]
                    }
                    alt={`${project.name} - Foto ${
                      currentImageIndex + 1
                    }`}
                  />

                  {/* NAVIGATION */}

                  {project.images.length > 1 && (
                    <>
                      {/* PREVIOUS */}

                      <button
                        type="button"
                        className="project-modal__nav project-modal__nav--prev"
                        onClick={previousImage}
                        aria-label="Foto sebelumnya"
                      >
                        ←
                      </button>

                      {/* NEXT */}

                      <button
                        type="button"
                        className="project-modal__nav project-modal__nav--next"
                        onClick={nextImage}
                        aria-label="Foto berikutnya"
                      >
                        →
                      </button>

                      {/* COUNTER */}

                      <div className="project-modal__counter">
                        {currentImageIndex + 1}
                        {" / "}
                        {project.images.length}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div>
                  Foto Project
                </div>
              )}

            </div>

            {/* ========================================
                MODAL BODY
            ======================================== */}

            <div className="project-modal__body">

              {/* EYEBROW */}

              <span className="project-modal__eyebrow">
                PROJECT PERUMAHAN
              </span>

              {/* NAME */}

              <h2>
                {project.name}
              </h2>

              {/* LOCATION */}

              <div className="project-modal__location">

                <MapPin size={18} />

                <span>
                  {project.location}
                </span>

              </div>

              {/* ========================================
                  HIGHLIGHT
              ======================================== */}

              <div className="project-modal__highlight">

                <div>
                  <span>
                    Harga mulai
                  </span>

                  <strong>
                    {project.price}
                  </strong>
                </div>

                <div>
                  <span>
                    Total Unit
                  </span>

                  <strong>
                    {project.totalUnits} Unit
                  </strong>
                </div>

              </div>

              {/* ========================================
                  DESCRIPTION
              ======================================== */}

              {project.description && (
                <div className="project-modal__section">

                  <h3>
                    Tentang Project
                  </h3>

                  <p>
                    {project.description}
                  </p>

                </div>
              )}

                {/* ========================================
    BLOK PROJECT
======================================== */}

{project.blocks &&
  project.blocks.length > 0 && (
    <div className="project-modal__section">
      <h3>Blok Project</h3>

      <div className="project-modal__blocks">
        {project.blocks.map((block) => (
          <div
            className="project-modal__block"
            key={block.name}
          >
            <div>
              <strong>{block.name}</strong>
              <span>{block.landArea}</span>
            </div>

            <div className="project-modal__block-units">
              <span>Jumlah Unit</span>
              <strong>{block.units} Unit</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
  
              {/* ========================================
                  SPECIFICATIONS
              ======================================== */}

              {project.specifications &&
                project.specifications.length > 0 && (
                  <div className="project-modal__section">

                    <h3>
                      Spesifikasi Rumah
                    </h3>

                    <div className="project-specifications">

                      {project.specifications.map(
                        (item) => {

                          const Icon =
                            specificationIcons[
                              item.icon
                            ] || CheckCircle2;

                          return (
                            <div
                              className="project-specification"
                              key={`${item.label}-${item.value}`}
                            >

                              <div className="project-specification__icon">
                                <Icon
                                  size={22}
                                  strokeWidth={1.8}
                                />
                              </div>

                              <div className="project-specification__content">

                                <span>
                                  {item.label}
                                </span>

                                <strong>
                                  {item.value}
                                </strong>

                              </div>

                            </div>
                          );
                        }
                      )}

                    </div>

                  </div>
                )}

              {/* ========================================
                  FACILITIES
              ======================================== */}

              {project.facilities &&
                project.facilities.length > 0 && (
                  <div className="project-modal__section">

                    <h3>
                      Fasilitas
                    </h3>

                    <ul>

                      {project.facilities.map(
                        (item) => (
                          <li key={item}>

                            <CheckCircle2
                              size={16}
                            />

                            <span>
                              {item}
                            </span>

                          </li>
                        )
                      )}

                    </ul>

                  </div>
                )}

              {/* ========================================
                  TRUST
              ======================================== */}

              <div className="project-modal__trust">

                <Home size={19} />

                <div>

                  <strong>
                    Didampingi Sampai Akad
                  </strong>

                  <span>
                    Tim Borneo Real Properti
                    membantu proses KPR hingga
                    serah terima kunci.
                  </span>

                </div>

              </div>

              {/* ========================================
                  WHATSAPP
              ======================================== */}

              <a
                href={`https://api.whatsapp.com/send?phone=6285845585994&text=${encodeURIComponent(
                  `Halo Borneo Real Properti, saya tertarik dengan project ${project.name}. Saya ingin mendapatkan informasi lebih lanjut.`
                )}`}
                className="project-modal__whatsapp"
                target="_blank"
                rel="noreferrer"
              >

                <Phone size={19} />

                Konsultasi Project Ini

              </a>

            </div>
          </div>
        </div>
      )}
    </>
  );
};