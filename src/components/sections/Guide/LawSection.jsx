import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LawSection = () => {
  const { t } = useTranslation("guide");
  const BASE_DELAY = 300;
  const rights = t("law.unRights", { returnObjects: true });

  // Tab state: 'greece', 'poland', or 'turkey'
  const [activeTab, setActiveTab] = useState("greece");

  return (
    <section
      className="flex flex-col items-start gap-6 xs:gap-8 md:gap-10 scroll-mt-24 md:scroll-mt-32 bg-white dark:bg-(--color-dark-text) drop-shadow-lg rounded-md p-5 xs:p-6 md:p-8 lg:p-10 transition-colors duration-200"
      id="legislation"
    >
      {/* Intro & UN Rights Title */}
      <div className="flex flex-col gap-4 xs:gap-5 md:gap-6" data-aos="fade-up">
        <div className="flex flex-row items-start justify-start gap-2 xs:gap-2.5">
          <div className="bg-(--color-primary)/20 dark:bg-(--color-primary)/30 w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center text-(--color-primary) dark:text-(--color-primary2) rounded-md shrink-0 mt-0.5 xs:mt-1 md:mt-1.5 transition-colors duration-200">
            <i className="fa-solid fa-scale-balanced text-sm xs:text-base"></i>
          </div>
          <h1 className="font-semibold text-xl xs:text-2xl md:text-3xl text-(--color-dark-text) dark:text-white leading-tight transition-colors duration-200">
            {t("law.title")}
          </h1>
        </div>
        <p className="text-xs xs:text-sm md:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed transition-colors duration-200">
          {t("law.introText")}
        </p>
      </div>

      {/* UN Rights List Card */}
      <div
        data-aos="fade-down"
        data-aos-delay={BASE_DELAY}
        className="w-full flex flex-col gap-3 xs:gap-4 md:gap-5 bg-(--color-bg-primary) dark:bg-slate-800/40 drop-shadow-sm/10 p-4 xs:p-5 md:p-6 outline-1 outline-(--color-light3-text)/40 dark:outline-slate-700/60 rounded-md transition-colors duration-200"
      >
        <div className="flex flex-row items-start justify-start gap-2">
          <i className="fa-solid fa-globe text-(--color-primary) text-sm xs:text-base mt-0.5 xs:mt-1 transition-colors duration-200"></i>
          <h1 className="font-medium text-sm xs:text-base md:text-lg text-(--color-dark-text) dark:text-white leading-snug transition-colors duration-200">
            {t("law.unRightsTitle")}
          </h1>
        </div>
        <div className="flex flex-col text-xs xs:text-sm md:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) ml-1 transition-colors duration-200">
          <ul className="list-disc list-outside ml-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 [&>li::marker]:text-(--color-primary)">
            {rights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Country-Specific Legislation Tabs */}
      <div
        className="w-full flex flex-col gap-4 xs:gap-5"
        data-aos="fade-down"
        data-aos-delay={BASE_DELAY + 150}
      >
        <div className="flex flex-row border-b border-(--color-divider) overflow-x-auto overflow-y-hidden no-scrollbar transition-colors duration-200">
          {["greece", "poland", "turkey"].map((country) => (
            <button
              key={country}
              onClick={() => setActiveTab(country)}
              className={`px-3 py-2 xs:px-4 xs:py-2.5 font-medium text-xs xs:text-sm md:text-base transition-colors duration-200 relative cursor-pointer whitespace-nowrap ${
                activeTab === country
                  ? "text-(--color-primary) dark:text-white"
                  : "text-(--color-bg-dark) dark:text-slate-400 hover:text-(--color-primary)/70 dark:hover:text-slate-200"
              }`}
            >
              {t(`law.tabs.${country}`)}
              {activeTab === country && (
                <div className="absolute -bottom-px left-0 w-full h-0.5 bg-(--color-primary)"></div>
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="bg-white dark:bg-slate-800/40 p-4 xs:p-5 md:p-6 rounded-md outline-1 outline-(--color-light3-text)/40 dark:outline-slate-700/60 drop-shadow-sm/5 transition-colors duration-200">
          <div className="flex flex-row items-start gap-2.5 xs:gap-3">
            <i
              className={`fa-solid fa-flag mt-0.5 xs:mt-1 text-sm xs:text-base transition-colors duration-300 shrink-0 ${
                activeTab === "greece"
                  ? "text-blue-600 dark:text-blue-400"
                  : activeTab === "poland"
                    ? "text-red-400 dark:text-red-300"
                    : "text-red-600 dark:text-red-500"
              }`}
            ></i>

            <div className="grid w-full">
              <p
                className={`col-start-1 row-start-1 text-xs xs:text-sm md:text-base text-(--color-dark-text) dark:text-white leading-relaxed transition-all duration-300 ${
                  activeTab === "greece"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                }`}
              >
                {t("law.grLaw")}
              </p>
              <p
                className={`col-start-1 row-start-1 text-xs xs:text-sm md:text-base text-(--color-dark-text) dark:text-white leading-relaxed transition-all duration-300 ${
                  activeTab === "poland"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                }`}
              >
                {t("law.plLaw")}
              </p>
              <p
                className={`col-start-1 row-start-1 text-xs xs:text-sm md:text-base text-(--color-dark-text) dark:text-white leading-relaxed transition-all duration-300 ${
                  activeTab === "turkey"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                }`}
              >
                {t("law.trLaw")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawSection;
