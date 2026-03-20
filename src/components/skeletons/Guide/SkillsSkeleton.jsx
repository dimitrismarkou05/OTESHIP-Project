import React from "react";

const SkillsSkeleton = () => {
  return (
    <section className="relative flex flex-col bg-(--color-dark-text) items-start gap-6 xs:gap-8 scroll-mt-24 md:scroll-mt-32 drop-shadow-lg rounded-md p-5 xs:p-6 md:p-8 lg:p-10 overflow-hidden w-full min-h-75">
      {/* Header Section */}
      <div className="flex flex-col gap-2 xs:gap-3 w-full relative z-10">
        <div className="h-7 xs:h-8 md:h-9 w-40 md:w-56 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="flex flex-col gap-1.5 w-full max-w-3xl mt-1">
          <div className="w-full h-3 md:h-4 bg-gray-700 rounded-sm animate-pulse"></div>
          <div className="w-4/5 h-3 md:h-4 bg-gray-700 rounded-sm animate-pulse"></div>
        </div>
      </div>

      {/* Country Tabs */}
      <div className="flex flex-row gap-1 xs:gap-2 border-b border-gray-700 w-full relative z-10 overflow-hidden">
        {[0, 1, 2].map((i) => (
          <div key={i} className="px-3 py-2 xs:px-5 xs:py-2.5">
            <div className="w-16 md:w-20 h-4 md:h-5 bg-gray-700 rounded-sm animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Skills List Placeholder */}
      <div className="grid w-full relative z-10 mt-2">
        <div className="col-start-1 row-start-1 flex flex-col gap-5 xs:gap-6 w-full">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="flex flex-col gap-3 xs:gap-4 w-full">
              <div className="flex flex-row gap-3 xs:gap-4 md:gap-5 items-start">
                <div className="w-8 h-8 xs:w-9 xs:h-9 md:w-10 md:h-10 bg-gray-700 rounded-full shrink-0 outline-1 outline-gray-600 mt-0.5 animate-pulse"></div>
                <div className="flex flex-col items-start gap-1.5 xs:gap-2 mt-1 w-full">
                  <div className="h-4 md:h-5 lg:h-6 w-48 md:w-64 bg-gray-700 rounded-md animate-pulse"></div>
                  <div className="flex flex-col gap-1.5 w-full max-w-4xl mt-1">
                    <div className="w-full h-2.5 md:h-3 lg:h-4 bg-gray-700 rounded-sm animate-pulse"></div>
                    <div className="w-[85%] h-2.5 md:h-3 lg:h-4 bg-gray-700 rounded-sm animate-pulse"></div>
                  </div>
                </div>
              </div>
              {index < 3 && (
                <div className="border-t border-gray-700/60 mt-1 xs:mt-2 ml-11 xs:ml-13 md:ml-15"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSkeleton;
