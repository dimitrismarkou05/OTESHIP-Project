import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation("guide");

  return (
    <section
      data-aos="zoom-out"
      data-aos-delay="400"
      className="relative bg-linear-to-tl from-[#2E5D9E] to-[#0F2FA2] transition-colors duration-200 drop-shadow-lg rounded-md overflow-hidden w-full"
    >
      {/* Responsive Background Blob */}
      <div className="absolute -bottom-20 -right-20 xs:-bottom-32 xs:-right-32 md:-bottom-40 md:-right-40 lg:-bottom-70 lg:-right-90 w-72 h-72 xs:w-96 xs:h-96 md:w-120 md:h-120 lg:w-150 lg:h-110 bg-[#ffd000] rounded-full opacity-60 blur-2xl md:blur-3xl pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col p-6 xs:p-8 md:p-10 lg:p-12 gap-4 xs:gap-5 md:gap-6 items-start justify-center">
        {/* Tag */}
        <div className="flex flex-row items-center gap-1.5 xs:gap-2 bg-white rounded-full py-0.5 xs:py-1 px-2.5 xs:px-3 shadow-sm">
          <div className="h-1.5 w-1.5 xs:h-2 xs:w-2 bg-[#2E5D9E] rounded-full"></div>
          <h1 className="uppercase font-semibold text-[10px] xs:text-xs text-[#2E5D9E]">
            {t("hero.tag")}
          </h1>
        </div>

        {/* Title */}
        <h1 className="font-semibold text-2xl xs:text-3xl md:text-4xl lg:text-5xl text-white max-w-3xl">
          {t("hero.title")}
        </h1>

        {/* Description */}
        <p className="text-xs xs:text-sm md:text-base lg:text-lg text-(--color-bg-primary) max-w-2xl leading-relaxed">
          {t("hero.description")}
        </p>

        {/* Button */}
        <a
          href="#preface"
          className="mt-2 flex flex-row items-center justify-center cursor-pointer text-xs sm:text-sm lg:text-base py-2 xs:py-2.5 px-3.5 xs:px-4 sm:px-4.5 lg:px-5 bg-white text-[#2E5D9E] font-semibold border-2 border-transparent rounded-md hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 whitespace-nowrap text-center shadow-sm hover:shadow-md"
        >
          {t("hero.startReading")}
          <svg
            className="w-2.5 h-2.5 xs:w-3 xs:h-3 lg:w-3.5 lg:h-3.5 ms-1.5 xs:ms-2 rtl:rotate-180 mt-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
