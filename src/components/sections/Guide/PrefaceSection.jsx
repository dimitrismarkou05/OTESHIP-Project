import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { loadRandomWorkshopImages } from "../../../data/Workshops/workshopImages";

const PrefaceSection = () => {
  const { t } = useTranslation("guide");
  const prefaceParagraphs = t("preface.paragraphs", { returnObjects: true });
  const bodies = t("preface.bodies", { returnObjects: true });
  const firstItemRef = useRef(null);

  // State for the dynamic image
  const [randomImage, setRandomImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch the random image on mount
  useEffect(() => {
    const fetchRandomImage = async () => {
      const images = await loadRandomWorkshopImages(1);
      if (images && images.length > 0) {
        setRandomImage(images[0].src);
      }
    };
    fetchRandomImage();
  }, []);

  useEffect(() => {
    if (randomImage) {
      setIsLoaded(false);
    }
  }, [randomImage]);

  // Combine all elements that need staggering
  const staggeredElements = [
    ...prefaceParagraphs.map((text) => ({ type: "paragraph", content: text })),
    { type: "title", content: t("preface.bodiesTitle") },
    ...bodies.map((body) => ({ type: "body", content: body })),
  ];

  return (
    <section
      className="flex flex-col items-start gap-4 xs:gap-5 md:gap-6 scroll-mt-20 md:scroll-mt-30 w-full transition-colors duration-200"
      id="preface"
    >
      <div
        className="flex flex-row items-center justify-center gap-2 xs:gap-2.5"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="h-1 w-6 xs:w-8 bg-(--color-primary) rounded-full"></div>
        <h1 className="font-semibold text-xl xs:text-2xl md:text-3xl text-(--color-dark-text) dark:text-white transition-colors duration-200">
          {t("preface.title")}
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-center xl:justify-between gap-6 xs:gap-8 md:gap-10 xl:gap-12 w-full">
        {/* Left Content: Text */}
        <div className="flex flex-col gap-4 md:gap-6 flex-1 w-full">
          <div className="flex flex-col items-start gap-1.5 xs:gap-2">
            {staggeredElements.map((element, index) => {
              if (element.type === "paragraph") {
                return (
                  <p
                    className="text-xs xs:text-sm md:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) pb-3 xs:pb-4 leading-relaxed transition-colors duration-200"
                    key={`para-${index}`}
                    ref={index === 0 ? firstItemRef : null}
                    dangerouslySetInnerHTML={{ __html: element.content }}
                    data-aos="fade-down"
                    data-aos-delay={800 + index * 150}
                    data-aos-anchor={
                      index === 0 ? undefined : "#first-stagger-trigger"
                    }
                    data-aos-anchor-placement="top-bottom"
                    id={index === 0 ? "first-stagger-trigger" : undefined}
                  />
                );
              } else if (element.type === "title") {
                return (
                  <h1
                    key={`title-${index}`}
                    className="text-xs xs:text-sm md:text-base font-semibold text-(--color-dark-text) dark:text-white mt-1 xs:mt-2 transition-colors duration-200"
                    data-aos="fade-down"
                    data-aos-delay={800 + index * 150}
                    data-aos-anchor="#first-stagger-trigger"
                    data-aos-anchor-placement="top-bottom"
                  >
                    {element.content}
                  </h1>
                );
              } else if (element.type === "body") {
                return (
                  <div
                    key={`body-${index}`}
                    className="flex flex-row items-center justify-start gap-2 xs:gap-2.5 pt-1"
                    data-aos="fade-down"
                    data-aos-delay={800 + index * 150}
                    data-aos-anchor="#first-stagger-trigger"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <i className="fa-solid fa-location-dot text-(--color-primary) shrink-0 text-sm"></i>
                    <p className="text-xs xs:text-sm md:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) transition-colors duration-200">
                      {element.content}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        {/* Right Content: Image */}
        <Link
          to="/ceramics"
          className="relative rounded-md w-full max-w-lg md:max-w-xl mx-auto xl:mx-0 xl:w-2/5 shrink-0 block overflow-hidden drop-shadow-lg h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-auto xl:self-stretch bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
          data-aos="fade-down"
          data-aos-delay="1100"
        >
          {/* Skeleton Overlay */}
          <div
            className={`absolute inset-0 bg-gray-300 dark:bg-gray-700 animate-pulse transition-opacity duration-400 ${
              isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />

          {randomImage && (
            <img
              src={randomImage}
              alt="Ceramics project banner"
              onLoad={() => setIsLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover rounded-md transition-all duration-500 ease-in-out hover:scale-105 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </Link>
      </div>
    </section>
  );
};

export default PrefaceSection;
