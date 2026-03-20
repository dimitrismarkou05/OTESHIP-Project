import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const MunicipalitySection = () => {
  const { t } = useTranslation("guide");
  const { familyCardsData, munCardsData, proposalsData } = useLanguageData();

  return (
    <section
      className="flex flex-col gap-6 xs:gap-8 md:gap-10 scroll-mt-24 md:scroll-mt-32 w-full transition-colors duration-200"
      id="family_municipality"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-2 xs:gap-3" data-aos="fade-up">
        <div className="flex flex-row items-center justify-start gap-2 xs:gap-2.5">
          <div className="h-1 w-6 xs:w-8 bg-(--color-primary) rounded-full"></div>
          <h1 className="font-semibold text-xl xs:text-2xl md:text-3xl text-(--color-dark-text) dark:text-white leading-tight transition-colors duration-200">
            {t("municipality.title")}
          </h1>
        </div>
        <p className="text-xs xs:text-sm md:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-4xl leading-relaxed transition-colors duration-200">
          {t("municipality.introText")}
        </p>
      </div>

      {/* Two-Column Layout: Family vs Municipality */}
      <div className="flex flex-col lg:flex-row gap-5 xs:gap-6 md:gap-8 w-full items-stretch">
        {/* Family Column */}
        <div
          className="flex-1 flex flex-col gap-3 xs:gap-4 bg-white dark:bg-(--color-dark-text) rounded-md drop-shadow-lg p-5 xs:p-6 md:p-8 border-t-4 border-(--color-primary) transition-colors duration-200"
          data-aos="fade-down"
        >
          <div className="bg-(--color-primary)/20 dark:bg-(--color-primary)/30 w-10 h-10 xs:w-11 xs:h-11 md:w-12 md:h-12 flex items-center justify-center text-(--color-primary) dark:text-(--color-primary2) rounded-md shrink-0 transition-colors duration-200">
            <i className="fa-solid fa-people-roof text-lg xs:text-xl"></i>
          </div>
          <h1 className="font-semibold text-lg xs:text-xl text-(--color-dark-text) dark:text-white mt-1 transition-colors duration-200">
            {t("municipality.familyTitle")}
          </h1>
          <p className="text-xs xs:text-sm md:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed transition-colors duration-200">
            {t("municipality.familyDesc")}
          </p>
          <div className="text-[11px] xs:text-xs md:text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) mt-auto pt-4 xs:pt-6 flex flex-col gap-2.5 xs:gap-3 transition-colors duration-200">
            {familyCardsData?.map((card, index) => (
              <div
                className="flex flex-row items-center justify-start gap-2.5 xs:gap-3"
                key={index}
              >
                <i
                  className={`${card.icon} text-(--color-primary) dark:text-(--color-primary2) w-4 text-center text-xs xs:text-sm transition-colors duration-200`}
                ></i>
                <p className="font-medium">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Municipality Column */}
        <div
          className="flex-1 flex flex-col gap-3 xs:gap-4 bg-white dark:bg-(--color-dark-text) rounded-md drop-shadow-lg p-5 xs:p-6 md:p-8 border-t-4 border-(--color-gold2) transition-colors duration-200"
          data-aos="fade-down"
          data-aos-delay={150}
        >
          <div className="bg-(--color-gold2)/20 dark:bg-(--color-gold2)/30 w-10 h-10 xs:w-11 xs:h-11 md:w-12 md:h-12 flex items-center justify-center text-(--color-gold2) rounded-md shrink-0 transition-colors duration-200">
            <i className="fa-solid fa-city text-lg xs:text-xl"></i>
          </div>
          <h1 className="font-semibold text-lg xs:text-xl text-(--color-dark-text) dark:text-white mt-1 transition-colors duration-200">
            {t("municipality.munTitle")}
          </h1>
          <p className="text-xs xs:text-sm md:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed transition-colors duration-200">
            {t("municipality.munDesc")}
          </p>
          <div className="text-[11px] xs:text-xs md:text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) mt-auto pt-4 xs:pt-6 flex flex-col gap-2.5 xs:gap-3 transition-colors duration-200">
            {munCardsData?.map((card, index) => (
              <div
                className="flex flex-row items-center justify-start gap-2.5 xs:gap-3"
                key={index}
              >
                <i
                  className={`${card.icon} text-(--color-gold2) w-4 text-center text-xs xs:text-sm`}
                ></i>
                <p className="font-medium">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Proposals Section */}
      <div
        className="flex flex-col gap-4 xs:gap-6 mt-2 xs:mt-4 w-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="font-semibold text-lg xs:text-xl text-(--color-dark-text) dark:text-white border-b border-(--color-divider)/50 pb-2 transition-colors duration-200">
          {t("municipality.proposalsTitle")}
        </h2>

        {/* Proposals Grid: Responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-5">
          {proposalsData?.map((proposal, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 xs:gap-3 bg-slate-50 dark:bg-slate-800/40 p-4 xs:p-5 rounded-md border border-(--color-divider)/40 hover:border-(--color-primary)/40 transition-colors duration-200 ${
                index === proposalsData.length - 1 &&
                proposalsData.length % 3 !== 0
                  ? "md:col-span-2 xl:col-span-1"
                  : ""
              }`}
            >
              <div className="flex flex-row items-center gap-2 xs:gap-2.5 text-(--color-primary) dark:text-(--color-primary2) transition-colors duration-200">
                <i className={`${proposal.icon} text-base xs:text-lg`}></i>
                <h3 className="font-semibold text-xs xs:text-sm text-(--color-dark-text) dark:text-white leading-snug transition-colors duration-200">
                  {proposal.title}
                </h3>
              </div>
              <p className="text-[10px] xs:text-[11px] md:text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed transition-colors duration-200">
                {proposal.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MunicipalitySection;
