"use state";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const FAQ = () => {
  const [toggle, setToggle] = useState(true);

  function toggler() {
    setToggle(!toggle);
  }
  return (
    <div>
      <div className="grid  grid-cols-12 gap-10">
        <div className="  col-span-6">
          <div className="flex-1">
            <div>
              <Button
                className="  hover:no-underline p-0  text-sm text-[#175CD3]"
                variant="link"
              >
                Support
              </Button>
              <h1 className="  text-[2.7rem] text-[#1D2939] leading-[4.05rem]   font-medium  tracking-[-2.5px] ">
                FAQs
              </h1>
              <p className=" text-[#667085] text-[1.1rem] font-light mt-4 leading-7  ">
                Everything you need to know about the product <br /> and
                billing. Can’t find the answer you’re looking <br /> for? Please{" "}
                <a className=" underline" href="#">
                  chat to our friendly team.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="  col-span-6">
          <div className="flex-1">
            <Accordion
              onValueChange={toggler}
              defaultValue="item-1"
              type="single"
              collapsible
            >
              <AccordionItem
                className={cn(
                  "py-4 px-6 ",
                  toggle && "bg-[#F9FAFB] rounded-md border-input border"
                )}
                value="item-1"
              >
                <AccordionTrigger className="text-[#101828] ">
                  <div>
                    How many participants can join a ClearLink video conference?
                  </div>
                  {toggle ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 "
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="#98A2B3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5  "
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="#98A2B3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#475467]  font-light leading-6 pr-16  ">
                  ClearLink offers flexible meeting options. Depending on your
                  subscription plan, you can host meetings with varying numbers
                  of participants. Our plans are designed to accommodate small
                  team collaborations and large-scale webinars, ensuring you
                  have the right fit for your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem disabled className="py-4 px-6" value="item-2">
                <AccordionTrigger className="text-[#101828]">
                  Can I use ClearLink on multiple devices?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem disabled className="py-4 px-6" value="item-3">
                <AccordionTrigger className="text-[#101828]">
                  Is ClearLink compatible with other video conferencing
                  platforms?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem disabled className="py-4 px-6" value="item-4">
                <AccordionTrigger className="text-[#101828]">
                  How does ClearLink ensure the security of my video
                  conferences?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem disabled className="py-4 px-6" value="item-5">
                <AccordionTrigger className="text-[#101828]">
                  Do I need to download any software to use ClearLink?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem disabled className="py-4 px-6" value="item-6">
                <AccordionTrigger className="text-[#101828]">
                  What kind of customer support does ClearLink provide?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#98A2B3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
