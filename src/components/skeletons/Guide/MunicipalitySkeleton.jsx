import React from "react";

const FeatureListSkeleton = () => (
  <div className="mt-auto pt-4 xs:pt-6 flex flex-col gap-2.5 xs:gap-3 w-full">
    {[0, 1, 2, 3].map((i) => (
      <div
        key={i}
        className="flex flex-row items-center justify-start gap-2.5 xs:gap-3"
      >
        <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full shrink-0 animate-pulse"></div>
        <div className="h-3 md:h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
      </div>
    ))}
  </div>
);

const MunicipalitySkeleton = () => {
  return (
    <section className="flex flex-col gap-6 xs:gap-8 md:gap-10 scroll-mt-24 md:scroll-mt-32 w-full transition-colors duration-200">
      {/* Header Section */}
      <div className="flex flex-col gap-2 xs:gap-3 w-full">
        <div className="flex flex-row items-center justify-start gap-2 xs:gap-2.5">
          <div className="h-1 w-6 xs:w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse shrink-0"></div>
          <div className="h-6 xs:h-7 md:h-8 lg:h-9 w-56 md:w-72 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-1.5 w-full max-w-4xl mt-1">
          <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="w-[85%] h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="flex flex-col lg:flex-row gap-5 xs:gap-6 md:gap-8 w-full items-stretch">
        {/* Family Column */}
        <div className="flex-1 flex flex-col gap-3 xs:gap-4 bg-white dark:bg-(--color-dark-text) rounded-md drop-shadow-lg p-5 xs:p-6 md:p-8 border-t-4 border-gray-300 dark:border-gray-700">
          <div className="w-10 h-10 xs:w-11 xs:h-11 md:w-12 md:h-12 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0 animate-pulse"></div>
          <div className="h-5 md:h-6 lg:h-7 w-32 md:w-40 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mt-1"></div>
          <div className="flex flex-col gap-1.5 w-full mt-1">
            <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
            <div className="w-[90%] h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
            <div className="w-3/4 h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          </div>
          <FeatureListSkeleton />
        </div>

        {/* Municipality Column */}
        <div className="flex-1 flex flex-col gap-3 xs:gap-4 bg-white dark:bg-(--color-dark-text) rounded-md drop-shadow-lg p-5 xs:p-6 md:p-8 border-t-4 border-gray-300 dark:border-gray-700">
          <div className="w-10 h-10 xs:w-11 xs:h-11 md:w-12 md:h-12 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0 animate-pulse"></div>
          <div className="h-5 md:h-6 lg:h-7 w-40 md:w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mt-1"></div>
          <div className="flex flex-col gap-1.5 w-full mt-1">
            <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
            <div className="w-[90%] h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
            <div className="w-3/4 h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          </div>
          <FeatureListSkeleton />
        </div>
      </div>

      {/* Our Proposals Section */}
      <div className="flex flex-col gap-4 xs:gap-6 mt-2 xs:mt-4 w-full">
        <div className="border-b border-gray-200 dark:border-gray-700/50 pb-2 w-full">
          <div className="h-5 md:h-6 lg:h-7 w-32 md:w-40 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-5 w-full">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="flex flex-col gap-2 xs:gap-3 bg-gray-50 dark:bg-gray-800/40 p-4 xs:p-5 rounded-md border border-gray-200 dark:border-gray-700/40"
            >
              <div className="flex flex-row items-center gap-2 xs:gap-2.5">
                <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0 animate-pulse"></div>
                <div className="h-4 md:h-5 w-24 md:w-32 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
              </div>
              <div className="flex flex-col gap-1.5 w-full mt-1">
                <div className="w-full h-2.5 xs:h-3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                <div className="w-[85%] h-2.5 xs:h-3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MunicipalitySkeleton;
