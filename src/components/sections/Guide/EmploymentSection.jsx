import React, { useState } from "react";
import { useLanguageData } from "../../../hooks/useLanguageData";
import { useTranslation } from "react-i18next";

const EmploymentSection = () => {
  const BASE_DELAY = 300;
  const { successCardsData } = useLanguageData();
  const { t } = useTranslation("guide");

  const prSteps = t("employment.prSteps", { returnObjects: true });
  const frBenefits = t("employment.frBenefits", { returnObjects: true });

  const [animatedCard, setAnimatedCard] = useState(null);

  const handleCardAnimation = (cardId) => {
    setAnimatedCard(cardId);
    setTimeout(() => {
      setAnimatedCard(null);
    }, 700);
  };

  React.useEffect(() => {
    window.animateEmploymentCard = handleCardAnimation;
    return () => {
      delete window.animateEmploymentCard;
    };
  }, []);

  const getCardClass = (cardId) => {
    const baseClass =
      "bg-white dark:bg-(--color-dark-text) rounded-md drop-shadow-lg p-4 xs:p-5 md:p-6 w-full h-full flex flex-col gap-3 xs:gap-4 [transition:background-color_200ms,box-shadow_350ms,transform_350ms] ease-in-out ring-2";

    return animatedCard === cardId
      ? `${baseClass} ring-(--color-primary)/60`
      : `${baseClass} ring-transparent`;
  };

  return (
    <section
      id="employment"
      className="flex flex-col items-start gap-5 xs:gap-6 md:gap-8 scroll-mt-24 md:scroll-mt-30 w-full transition-colors duration-200"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-2 xs:gap-3" data-aos="fade-up">
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="h-1 w-6 xs:w-8 bg-(--color-primary) rounded-full"></div>
          <h1 className="font-semibold text-lg xs:text-xl md:text-2xl text-(--color-dark-text) dark:text-white leading-tight transition-colors duration-200">
            {t("employment.title")}
          </h1>
        </div>
        <p className="text-xs xs:text-sm md:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-4xl leading-relaxed transition-colors duration-200">
          {t("employment.introText")}
        </p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-4 xs:gap-5 md:gap-6 items-stretch">
        {/* PUBLIC SECTOR */}
        <div data-aos="fade-down" data-aos-delay={BASE_DELAY}>
          <div
            className={`${getCardClass("public")} relative overflow-hidden`}
            id="public_sector"
          >
            <i className="fa-solid fa-building-columns absolute -left-3 -bottom-3 text-6xl xs:text-7xl md:text-8xl text-(--color-primary)/5 pointer-events-none z-0"></i>
            <div className="bg-(--color-primary)/20 dark:bg-(--color-primary)/30 w-9 h-9 xs:w-10 xs:h-10 flex items-center justify-center text-(--color-primary) dark:text-(--color-primary2) rounded-md shrink-0 relative z-10 transition-colors duration-200">
              <i className="fa-solid fa-building-columns text-base xs:text-lg"></i>
            </div>
            <h1 className="font-semibold text-base xs:text-lg text-(--color-dark-text) dark:text-white relative z-10 transition-colors duration-200">
              {t("employment.puTitle")}
            </h1>
            <p className="text-xs xs:text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed relative z-10 transition-colors duration-200">
              {t("employment.puDesc")}
            </p>
          </div>
        </div>

        {/* PRIVATE SECTOR */}
        <div data-aos="fade-down" data-aos-delay={BASE_DELAY + 150}>
          <div className={getCardClass("private")} id="private_sector">
            <div className="bg-(--color-gold)/10 w-9 h-9 xs:w-10 xs:h-10 flex items-center justify-center text-(--color-gold) rounded-md shrink-0 transition-colors duration-200">
              <i className="fa-solid fa-briefcase text-base xs:text-lg"></i>
            </div>
            <h1 className="font-semibold text-base xs:text-lg text-(--color-dark-text) dark:text-white transition-colors duration-200">
              {t("employment.prTitle")}
            </h1>
            <p className="text-xs xs:text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed transition-colors duration-200">
              {t("employment.prDesc")}
            </p>

            <div className="flex flex-col gap-1.5 mt-auto pt-2">
              <h2 className="font-medium text-xs xs:text-sm text-(--color-dark-text) dark:text-white transition-colors duration-200">
                {t("employment.prSubtitle")}
              </h2>
              <ol className="list-decimal list-inside text-[10px] xs:text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary) bg-(--color-bg-primary) dark:bg-slate-800/40 drop-shadow-sm/10 p-2.5 xs:p-3 outline-1 outline-(--color-light3-text)/40 rounded-md leading-relaxed transition-colors duration-200">
                {prSteps.map((item, index) => (
                  <li key={index} className="mb-1 last:mb-0">
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* SELF-EMPLOYMENT */}
        <div data-aos="fade-down" data-aos-delay={BASE_DELAY + 300}>
          <div className={getCardClass("freelance")} id="freelancing">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 w-9 h-9 xs:w-10 xs:h-10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 rounded-md shrink-0 transition-colors duration-200">
              <i className="fa-solid fa-user-tie text-base xs:text-lg"></i>
            </div>
            <h1 className="font-semibold text-base xs:text-lg text-(--color-dark-text) dark:text-white transition-colors duration-200">
              {t("employment.frTitle")}
            </h1>
            <p className="text-xs xs:text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed transition-colors duration-200">
              {t("employment.frDesc")}
            </p>

            <div className="flex flex-col gap-2 mt-auto pt-2">
              <h2 className="font-medium text-xs xs:text-sm text-(--color-dark-text) dark:text-white transition-colors duration-200">
                {t("employment.frBenefitsTitle")}
              </h2>
              <ul className="flex flex-col gap-1.5 text-[10px] xs:text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary) bg-(--color-bg-primary) dark:bg-slate-800/40 drop-shadow-sm/10 p-2.5 xs:p-3 outline-1 outline-(--color-light3-text)/40 rounded-md transition-colors duration-200">
                {frBenefits.map((item, index) => (
                  <li key={index} className="flex flex-row items-start gap-1.5">
                    <i className="fa-solid fa-check text-emerald-500 mt-0.5 shrink-0"></i>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH: Personal Assistant Box */}
      <div
        className="w-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 p-4 xs:p-5 md:p-6 rounded-md flex flex-col md:flex-row items-start md:items-center gap-3 xs:gap-4 md:gap-5 relative overflow-hidden transition-colors duration-200"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <i className="fa-solid fa-handshake-angle absolute -right-3 -bottom-3 text-6xl xs:text-7xl text-blue-500/10 dark:text-blue-400/10 pointer-events-none"></i>
        <div className="bg-blue-100 dark:bg-blue-800/40 w-9 h-9 xs:w-10 xs:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200">
          <i className="fa-solid fa-people-arrows text-base xs:text-lg text-blue-700 dark:text-blue-400"></i>
        </div>
        <div className="flex flex-col gap-0.5 xs:gap-1 z-2">
          <h2 className="font-medium text-sm xs:text-base text-blue-800 dark:text-blue-300 transition-colors duration-200">
            {t("employment.personalAssistantTitle")}
          </h2>
          <p className="text-xs xs:text-sm text-blue-900/80 dark:text-blue-200/80 leading-relaxed transition-colors duration-200">
            {t("employment.personalAssistantDesc")}
          </p>
        </div>
      </div>

      {/* Success Examples */}
      <div
        className="w-full flex flex-col gap-3 xs:gap-4 mt-2"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h2 className="font-semibold text-base xs:text-lg text-(--color-dark-text) dark:text-white border-b border-(--color-divider)/50 pb-1.5 transition-colors duration-200">
          {t("employment.successTitle")}
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-3">
          {successCardsData?.map((card, index) => (
            <div
              key={index}
              className="flex flex-row gap-2.5 items-start bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-md border border-(--color-divider)/30 hover:border-(--color-primary)/40 transition-colors duration-200"
            >
              <div className="bg-(--color-secondary)/15 w-8 h-8 xs:w-9 xs:h-9 flex items-center justify-center text-(--color-secondary) rounded-md shrink-0 transition-colors duration-200">
                <i className={`${card.icon} text-sm xs:text-base`} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[11px] xs:text-xs font-semibold text-(--color-dark-text) dark:text-white transition-colors duration-200">
                  {card.title}
                </h1>
                <p className="text-[10px] xs:text-[11px] leading-relaxed text-(--color-bg-dark) dark:text-(--color-bg-primary) mt-0.5 transition-colors duration-200">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmploymentSection;
