"use client";
import Link from "next/link";
import React, { useState } from "react";

import '../app/globals.css';
import { motion } from 'framer-motion';
import { IconHome, IconUser, IconArticle, IconMailForward } from "@tabler/icons-react";
import { createClient } from '@supabase/supabase-js';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

export function WaitlistPage() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [companyName, setCompany] = useState('');
  const [question_1, setQuestion_1] = useState('');
  const [question_2, setQuestion_2] = useState('');
  const [question_3, setQuestion_3] = useState('');
  const [question_4, setQuestion_4] = useState('');
  const [question_5, setQuestion_5] = useState('');


  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) {
    throw new Error('Missing env variables.');
  }

  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || process.env.NEXT_PUBLIC_GITHUB_SUPABASE_KEY;
  if (!supabaseAnonKey) {
    throw new Error('Missing env variables.');
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const { error } = await supabase
      .from('magi-signup')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: emailAddress,
        company: companyName,
        question_1: question_1,
        question_2: question_2,
        question_3: question_3,
        question_4: question_4,
        question_5: question_5,
        tier: "refine"
      });
    e.preventDefault();

    if (error) {
      console.error('Insert error:', error.message);
    } else {
      console.log('DB updated successfully');
    }
  };

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#3a1cff] to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#3a1cff] to-transparent" />
      </>
    );
  };

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };

  return (
    <div className="relative w-full min-h-screen">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col md:flex-row items-center justify-center bg-[#CECECE] font-inter p-4"
      >
        <div className="hidden md:flex flex-1 justify-center mb-8 md:mb-0">
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Tell us about yourself.
            </h2>

            <form
              className="my-6"
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  firstName &&
                  lastName &&
                  emailAddress &&
                  companyName &&
                  question_1 &&
                  question_2 &&
                  question_3 &&
                  question_4 &&
                  question_5
                ) {
                  handleSubmit(e);
                  const submitButton = e.currentTarget.querySelector('button[type="submit"]');
                  if (submitButton) {
                    submitButton.innerHTML = 'We will be in touch soon! <BottomGradient />';
                    setTimeout(() => {
                      window.location.href = "/";
                    }, 3000);
                  }
                }
              }}
            >
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input
                    id="firstname"
                    placeholder="Tony"
                    type="text"
                    defaultValue={firstName}
                    onBlur={(e) => setFirstName(e.target.value)}
                    required
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input
                    id="lastname"
                    placeholder="Stark"
                    type="text"
                    defaultValue={lastName}
                    onBlur={(e) => setLastName(e.target.value)}
                    required
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="emailAddress">Email Address</Label>
                <Input
                  id="emailAddress"
                  placeholder="tstark@starkindustries.io"
                  type="email"
                  defaultValue={emailAddress}
                  onBlur={(e) => setEmail(e.target.value)}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="companyName">Company</Label>
                <Input
                  id="companyName"
                  placeholder="Stark Industries"
                  type="text"
                  defaultValue={companyName}
                  onBlur={(e) => setCompany(e.target.value)}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="question_1">Describe your ideal customer, market segment, or vertical.</Label>
                <Input
                  id="question_1"
                  placeholder="Someone that is guaranteed to buy my product or service..."
                  type="text"
                  defaultValue={question_1}
                  onBlur={(e) => setQuestion_1(e.target.value)}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="question_2">How do you currently generate leads. What works and what doesn't?</Label>
                <Input
                  id="question_2"
                  placeholder="Facebook Ads, LinkedIn Sales Navigator works sometimes."
                  type="text"
                  defaultValue={question_2}
                  onBlur={(e) => setQuestion_2(e.target.value)}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="question_3">Who are your in market competitors?</Label>
                <Input
                  id="question_3"
                  placeholder="We're on an island frankly."
                  type="text"
                  defaultValue={question_3}
                  onBlur={(e) => setQuestion_3(e.target.value)}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="question_4">What tools do you use for managing and tracking leads?</Label>
                <Input
                  id="question_4"
                  placeholder="HubSpot (they should pay us for this one)."
                  type="text"
                  defaultValue={question_4}
                  onBlur={(e) => setQuestion_4(e.target.value)}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="question_5">Do you have a client list you would like to exclude from the results?</Label>
                <Input
                  id="question_5"
                  placeholder="Yes please!"
                  type="text"
                  defaultValue={question_5}
                  onBlur={(e) => setQuestion_5(e.target.value)}
                  required
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Let's do it &rarr;
                <BottomGradient />
              </button>

              
            </form>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

export default WaitlistPage;