import React from "react";

const ConceptCardSkeleton = ({ colSpan = false }) => (
  <div
    className={`bg-white dark:bg-(--color-dark-text) p-4 xs:p-5 rounded-md drop-shadow-sm/10 border border-gray-200 dark:border-gray-700/40 flex flex-col gap-2 ${colSpan ? "md:col-span-2" : ""}`}
  >
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 xs:w-5 xs:h-5 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse shrink-0"></div>
      <div className="h-4 md:h-5 w-24 md:w-32 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
    </div>
    <div className="flex flex-col gap-1 mt-1 w-full">
      <div className="w-full h-2.5 md:h-3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
      <div className="w-full h-2.5 md:h-3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
      <div className="w-3/4 h-2.5 md:h-3 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
    </div>
  </div>
);

const BusinessSkeleton = () => {
  return (
    <section className="flex flex-col gap-8 xs:gap-10 min-h-fit scroll-mt-24 md:scroll-mt-32 w-full transition-colors duration-200">
      {/* Top Section */}
      <div className="flex flex-col xl:flex-row gap-6 xs:gap-8 xl:items-stretch w-full">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-4 xs:gap-5 md:gap-6 flex-[1.5] w-full">
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="h-1 w-6 xs:w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            <div className="h-6 xs:h-7 md:h-8 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-1.5 w-full">
            <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
            <div className="w-[85%] h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 w-full mt-2">
            <ConceptCardSkeleton />
            <ConceptCardSkeleton />
            <ConceptCardSkeleton colSpan={true} />
          </div>
        </div>

        {/* Right Content: Image */}
        <div className="rounded-md w-full xl:w-2/5 shrink-0 block overflow-hidden drop-shadow-lg h-56 xs:h-64 md:h-80 xl:h-auto xl:self-stretch bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      </div>

      {/* Bottom Section: 10-Stage Table Skeleton */}
      <div className="flex flex-col gap-3 xs:gap-4 w-full mt-2 xs:mt-4">
        <div className="flex flex-col gap-1.5 border-b border-gray-200 dark:border-gray-700/50 pb-2">
          <div className="h-5 md:h-6 w-40 md:w-56 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="w-2/3 h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse mt-1"></div>
        </div>

        <div className="overflow-x-auto bg-white dark:bg-(--color-dark-text) rounded-md drop-shadow-lg border border-gray-200 dark:border-gray-700/50 mt-1 xs:mt-2">
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700/50">
                <th className="p-3 xs:p-4 w-1/5">
                  <div className="h-3 md:h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
                </th>
                <th className="p-3 xs:p-4 w-1/3">
                  <div className="h-3 md:h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
                </th>
                <th className="p-3 xs:p-4 w-1/4">
                  <div className="h-3 md:h-4 w-20 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
                </th>
                <th className="p-3 xs:p-4 w-1/4">
                  <div className="h-3 md:h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4].map((i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 dark:border-gray-700/30"
                >
                  <td className="p-3 xs:p-4">
                    <div className="h-3 md:h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  </td>
                  <td className="p-3 xs:p-4">
                    <div className="flex flex-col gap-1 w-full max-w-50">
                      <div className="h-3 md:h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                      <div className="h-3 md:h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                    </div>
                  </td>
                  <td className="p-3 xs:p-4">
                    <div className="h-3 md:h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  </td>
                  <td className="p-3 xs:p-4">
                    <div className="h-3 md:h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BusinessSkeleton;
