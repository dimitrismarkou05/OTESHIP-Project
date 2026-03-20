import React from "react";

const LawSkeleton = () => {
  return (
    <section className="flex flex-col items-start gap-6 xs:gap-8 md:gap-10 scroll-mt-24 md:scroll-mt-32 bg-white dark:bg-(--color-dark-text) drop-shadow-lg rounded-md p-5 xs:p-6 md:p-8 lg:p-10 transition-colors duration-200 w-full">
      {/* Intro & UN Rights Title */}
      <div className="flex flex-col gap-4 xs:gap-5 md:gap-6 w-full">
        <div className="flex flex-row items-start justify-start gap-2 xs:gap-2.5">
          <div className="w-8 h-8 xs:w-10 xs:h-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse shrink-0 mt-0.5 xs:mt-1 md:mt-1.5"></div>
          <div className="h-7 md:h-8 lg:h-9 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mt-0.5"></div>
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="w-11/12 h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="w-4/5 h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        </div>
      </div>

      {/* UN Rights List Card */}
      <div className="w-full flex flex-col gap-3 xs:gap-4 md:gap-5 bg-gray-50 dark:bg-gray-800/40 drop-shadow-sm/10 p-4 xs:p-5 md:p-6 outline-1 outline-gray-200 dark:outline-gray-700/60 rounded-md">
        <div className="flex flex-row items-start justify-start gap-2">
          <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse shrink-0 mt-0.5 xs:mt-1"></div>
          <div className="h-5 md:h-6 w-56 md:w-72 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
        <div className="ml-1 w-full mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-4 w-full">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="flex flex-row items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full shrink-0"></div>
                <div className="h-3 md:h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Country-Specific Legislation Tabs */}
      <div className="w-full flex flex-col gap-4 xs:gap-5">
        <div className="flex flex-row border-b border-gray-200 dark:border-gray-700 overflow-hidden w-full">
          {[0, 1, 2].map((i) => (
            <div key={i} className="px-3 py-2 xs:px-4 xs:py-2.5">
              <div className="w-16 md:w-20 h-4 md:h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="bg-white dark:bg-gray-800/40 p-4 xs:p-5 md:p-6 rounded-md outline-1 outline-gray-200 dark:outline-gray-700/60 drop-shadow-sm/5 w-full">
          <div className="flex flex-row items-start gap-2.5 xs:gap-3 w-full">
            <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse shrink-0 mt-0.5 xs:mt-1"></div>
            <div className="flex flex-col gap-1.5 w-full mt-0.5">
              <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
              <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
              <div className="w-[85%] h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawSkeleton;
