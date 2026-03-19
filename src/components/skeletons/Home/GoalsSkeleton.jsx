import React from "react";

const GoalsSkeleton = () => {
  return (
    <section className="bg-white dark:bg-(--color-dark-text) p-8 xs:p-10 md:p-15 lg:p-16 xl:p-20 transition-colors duration-200 w-full overflow-hidden">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-9 xl:gap-10">
        {/* Section Header Skeleton */}
        <div className="flex flex-col justify-center items-center gap-1 md:gap-2 lg:gap-3 xl:gap-4 w-full">
          <div className="h-7 md:h-8 lg:h-9 xl:h-10 w-48 md:w-64 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse"></div>

          <div className="flex flex-col items-center gap-1 w-full max-w-3xl">
            <div className="h-4 md:h-5 xl:h-6 w-[90%] max-w-lg bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
            <div className="h-4 md:h-5 xl:h-6 w-4/5 max-w-md bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
            <div className="h-4 md:h-5 xl:h-6 w-2/3 max-w-sm bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse block sm:hidden"></div>
          </div>
        </div>

        {/* Main Content Layout Container */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 xs:gap-4 md:gap-5 lg:gap-6 xl:gap-8 max-w-7xl sm:max-w-lg md:max-w-7xl w-full">
          {/* Left Side: Goals List */}
          <div className="flex flex-col justify-evenly flex-1 gap-4 md:gap-6 lg:gap-7 xl:gap-8 w-full">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="flex gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4"
              >
                <div className="bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center size-6 md:size-7 lg:size-7.5 xl:size-8 shrink-0 animate-pulse"></div>

                <div className="flex flex-col gap-1.5 w-full">
                  <div className="h-5 md:h-6 lg:h-7 w-1/2 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>

                  <div className="flex flex-col gap-1 w-full">
                    <div className="h-3 md:h-4 lg:h-5 w-full bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
                    <div className="h-3 md:h-4 lg:h-5 w-11/12 bg-gray-200 dark:bg-gray-800 rounded-sm animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: ImageCard Component */}
          <div className="flex-1 w-full">
            <div className="transition-colors duration-200 flex flex-col p-3 xs:p-3.5 md:p-4 xl:p-5 bg-(--color-bg-primary) dark:bg-(--color-bg-dark) rounded-md gap-3.5 md:gap-4 lg:gap-4.5 drop-shadow-sm flex-1 h-full">
              {/* Image Box Placeholder updated to match the responsive aspect ratio */}
              <div className="relative block w-full rounded-md overflow-hidden aspect-4/3 xs:aspect-video max-h-72 bg-gray-200 dark:bg-gray-700 animate-pulse shrink-0"></div>

              {/* Text Box Placeholder */}
              <div className="flex flex-col items-start justify-center gap-1.5 xs:gap-2 md:gap-2.5 w-full">
                <div className="h-5 md:h-6 lg:h-7 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>

                <div className="flex flex-col gap-1 w-full">
                  <div className="h-3 md:h-4 lg:h-5 w-full bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  <div className="h-3 md:h-4 lg:h-5 w-11/12 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  <div className="h-3 md:h-4 lg:h-5 w-4/5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse block sm:hidden md:block lg:hidden xl:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSkeleton;
