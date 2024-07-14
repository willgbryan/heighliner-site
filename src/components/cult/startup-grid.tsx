import { cn } from "@/lib/utils";
import {
  IconDeviceMobileHeart,
  IconDeviceAnalytics,
  IconUserScan,
  IconChartArrowsVertical,
  IconWhirl,
  IconRouteAltLeft,
  IconFileArrowRight,
} from "@tabler/icons-react";
import { GradientHeading } from "./gradient-heading";
import dynamic from 'next/dynamic'
const GliderGunAnimation = dynamic(() => import('@/components/glider-gun-animation'), { ssr: false })


export function StartupGrid() {
  const features = [
    {
      title: "Find New Users",
      description:
        "List your products, beta testing opportunities, and reach high-intent buyers.",
      icon: <IconUserScan />,
    },
    {
      title: "Punch Above Your Weight",
      description:
        "Compete with larger organizations on a level playing field where product quality is all that matters.",
      icon: <IconChartArrowsVertical />,
    },
    {
      title: "PMF Quantified",
      description:
        "Magi analyzes site traffic to give you valuable insights into your ideal customer profile.",
      icon: <IconDeviceAnalytics />,
    },
    {
      title: "A Curated Space",
      description: "A marketplace dedicated to startups helps reduce marketing costs and improve discovery.",
      icon: <IconWhirl />,
    },
    {
      title: "Find A Perfect Customer",
      description: "Submit proposals to RFP submissions from high intent customers.",
      icon: <IconFileArrowRight />,
    },
  ];
  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      <GradientHeading
        className="text-start mb-6"
        size="lg"
        variant="secondary"
      >
        <h3 className="font-normal text-stone-900">
          [ For Startups ]
        </h3>
      </GradientHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4">
        {features.slice(0, 3).map((feature, index) => (
          <Feature 
            key={feature.title} 
            {...feature} 
            index={index} 
            className="lg:col-span-1"
          />
        ))}
        <div className="lg:col-span-1 lg:row-span-1 relative h-full">
          <GliderGunAnimation direction="down-left"/>
        </div>
        {features.slice(3).map((feature, index) => (
          <Feature 
            key={feature.title} 
            {...feature} 
            index={index + 3} 
            className={cn(
              index === 0 && "lg:col-start-1",
              index === 1 && "lg:col-start-2"
            )}
          />
        ))}
        <div className="hidden lg:row-span-1 lg:col-span-2">
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
          index < 2 && "lg:border-r dark:border-neutral-800",
          index === 2 && "lg:border-r dark:border-neutral-800",
          index === 3 && "lg:border-r lg:border-t dark:border-neutral-800",
          index === 4 && "lg:border-t dark:border-neutral-800",
          className
        )}
      >
        {index < 4 && (
          <div className="opacity-0 group-hover/feature:opacity-50 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
        {index >= 4 && (
          <div className="opacity-0 group-hover/feature:opacity-50 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        )}
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