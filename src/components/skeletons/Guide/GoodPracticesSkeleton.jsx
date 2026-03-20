import React from "react";

const GoodPracticesSkeleton = () => {
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
          <div className="w-4/5 h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        </div>
      </div>

      {/* Main Content Area: Tabs + Cards */}
      <div className="flex flex-col gap-4 xs:gap-5 md:gap-6 w-full bg-white dark:bg-(--color-dark-text) drop-shadow-lg rounded-md p-5 xs:p-6 md:p-8 transition-colors duration-200">
        {/* Tab Navigation */}
        <div className="flex flex-row border-b border-gray-200 dark:border-gray-700/50 w-full overflow-hidden">
          {[0, 1, 2].map((i) => (
            <div key={i} className="px-3 py-2 xs:px-5 xs:py-2.5">
              <div className="w-16 md:w-20 h-4 md:h-5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Practices Grid: Responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 mt-2 relative items-stretch w-full">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex flex-col gap-2.5 xs:gap-3 bg-gray-50 dark:bg-gray-800/40 p-4 xs:p-5 rounded-md border border-gray-200 dark:border-gray-700/30 h-full w-full"
            >
              <div className="flex flex-row items-start gap-2.5 xs:gap-3 w-full">
                <div className="w-7 h-7 xs:w-8 xs:h-8 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0 mt-0.5 animate-pulse"></div>
                <div className="flex flex-col gap-1 xs:gap-1.5 w-full">
                  <div className="h-3 xs:h-4 md:h-5 w-3/4 md:w-48 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  <div className="flex flex-col gap-1 mt-1 w-full">
                    <div className="w-full h-2.5 xs:h-3 md:h-3.5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                    <div className="w-full h-2.5 xs:h-3 md:h-3.5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                    <div className="w-[85%] h-2.5 xs:h-3 md:h-3.5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoodPracticesSkeleton;
