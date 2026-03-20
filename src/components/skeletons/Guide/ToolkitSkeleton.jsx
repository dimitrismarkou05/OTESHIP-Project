import React from "react";

const ToolkitSkeleton = () => {
  return (
    <section className="flex flex-col gap-6 xs:gap-8 md:gap-10 scroll-mt-24 md:scroll-mt-32 w-full transition-colors duration-200">
      {/* Header Section */}
      <div className="flex flex-col gap-2 xs:gap-3 w-full">
        <div className="flex flex-row items-center justify-start gap-2 xs:gap-2.5">
          <div className="h-1 w-6 xs:w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse shrink-0"></div>
          <div className="h-6 xs:h-7 md:h-8 lg:h-9 w-32 md:w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
        <div className="flex flex-col gap-1.5 w-full max-w-4xl mt-1">
          <div className="w-full h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="w-[85%] h-3 md:h-4 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
        </div>
      </div>

      {/* Overview Table */}
      <div className="flex flex-col gap-3 xs:gap-4 w-full">
        <div className="border-b border-gray-200 dark:border-gray-700/50 pb-2 w-full">
          <div className="h-5 md:h-6 lg:h-7 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>

        <div className="overflow-x-auto bg-white dark:bg-(--color-dark-text) rounded-md drop-shadow-lg border border-gray-200 dark:border-gray-700/50 mt-1 xs:mt-2 w-full">
          <table className="w-full text-left border-collapse min-w-150">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700/50">
                <th className="p-3 xs:p-4 w-1/4">
                  <div className="h-3 md:h-4 w-16 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
                </th>
                <th className="p-3 xs:p-4 w-1/3">
                  <div className="h-3 md:h-4 w-24 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
                </th>
                <th className="p-3 xs:p-4 w-5/12">
                  <div className="h-3 md:h-4 w-20 bg-gray-200 dark:bg-gray-600 rounded-sm animate-pulse"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3].map((i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 dark:border-gray-700/30"
                >
                  <td className="p-3 xs:p-4">
                    <div className="h-3 md:h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                  </td>
                  <td className="p-3 xs:p-4">
                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="h-3 md:h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                      <div className="h-3 md:h-4 w-[90%] bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                    </div>
                  </td>
                  <td className="p-3 xs:p-4">
                    <div className="flex flex-col gap-1.5 w-full">
                      <div className="h-3 md:h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                      <div className="h-3 md:h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Sheets / Templates */}
      <div className="flex flex-col gap-4 w-full mt-2 xs:mt-4">
        <div className="border-b border-gray-200 dark:border-gray-700/50 pb-2 w-full">
          <div className="h-5 md:h-6 lg:h-7 w-40 md:w-56 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex flex-col bg-white dark:bg-(--color-dark-text) rounded-md drop-shadow-sm border border-gray-200 dark:border-gray-700/40 w-full"
            >
              <div className="flex flex-row items-center justify-between w-full p-3 xs:p-4">
                <div className="flex flex-row items-center gap-2.5 xs:gap-3 flex-1">
                  <div className="w-4 h-4 xs:w-5 xs:h-5 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse shrink-0"></div>
                  <div className="h-3 md:h-4 lg:h-5 w-48 md:w-64 bg-gray-200 dark:bg-gray-700 rounded-sm animate-pulse"></div>
                </div>
                <div className="w-16 md:w-20 h-6 xs:h-7 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse shrink-0 ml-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSkeleton;
