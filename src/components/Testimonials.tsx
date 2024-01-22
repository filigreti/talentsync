import React from "react";
import test1 from "../assets/test1.jpeg";
import test2 from "../assets/test2.jpeg";
import test3 from "../assets/test3.jpeg";
import test4 from "../assets/test4.jpeg";
import test5 from "../assets/test5.jpeg";
import shopify from "../assets/Shopify.com svg.svg";
import star from "../assets/Star.svg";
import avatar from "../assets/Avatar.svg";
import arrowLeft from "../assets/arrow-left.svg";

import Image from "next/image";
import { Button } from "./ui/button";

const Testimonials = () => {
  return (
    <div>
      <div className="grid  grid-cols-12 gap-10">
        <div className="  col-span-6">
          <div className="flex-1">
            <Image
              className="  object-cover w-[5.5rem]"
              src={shopify}
              alt="shopify"
            />
            <div className="flex items-center my-6 gap-[2px]">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <Image
                    key={index}
                    className=" object-contain w-4 h-4"
                    src={star}
                    alt="star"
                  />
                ))}
            </div>
            <h1 className="  text-[2.35rem] text-[#1D2939] leading-[3.1rem]    tracking-[-2px] ">
              ClearLink has upgraded our <br /> remote meetings. High-quality{" "}
              <br /> video, screen sharing, and <br /> top-notch security make
              it
              <br />
              essential for our team.
            </h1>
            <div className=" mt-12 flex justify-between items-center">
              <div className=" flex items-center gap-2">
                <Image
                  className="  object-cover size-10"
                  src={avatar}
                  alt="shopify"
                />
                <div className=" flex flex-col gap-1">
                  <span className=" text-xs text-[#101828] font-medium">
                    Sarah Thompson
                  </span>
                  <span className=" text-xs text-[#475467]">
                    Project Manager, Shopify
                  </span>
                </div>
              </div>
              <div className=" flex gap-4 mr-10">
                <Button variant="outline" size="icon" className=" rounded-full">
                  <Image
                    className=" object-contain w-4 h-4"
                    src={arrowLeft}
                    alt="star"
                  />

                  <span className="sr-only">Previous slide</span>
                </Button>
                <Button variant="outline" size="icon" className=" rounded-full">
                  <Image
                    className=" object-contain w-4 h-4 rotate-180"
                    src={arrowLeft}
                    alt="star"
                  />

                  <span className="sr-only">Previous slide</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="  col-span-6 ">
          <div className="grid grid-cols-8  gap-4">
            <div
              style={{
                backgroundImage: `url(${test1.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className=" h-[9rem]  col-span-2 row-span-3 col-start-3 row-start-2 "
            ></div>
            <div
              style={{
                backgroundImage: `url(${test3.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="  h-[9rem]  col-span-3 row-span-2 col-start-1 row-start-5"
            ></div>
            <div
              style={{
                backgroundImage: `url(${test2.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className=" h-[12rem] col-span-2 row-span-4 col-start-5 row-start-1 "
            ></div>
            <div
              style={{
                backgroundImage: `url(${test4.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className=" h-[14rem]  col-span-2 row-span-5 col-start-4 row-start-5"
            ></div>
            <div
              style={{
                backgroundImage: `url(${test5.src})`,
                backgroundPosition: "center bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="   col-span-3 row-span-2 col-start-6 row-start-5 h-full w-full"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
