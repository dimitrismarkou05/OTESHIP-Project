import React from "react";

const EmploymentCardSkeleton = () => (
  <div className="bg-white dark:bg-(--color-dark-text) rounded-md drop-shadow-lg p-4 xs:p-5 md:p-6 w-full h-full flex flex-col gap-3 xs:gap-4">
    <div className="w-9 h-9 xs:w-10 xs:h-10 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0 animate-pulse"></div>
    <div className="h-5 md:h-6 w-32 md:w-40 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>

    <div className="flex flex-col gap-1.5 w-full mb-2">
      <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
      <div className="w-[90%] h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
      <div className="w-[75%] h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
    </div>

    <div className="flex flex-col gap-1.5 mt-auto pt-2">
      <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
      <div className="bg-gray-50 dark:bg-gray-800/40 drop-shadow-sm/10 p-2.5 xs:p-3 rounded-md flex flex-col gap-2">
        <div className="w-full h-2.5 md:h-3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        <div className="w-[85%] h-2.5 md:h-3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
      </div>
    </div>
  </div>
);

const EmploymentSkeleton = () => {
  return (
    <section className="flex flex-col items-start gap-5 xs:gap-6 md:gap-8 scroll-mt-24 md:scroll-mt-30 w-full transition-colors duration-200">
      {/* Header Section */}
      <div className="flex flex-col gap-2 xs:gap-3 w-full">
        <div className="flex flex-row items-center justify-start gap-2">
          <div className="h-1 w-6 xs:w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse shrink-0"></div>
          <div className="h-6 md:h-7 lg:h-8 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-1.5 w-full max-w-4xl mt-1">
          <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="w-4/5 h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        </div>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-4 xs:gap-5 md:gap-6 items-stretch">
        {[0, 1, 2].map((i) => (
          <EmploymentCardSkeleton key={i} />
        ))}
      </div>

      {/* FULL WIDTH: Personal Assistant Box */}
      <div className="w-full bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 p-4 xs:p-5 md:p-6 rounded-md flex flex-col md:flex-row items-start md:items-center gap-3 xs:gap-4 md:gap-5">
        <div className="w-9 h-9 xs:w-10 xs:h-10 bg-gray-200 dark:bg-gray-700 rounded-full shrink-0 animate-pulse"></div>
        <div className="flex flex-col gap-1.5 w-full">
          <div className="h-4 md:h-5 w-40 md:w-56 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="h-3 md:h-4 w-[90%] bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        </div>
      </div>

      {/* Success Examples */}
      <div className="w-full flex flex-col gap-3 xs:gap-4 mt-2">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-1.5 w-full">
          <div className="h-5 md:h-6 w-32 md:w-48 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-3 w-full">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="flex flex-row gap-2.5 items-start bg-gray-50 dark:bg-gray-800/40 p-3.5 rounded-md border border-gray-200 dark:border-gray-700"
            >
              <div className="w-8 h-8 xs:w-9 xs:h-9 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0 animate-pulse"></div>
              <div className="flex flex-col w-full gap-1 mt-0.5">
                <div className="h-3 xs:h-3.5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                <div className="h-2.5 xs:h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse mt-1"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmploymentSkeleton;
