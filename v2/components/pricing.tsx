"use client";
import React from "react";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";

const CONSTANTS = {
  CALCOM_LINK: "your-calcom-link", // Replace with your actual Cal.com link
  WEBSITE_URL: "https://heighliner.tech"
};

const calOptions = {
  namespace: "pricing",
  layout: "month_view"
};

export enum plan {
  basic = "basic",
  pro = "pro",
  enterprise = "enterprise",
}

export type Plan = {
  id: string;
  name: string;
  price: number | string;
  subText?: string;
  currency: string;
  description: string;
  features: Array<string | { text: string; subtext: string }>;
  featured?: boolean;
  buttonText?: string;
  additionalFeatures?: string[];
  isEnterprise?: boolean;
};

const plans: Array<Plan> = [
  {
    id: plan.basic,
    name: "Basic",
    price: 0,
    subText: "/month",
    currency: "$",
    description: "Take it for a spin",
    features: [
      "Individual use",
      "5 trial queries",
      "Default static file exports"
    ],
    buttonText: "Get Started",
  },
  {
    id: plan.pro,
    name: "Pro",
    price: 40,
    subText: "/month",
    currency: "$",
    description: "Accelerate your work",
    // featured: true,
    features: [
      "Basic tier features",
      "Document Analysis",
      { text: "Unlimited queries", subtext: "Rate limit: 20 /hour" },
      "Static file export customization",
      "24/7 support"
    ],
    buttonText: "Get Pro",
    additionalFeatures: ["Everything in Basic Plan"],
  },
  {
    id: plan.enterprise,
    name: "Enterprise",
    price: "Custom",
    description: "Integrated observability and tailored optimization",
    currency: "",
    features: [
      "Custom user limit",
      { text: "Unlimited queries", subtext: "Priority uptime and no rate limits" },
      "24/7 support"
    ],
    additionalFeatures: ["Everything in Basic Plan", "Everything in Pro Plan"],
    buttonText: "Schedule a Demo",
    isEnterprise: true,
  },
];

const Card = ({ plan }: { plan: Plan }) => {
  const calOptions = useCalEmbed({
    namespace: "pricing",
    styles: {
      branding: {
        brandColor: "#000000", // Adjust to match your brand color
      },
    },
    hideEventTypeDetails: false,
    layout: "month_view",
  });

  const handleClick = () => {
    if (!plan.isEnterprise) {
      window.location.href = CONSTANTS.WEBSITE_URL;
    }
  };

  return (
    <div
      className={cn(
        "p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800",
        plan.featured && "scale-105"
      )}
    >
      <div className="flex flex-col gap-4 h-full justify-start">
        <div
          className={cn(
            "p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]"
          )}
        >
          <div className="flex justify-between items-start">
            <div className="flex gap-2 flex-col">
              <p className="font-medium text-lg text-black dark:text-white">
                {plan.name}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {plan.description}
              </p>
            </div>

            {plan.featured && (
              <div className="font-medium text-xs px-3 py-1 rounded-full relative bg-neutral-900 dark:bg-white dark:text-black text-white">
                <div className="absolute inset-x-0 bottom-0 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                Featured
              </div>
            )}
          </div>
          <div className="mt-8">
            <div className="flex items-end">
              <span className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
                {plan.currency}
              </span>
              <div className="flex items-start gap-2">
                <span className="text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800">
                  {plan.price}
                </span>
              </div>
              <span className="text-base font-normal text-neutral-500 dark:text-neutral-200 mb-1 md:mb-2">
                {plan.subText}
              </span>
            </div>
          </div>
          
          {plan.isEnterprise ? (
            <>
              <Button
                data-cal-namespace={calOptions.namespace}
                data-cal-link={CONSTANTS.CALCOM_LINK}
                data-cal-config={`{"layout":"${calOptions.layout}"}`}
                variant="primary"
                className="w-full mt-10 bg-white dark:bg-slate-500"
              >
                {plan.buttonText}
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              className="w-full mt-10 bg-white dark:bg-slate-500"
              onClick={handleClick}
            >
              {plan.buttonText}
            </Button>
          )}
        </div>
        <div className="mt-1 p-4">
          {plan.features.map((feature, idx) => (
            <Step key={idx} text={typeof feature === 'string' ? feature : feature.text} subtext={typeof feature === 'object' ? feature.subtext : undefined} />
          ))}
        </div>
        {plan.additionalFeatures && plan.additionalFeatures.length > 0 && (
          <Divider />
        )}
        <div className="p-4">
          {plan.additionalFeatures?.map((feature, idx) => (
            <Step additional key={idx} text={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Step = ({
  text,
  subtext,
  additional,
}: {
  text: string;
  subtext?: string;
  additional?: boolean;
}) => {
  return (
    <div className="flex items-start justify-start gap-2 my-4">
      <div
        className={cn(
          "h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
          additional ? "bg-slate-500" : "bg-neutral-700"
        )}
      >
        <IconCheck className="h-3 w-3 [stroke-width:4px] text-neutral-300" />
      </div>
      <div className="flex flex-col">
        <div className="font-medium text-black text-sm dark:text-white">
          {text}
        </div>
        {subtext && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="relative">
      <div className="w-full h-px dark:bg-neutral-950 bg-white" />
      <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800" />
      <div className="absolute inset-0 h-5 w-5 m-auto rounded-xl dark:bg-neutral-800 bg-white shadow-[0px_-1px_0px_0px_var(--neutral-200)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)] flex items-center justify-center">
        <IconPlus className="h-3 w-3 [stroke-width:4px] dark:text-neutral-300 text-black" />
      </div>
    </div>
  );
};

export function Pricing() {
  return (
    <div id="pricing" className="relative isolate bg-white dark:bg-neutral-950 w-full px-4 py-0 sm:py-20 lg:px-4">
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true"></div>
      <>
        <h2 className="pt-4 font-bold text-lg md:text-4xl text-center text-neutral-800 dark:text-neutral-100">
          Simple pricing for indivudals and enterprise
        </h2>
        <p className="max-w-md mx-auto text-base text-center text-neutral-600 dark:text-neutral-300 mt-4">
          Our pricing is designed for advanced people who need more features and more flexibility.
        </p>
      </>

      <div className="mx-auto grid grid-cols-1 gap-4 mt-20 max-w-7xl md:grid-cols-2 xl:grid-cols-3">
        {plans.map((tier) => (
          <Card plan={tier} key={tier.id} />
        ))}
      </div>
    </div>
  );
}