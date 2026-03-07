import React from "react";
import FeatureCard from "../../common/FeatureCard";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";

const AboutSection = () => {
  const { featureCardsData } = useLanguageData();
  const { t } = useTranslation("home");

  return (
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-4 xs:gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-col justify-center items-center gap-0.5 xs:gap-1 md:gap-2 lg:gap-3 xl:gap-4"
        >
          <h1 className="font-bold text-base xs:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-(--color-dark-text) dark:text-white">
            {t("about.title")}
          </h1>
          <h1 className="text-xs xs:text-sm md:text-base xl:text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-3xl text-center">
            {t("about.description")}
          </h1>
        </div>

        {/* The 4-column math trick happens right here */}
        <div className="grid grid-cols-1 xs:grid-cols-4 md:grid-cols-3 gap-3 xs:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-7xl w-full mx-auto auto-rows-fr">
          {featureCardsData.map((card, index) => (
            <div
              key={index}
              className={`w-full flex justify-center h-full ${
                index === 2
                  ? // Card 3: Spans 2 cols & starts at col 2 on mobile, resets to normal on desktop
                    "xs:col-span-2 xs:col-start-2 md:col-span-1 md:col-start-auto"
                  : // Cards 1 & 2: Span 2 cols on mobile, 1 col on desktop
                    "xs:col-span-2 md:col-span-1"
              }`}
            >
              <FeatureCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                to={card.to}
                aosDelay={1100 + index * 150}
                index={index}
                className="w-full max-w-sm h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
