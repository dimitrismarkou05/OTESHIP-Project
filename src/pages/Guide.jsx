import React, { Suspense, lazy } from "react";
import GuideFooter from "../components/sections/Guide/GuideFooter";
import HeroSection from "../components/sections/Guide/HeroSection";

// Synchronous Skeleton Imports
import BusinessSkeleton from "../components/skeletons/Guide/BusinessSkeleton";
import EmploymentSkeleton from "../components/skeletons/Guide/EmploymentSkeleton";
import EntrepreneursSkeleton from "../components/skeletons/Guide/EntrepreneursSkeleton";
import GoodPracticesSkeleton from "../components/skeletons/Guide/GoodPracticesSkeleton";
import LawSkeleton from "../components/skeletons/Guide/LawSkeleton";
import MunicipalitySkeleton from "../components/skeletons/Guide/MunicipalitySkeleton";
import PrefaceSkeleton from "../components/skeletons/Guide/PrefaceSkeleton";
import SkillsSkeleton from "../components/skeletons/Guide/SkillsSkeleton";
import ToolkitSkeleton from "../components/skeletons/Guide/ToolkitSkeleton";

const BusinessSection = lazy(
  () => import("../components/sections/Guide/BusinessSection"),
);
const EmploymentSection = lazy(
  () => import("../components/sections/Guide/EmploymentSection"),
);
const EntrepreneursSection = lazy(
  () => import("../components/sections/Guide/EntrepreneursSection"),
);
const GoodPracticesSection = lazy(
  () => import("../components/sections/Guide/GoodPracticesSection"),
);
const LawSection = lazy(
  () => import("../components/sections/Guide/LawSection"),
);
const MunicipalitySection = lazy(
  () => import("../components/sections/Guide/MunicipalitySection"),
);
const PrefaceSection = lazy(
  () => import("../components/sections/Guide/PrefaceSection"),
);
const SkillsSection = lazy(
  () => import("../components/sections/Guide/SkillsSection"),
);
const ToolkitSection = lazy(
  () => import("../components/sections/Guide/ToolkitSection"),
);

export default function Guide() {
  return (
    <div className="flex-1 w-full">
      <div className="flex flex-col max-w-380 mx-auto gap-12 xs:gap-14 md:gap-16 lg:gap-20">
        <HeroSection />

        <Suspense fallback={<PrefaceSkeleton />}>
          <PrefaceSection />
        </Suspense>

        <Suspense fallback={<LawSkeleton />}>
          <LawSection />
        </Suspense>

        <Suspense fallback={<EmploymentSkeleton />}>
          <EmploymentSection />
        </Suspense>

        <Suspense fallback={<SkillsSkeleton />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<BusinessSkeleton />}>
          <BusinessSection />
        </Suspense>

        <Suspense fallback={<MunicipalitySkeleton />}>
          <MunicipalitySection />
        </Suspense>

        <Suspense fallback={<EntrepreneursSkeleton />}>
          <EntrepreneursSection />
        </Suspense>

        <Suspense fallback={<GoodPracticesSkeleton />}>
          <GoodPracticesSection />
        </Suspense>

        <Suspense fallback={<ToolkitSkeleton />}>
          <ToolkitSection />
        </Suspense>

        <GuideFooter />
      </div>
    </div>
  );
}
