import React from "react";
import WorkshopCardBig from "../../common/WorkshopCardBig";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import SectionHeader from "../../common/SectionHeader";

const AboutSection = () => {
  const { t } = useTranslation("workshops");
  const { workshopData } = useLanguageData();
  return (
    <section
      className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200 scroll-mt-8"
      id="workshops"
    >
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10 max-w-7xl mx-auto">
        <SectionHeader title={t("about.title")} />
        <div
          className="flex flex-col gap-8 lg:gap-10 xl:gap-12"
          data-aos-delay="300"
        >
          {workshopData.map((school, index) => (
            <WorkshopCardBig
              key={index}
              image={school.image}
              title={school.title}
              description={school.description}
              outcomes={school.outcomes}
              imagePosition={index % 2 === 0 ? "left" : "right"}
              aosDelay={index === 0 ? 1100 : 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
