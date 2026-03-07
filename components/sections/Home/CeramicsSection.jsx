import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import ImageCardSmall from "../../common/ImageCardSmall";

const CeramicsSection = () => {
  const { ceramicsCardsData } = useLanguageData();
  const { t } = useTranslation("home");

  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col items-center gap-6 lg:gap-9 xl:gap-10">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4"
        >
          <h1 className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-(--color-dark-text) dark:text-white">
            {t("ceramics.title")}
          </h1>
          <h1 className="text-sm md:text-base lg:text-[17px] xl:text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-3xl text-center">
            {t("ceramics.description")}
          </h1>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row items-stretch justify-center gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-7xl">
          {ceramicsCardsData.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-1rem)] xl:w-auto xl:flex-1"
            >
              <ImageCardSmall
                to={card.to}
                image={card.image}
                title={card.title}
                description={card.description}
                aosDelay={300 + index * 150}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CeramicsSection;
