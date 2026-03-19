import React from "react";

const AboutSkeleton = () => {
  return (
    <section className="bg-(--color-bg-primary) dark:bg-(--color-bg-dark) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200">
      <div className="flex flex-col justify-between items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-5 lg:gap-6 xl:gap-8 w-full max-w-7xl">
          {/* Left Side: Text Content Skeleton */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-7 xl:gap-8 justify-evenly flex-1 w-full">
            {/* Title */}
            <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>

            {/* Paragraphs Simulation */}
            {[0, 1, 2].map((pIndex) => (
              <div
                key={pIndex}
                className="flex flex-col gap-1.5 md:gap-2 w-full"
              >
                <div className="h-4 md:h-5 xl:h-6 w-full bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                <div className="h-4 md:h-5 xl:h-6 w-[95%] bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                <div className="h-4 md:h-5 xl:h-6 w-11/12 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                <div className="h-4 md:h-5 xl:h-6 w-3/4 max-w-md bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Right Side: Image Placeholder matches AboutSection's aspect ratios */}
          <div className="relative rounded-md w-full max-w-lg md:max-w-xl mx-auto lg:mx-0 lg:max-w-100 block overflow-hidden shrink-0 aspect-3/2 xs:aspect-video lg:aspect-auto bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;
