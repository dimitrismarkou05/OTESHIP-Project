import React from "react";

const EntrepreneursSkeleton = () => {
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

      {/* Our Findings Card */}
      <div className="bg-white dark:bg-(--color-dark-text) rounded-md drop-shadow-lg p-5 xs:p-6 md:p-8 border-l-4 border-gray-300 dark:border-gray-700 flex flex-col gap-3 xs:gap-4 relative overflow-hidden">
        <div className="flex flex-row items-start gap-2 xs:gap-2.5">
          <div className="w-5 h-5 xs:w-6 xs:h-6 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0 mt-0.5 xs:mt-1 animate-pulse"></div>
          <div className="h-5 xs:h-6 md:h-7 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-1.5 w-full mt-1">
          <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="w-[90%] h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="w-3/4 h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        </div>
      </div>

      {/* Demands vs. Practice Section */}
      <div className="flex flex-col gap-4 xs:gap-5 mt-2 xs:mt-4 w-full">
        <div className="border-b border-gray-200 dark:border-gray-700/50 pb-2 w-full">
          <div className="h-5 md:h-6 lg:h-7 w-40 md:w-56 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>

        {/* Responsive List Layout */}
        <div className="flex flex-col gap-3 w-full">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-2.5 xs:gap-3 md:gap-6 bg-gray-50 dark:bg-gray-800/30 p-4 xs:p-5 rounded-md border border-gray-200 dark:border-gray-700/30"
            >
              {/* Left Column: Demand */}
              <div className="w-full md:w-1/3 flex flex-row items-start gap-2.5 shrink-0">
                <div className="w-3.5 h-3.5 xs:w-4 xs:h-4 bg-gray-200 dark:bg-gray-700 rounded-full shrink-0 mt-0.5 xs:mt-1 animate-pulse"></div>
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="h-3 xs:h-4 md:h-5 w-full bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  <div className="h-3 xs:h-4 md:h-5 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                </div>
              </div>

              {/* Right Column: Practice */}
              <div className="w-full md:w-2/3 flex flex-row items-start gap-2 xs:gap-2.5">
                <div className="hidden md:block w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0 mt-1 animate-pulse"></div>
                <div className="flex flex-col gap-1.5 w-full mt-0.5 md:mt-1">
                  <div className="h-2.5 xs:h-3 md:h-4 lg:h-5 w-full bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  <div className="h-2.5 xs:h-3 md:h-4 lg:h-5 w-[90%] bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  <div className="h-2.5 xs:h-3 md:h-4 lg:h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntrepreneursSkeleton;
