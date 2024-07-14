import { cn } from "@/lib/utils";
import {
  IconWorldSearch,
  IconSparkles,
  IconCurrencyDollar,
  IconFileArrowRight,
  IconAppsOff
} from "@tabler/icons-react";
import { GradientHeading } from "./gradient-heading";

import dynamic from 'next/dynamic'

const SimkinGliderGunAnimation = dynamic(() => import('@/components/simkin-glider-gun'), { ssr: false })


export function BuyerGrid() {
  const features = [
    {
      title: "Recommendations",
      description:
        "Tell us about your current tech/SaaS stack recieve tailored recommendations.",
      icon: <IconSparkles />,
    },
    {
      title: "Easy Discoverability",
      description:
        "Discover innovate alternatives with advanced features at competitve prices.",
      icon: <IconWorldSearch />,
    },
    {
      title: "Want Something Specifc?",
      description:
        "Submit RFPs and review product applications efficiently.",
      icon: <IconFileArrowRight />,
    },
    {
      title: "No More Fluff",
      description: "Streamline your procurement process and reduce unnecessary spending.",
      icon: <IconAppsOff />,
    },
    {
      title: "Glass Box",
      description: "Full price transparency guaranteed.",
      icon: <IconCurrencyDollar />,
    },
  ];
  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      <GradientHeading
        className="text-end mb-6"
        size="lg"
        variant="secondary"
      >
        <h3 className="font-normal text-stone-900 pr-8">
          [ For Buyers ]
        </h3>
      </GradientHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4">
        <div className="hidden lg:block lg:col-span-2"></div>
        {features.map((feature, index) => (
          <Feature
            key={feature.title}
            {...feature}
            index={index}
            className={cn(
              index < 2 && "lg:col-span-1",
              index === 2 && "lg:col-start-2 lg:row-start-2",
              index === 3 && "lg:col-start-3 lg:row-start-2",
              index === 4 && "lg:col-start-4 lg:row-start-2"
            )}
          />
        ))}
        <div className="hidden md:block lg:col-span-1 lg:row-start-2">
          <SimkinGliderGunAnimation/>
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature",
        "border-b dark:border-neutral-800",
        index === 0 && "lg:border-r dark:border-neutral-800",
        index === 2 && "lg:border-r lg:border-t dark:border-neutral-800",
        index === 3 && "lg:border-r lg:border-t dark:border-neutral-800",
        index === 4 && "lg:border-t dark:border-neutral-800",
        className
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-50 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-xl font-normal mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-purple-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};