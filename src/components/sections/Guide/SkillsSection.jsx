import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const SkillsSection = () => {
  const { t } = useTranslation("guide");
  const { skillsData } = useLanguageData();
  const firstSkillRef = useRef(null);

  // Tab state: 'greece', 'poland', or 'turkey'
  const [activeTab, setActiveTab] = useState("greece");

  return (
    <section
      className="relative flex flex-col bg-(--color-dark-text) items-start gap-6 xs:gap-8 scroll-mt-24 md:scroll-mt-32 drop-shadow-lg rounded-md p-5 xs:p-6 md:p-8 lg:p-10 overflow-hidden w-full"
      id="skills"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 xs:w-80 xs:h-80 md:w-96 md:h-96 bg-(--color-primary) rounded-full blur-3xl opacity-20 -mr-20 -mt-20 pointer-events-none"></div>

      {/* Header Section */}
      <div
        className="flex flex-col gap-2 xs:gap-3 relative z-10"
        data-aos="fade-up"
      >
        <h1 className="font-semibold text-xl xs:text-2xl md:text-3xl text-white leading-tight">
          {t("skills.title")}
        </h1>
        <p className="text-xs xs:text-sm md:text-base text-(--color-light3-text) max-w-3xl leading-relaxed">
          {t("skills.introText")}
        </p>
      </div>

      {/* Country Tabs */}
      <div
        className="flex flex-row gap-1 xs:gap-2 border-b border-slate-700 w-full relative z-10 overflow-x-auto overflow-y-hidden no-scrollbar"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {["greece", "poland", "turkey"].map((country) => (
          <button
            key={country}
            onClick={() => setActiveTab(country)}
            className={`cursor-pointer px-3 py-2 xs:px-5 xs:py-2.5 font-medium text-xs xs:text-sm transition-all duration-300 relative whitespace-nowrap ${
              activeTab === country
                ? "text-white"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {t(`skills.tabs.${country}`)}
            {activeTab === country && (
              <div className="absolute -bottom-px left-0 w-full h-0.5 bg-(--color-primary) shadow-[0_0_8px_var(--color-primary)]"></div>
            )}
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className="grid w-full relative z-10 mt-2 min-h-75">
        {["greece", "poland", "turkey"].map((country) => (
          <div
            key={country}
            className={`col-start-1 row-start-1 flex flex-col gap-5 xs:gap-6 ${
              activeTab === country
                ? "opacity-100 visible z-10"
                : "opacity-0 invisible pointer-events-none z-0"
            }`}
          >
            {skillsData[country]?.map((item, index) => (
              <React.Fragment key={`${country}-${index}`}>
                <div
                  className={`flex flex-col gap-3 xs:gap-4 ${activeTab === country ? "animate-fade-in" : ""}`}
                  ref={
                    index === 0 && country === activeTab ? firstSkillRef : null
                  }
                >
                  <div className="flex flex-row gap-3 xs:gap-4 md:gap-5 items-start">
                    {/* Number Circle */}
                    <div className="flex items-center justify-center bg-slate-800 rounded-full w-8 h-8 xs:w-9 xs:h-9 md:w-10 md:h-10 shrink-0 outline-1 outline-slate-600 drop-shadow-md mt-0.5">
                      <p className="font-semibold text-xs xs:text-sm md:text-base text-(--color-gold2)">
                        {item.order}
                      </p>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col items-start gap-1 xs:gap-1.5 mt-1">
                      <h1 className="font-semibold text-sm xs:text-base md:text-lg text-white leading-snug">
                        {item.title}
                      </h1>
                      <p className="text-[11px] xs:text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed max-w-4xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider - ML scales with icon size */}
                  {index < skillsData[country].length - 1 && (
                    <div className="border-t border-slate-700/60 mt-1 xs:mt-2 ml-11 xs:ml-13 md:ml-15"></div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      {/* Simple fade-in animation for tab switching */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />
    </section>
  );
};

export default SkillsSection;
