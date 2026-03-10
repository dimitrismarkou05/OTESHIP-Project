import React, { useState, useEffect } from "react";
import ImageCardSmall from "../../common/ImageCardSmall";
import { useTranslation } from "react-i18next";
import { useLanguageData } from "../../../hooks/useLanguageData";
import SectionHeader from "../../common/SectionHeader";

const ProcessSection = () => {
  const { t } = useTranslation("about");
  const { processCardsData } = useLanguageData();
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // --- Touch Tracking States ---
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);

  // Lowered to 30 to make it very sensitive to quick flicks
  const minSwipeDistance = 30;

  // We know there are exactly 6 cards
  const totalCards = 6;

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerPage(1);
      } else if (width < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(totalCards / cardsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [cardsPerPage, currentPage, totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  // --- Touch Handlers ---
  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchEndY(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    // If we don't have all coordinates, do nothing
    if (!touchStartX || !touchEndX || !touchStartY || !touchEndY) return;

    const distanceX = touchStartX - touchEndX;
    const distanceY = touchStartY - touchEndY;

    // If the vertical drag was greater than the horizontal drag,
    // the user is just scrolling the page. Ignore the carousel swipe.
    if (Math.abs(distanceY) > Math.abs(distanceX)) {
      return;
    }

    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;

    if (isLeftSwipe && currentPage < totalPages - 1) {
      handleNext();
    }
    if (isRightSwipe && currentPage > 0) {
      handlePrev();
    }
  };

  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-7 xl:gap-8 w-full max-w-7xl">
          <SectionHeader title={t("process.title")} />

          <div className="w-full">
            {/* Added touch-pan-y here to lock vertical scroll during horizontal swipes */}
            <div
              className="grid gap-4 md:gap-5 lg:gap-6 transition-all duration-300 w-full touch-pan-y"
              style={{
                gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {processCardsData.map((card, index) => (
                <div
                  key={index}
                  className={`w-full h-full flex flex-col transition-all duration-300 ${
                    index >= currentPage * cardsPerPage &&
                    index < (currentPage + 1) * cardsPerPage
                      ? "opacity-100 visible"
                      : "opacity-0 invisible h-0 overflow-hidden"
                  }`}
                  style={{
                    gridRow: "1",
                    gridColumn: `${(index % cardsPerPage) + 1} / span 1`,
                  }}
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

            {/* Navigation */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-4 mt-8 md:mt-10 lg:mt-12">
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`h-2 rounded-full transition-all ${
                        currentPage === index
                          ? "w-6 bg-blue-600"
                          : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    className={`p-2 rounded-full bg-white dark:bg-(--color-dark2-text) shadow-md transition-all ${
                      currentPage === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:scale-110 cursor-pointer"
                    }`}
                    aria-label="Previous page"
                  >
                    <svg
                      className="w-5 h-5 text-gray-800 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}
                    className={`p-2 rounded-full bg-white dark:bg-(--color-dark2-text) shadow-md transition-all ${
                      currentPage === totalPages - 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:scale-110 cursor-pointer"
                    }`}
                    aria-label="Next page"
                  >
                    <svg
                      className="w-5 h-5 text-gray-800 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
