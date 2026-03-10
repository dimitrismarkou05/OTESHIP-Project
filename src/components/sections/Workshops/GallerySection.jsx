import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { loadWorkshopImages } from "../../../data/Workshops/workshopImages";

const GallerySection = () => {
  const { t } = useTranslation("workshops");
  const [randomImages, setRandomImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- Carousel States ---
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // --- Touch Tracking States ---
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);

  const minSwipeDistance = 30;
  const totalCards = randomImages.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage) || 1;

  // Fetch images
  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true);
        const images = await loadWorkshopImages();
        const imageUrls = images.map((img) => img.src);
        const shuffled = [...imageUrls].sort(() => 0.5 - Math.random());
        // Load 6 images instead of 3
        setRandomImages(shuffled.slice(0, 6));
      } catch (error) {
        console.error("Failed to load workshop images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  // Update cards per page based on window width
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

  // Reset page if bounds change
  useEffect(() => {
    if (totalCards > 0 && currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [cardsPerPage, currentPage, totalPages, totalCards]);

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
    if (!touchStartX || !touchEndX || !touchStartY || !touchEndY) return;

    const distanceX = touchStartX - touchEndX;
    const distanceY = touchStartY - touchEndY;

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

  if (isLoading) {
    return (
      <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
        <div className="flex justify-center items-center min-h-100 max-w-7xl mx-auto">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div
        className="flex flex-col justify-between items-start gap-2 md:gap-3 lg:gap-4 xl:gap-6 max-w-7xl mx-auto w-full"
        data-aos="fade-up"
      >
        <h1 className="font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl text-(--color-dark-text) dark:text-white text-center">
          {t("gallery.title")}
        </h1>
        <div className="flex flex-col md:flex-row w-full items-start md:items-end gap-4 xs:gap-5 md:gap-6 justify-between">
          <p className="text-sm md:text-base xl:text-lg text-(--color-bg-dark) dark:text-(--color-bg-primary)">
            {t("gallery.description")}
          </p>

          <div
            className="text-start md:text-center h-fit mt-2 xs:mt-0"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <Link
              to="/gallery"
              className="text-(--color-primary) text-xs md:text-sm font-semibold no-underline whitespace-nowrap inline-flex items-center justify-center hover-anim"
              style={{ "--hover-color": "var(--color-primary)" }}
            >
              {t("gallery.viewMore")}
            </Link>
          </div>
        </div>

        {/* --- Carousel Implementation --- */}
        <div className="w-full">
          <div
            className="grid gap-4 md:gap-5 lg:gap-6 transition-all duration-300 w-full touch-pan-y"
            style={{
              gridTemplateColumns: `repeat(${cardsPerPage}, minmax(0, 1fr))`,
            }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {randomImages.map((image, index) => (
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
                <Link
                  to="/gallery"
                  className="block w-full h-64 overflow-hidden inset-0 rounded-md drop-shadow-md"
                  data-aos="fade-down"
                  data-aos-delay={300 + index * 150}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-400 ease-in-out hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${image}`);
                      e.target.style.display = "none";
                      e.target.parentElement.style.backgroundColor = "#e5e7eb";
                      e.target.parentElement.innerHTML =
                        '<div class="flex items-center justify-center h-full text-gray-400">Image not available</div>';
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
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
    </section>
  );
};

export default GallerySection;
