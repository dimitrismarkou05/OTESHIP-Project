import React from "react";
import { useTranslation } from "react-i18next";

const WorkshopCardBig = ({
  image,
  title,
  description,
  outcomes,
  imagePosition = "left", // 'left' or 'right'
  aosDelay,
}) => {
  const { t } = useTranslation("workshops");

  return (
    <div
      className={`flex flex-col md:flex-row items-stretch justify-between w-full flex-1 gap-5 md:gap-6 lg:gap-7 xl:gap-8 sm:max-w-lg mx-none sm:mx-auto md:mx-none md:max-w-none ${
        imagePosition === "right" ? "md:flex-row-reverse" : ""
      }`}
      data-aos={imagePosition === "right" ? "fade-left" : "fade-right"}
      data-aos-delay={aosDelay}
    >
      <div className="w-full md:w-[45%] flex aspect-video md:aspect-auto max-h-56 sm:max-h-64 md:max-h-none overflow-hidden rounded-md shrink-0">
        <img
          src={image}
          alt="Hands-On Learning"
          className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-105 lg:max-h-80 lg:min-h-full"
        />
      </div>

      <div className="flex flex-col justify-start items-start flex-1 gap-2 xs:gap-3 md:gap-3.5">
        <div className="flex flex-col justify-center items-start gap-2 xs:gap-2.5 md:gap-3 w-full">
          <h1 className="text-sm md:text-base lg:text-lg font-bold text-(--color-dark-text) dark:text-white w-full line-clamp-2">
            {title}
          </h1>
        </div>

        <p className="w-full text-start text-xs md:text-sm lg:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary) max-w-3xl">
          {description}
        </p>

        {/* Reverted layout structure for the key outcomes div */}
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-xs md:text-sm lg:text-base font-semibold text-(--color-primary) dark:text-(--color-primary2) uppercase">
            {t("workshopCardBig.keyOutcomes")}
          </h1>
          <div className="flex flex-col items-start gap-2">
            {outcomes &&
              outcomes.map((outcome, index) => (
                <p
                  key={index}
                  className="text-xs md:text-sm lg:text-base text-(--color-bg-dark) dark:text-(--color-bg-primary)"
                >
                  {index + 1}. {outcome}
                </p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCardBig;
