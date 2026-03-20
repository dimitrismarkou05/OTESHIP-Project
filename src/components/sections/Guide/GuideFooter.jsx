import React from "react";
import { useTranslation } from "react-i18next";

const GuideFooter = () => {
  const { t } = useTranslation("guide");

  return (
    <footer
      className="mb-8 xs:mb-10 md:mb-12 flex flex-col items-center gap-6 xs:gap-8 w-full transition-colors duration-200"
      data-aos="fade-up"
    >
      {/* Concluding Thought / "The End" */}
      <div className="flex flex-col items-center text-center gap-2.5 xs:gap-3 bg-(--color-bg-primary) dark:bg-slate-800/30 p-6 xs:p-7 md:p-8 rounded-md border border-(--color-divider)/40 w-full max-w-4xl relative overflow-hidden transition-colors duration-200">
        <i className="fa-solid fa-quote-left absolute -left-2 -top-2 text-5xl xs:text-6xl text-(--color-primary)/5 pointer-events-none transition-colors duration-200"></i>

        <h2 className="font-semibold text-base xs:text-lg text-(--color-primary) leading-tight transition-colors duration-200">
          {t("footer.conclusionTitle")}
        </h2>
        <p className="text-xs xs:text-sm text-(--color-bg-dark) dark:text-(--color-bg-primary) leading-relaxed max-w-2xl italic transition-colors duration-200">
          {t("footer.conclusionText")}
        </p>
      </div>

      {/* Official Project Footer */}
      <div className="border-t border-(--color-divider)/40 pt-5 xs:pt-6 w-full text-center text-[10px] xs:text-xs text-(--color-bg-dark) dark:text-(--color-bg-primary) flex flex-col gap-1 xs:gap-1.5 opacity-80 transition-colors duration-200">
        <p className="font-medium leading-relaxed">{t("footer.text")}</p>
        <p
          className="leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t("footer.copyright") }}
        />
      </div>
    </footer>
  );
};

export default GuideFooter;
