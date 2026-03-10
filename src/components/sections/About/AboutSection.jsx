import React, { useRef } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import bannerImage from "../../../assets/banners/about-story-banner.webp";

const AboutSection = () => {
  const { t } = useTranslation("about");
  const paragraphs = t("about.paragraphs", { returnObjects: true });
  const firstParRef = useRef(null);

  return (
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        {/* Adjusted wrapper mimicking the SchoolsSection sizing behavior */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-5 lg:gap-6 xl:gap-8 w-full max-w-7xl">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-7 xl:gap-8 justify-evenly flex-1 w-full">
            <h1
              className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-(--color-dark-text) dark:text-white"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {t("about.title")}
            </h1>
            {paragraphs.map((item, index) => (
              <p
                className="text-sm md:text-base xl:text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary)"
                key={index}
                ref={index === 0 ? firstParRef : null}
                data-aos="fade-right"
                data-aos-delay={800 + index * 150}
                data-aos-anchor={index === 0 ? undefined : "#first-par-trigger"}
                data-aos-anchor-placement="top-bottom"
                id={index === 0 ? "first-par-trigger" : undefined}
              >
                {item}
              </p>
            ))}
          </div>

          {/* w-full max-w-2xl mx-auto: Centers the image and constraints it on <lg screens 
            lg:max-w-100 lg:mx-0: Applies your specific limit and un-centers it when in row layout 
          */}
          <Link
            to="/ceramics"
            className="inset-0 rounded-md w-full max-w-lg md:max-w-xl mx-auto lg:mx-0 lg:max-w-100 block overflow-hidden shrink-0"
            data-aos="fade-down"
            data-aos-delay="1100"
          >
            <img
              src={bannerImage}
              alt="tets"
              className="w-full h-full object-cover rounded-md transition-transform duration-400 ease-in-out hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
