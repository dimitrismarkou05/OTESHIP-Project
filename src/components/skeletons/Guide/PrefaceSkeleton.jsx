import React from "react";

const PrefaceSkeleton = () => {
  return (
    <section className="flex flex-col items-start gap-4 xs:gap-5 md:gap-6 scroll-mt-20 md:scroll-mt-30 w-full transition-colors duration-200">
      {/* Title Header */}
      <div className="flex flex-row items-center justify-center gap-2 xs:gap-2.5">
        <div className="h-1 w-6 xs:w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse shrink-0"></div>
        <div className="h-6 xs:h-8 md:h-9 w-40 md:w-56 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>

      <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-center xl:justify-between gap-6 xs:gap-8 md:gap-10 xl:gap-12 w-full">
        {/* Left Content: Text */}
        <div className="flex flex-col gap-4 md:gap-6 flex-1 w-full">
          <div className="flex flex-col items-start gap-1.5 xs:gap-2 w-full">
            {/* Paragraph 1 */}
            <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse mb-0.5"></div>
            <div className="w-11/12 h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse mb-0.5"></div>
            <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse mb-3 xs:mb-4"></div>

            {/* Paragraph 2 */}
            <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse mb-0.5"></div>
            <div className="w-[95%] h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse mb-3 xs:mb-4"></div>

            {/* Bodies Title */}
            <div className="h-4 xs:h-5 md:h-6 w-32 md:w-48 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse mt-1 xs:mt-2 mb-1 xs:mb-2"></div>

            {/* Bodies List */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-row items-center justify-start gap-2 xs:gap-2.5 pt-1 w-full"
              >
                <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse shrink-0"></div>
                <div className="h-3 md:h-4 w-3/4 md:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content: Image Placeholder */}
        <div className="relative rounded-md w-full max-w-lg md:max-w-xl mx-auto xl:mx-0 xl:w-2/5 shrink-0 block overflow-hidden drop-shadow-lg h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-auto xl:self-stretch bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      </div>
    </section>
  );
};

export default PrefaceSkeleton;
