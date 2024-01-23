import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import videoRecorder from "../assets/video-recorder.svg";
import happyFaces from "../assets/happyfaces.png";
import noiseCancellation from "../assets/noise.svg";
import calendar from "../assets/calendar.svg";
import lock from "../assets/lock-unlocked-04.svg";
import curvedArrow from "../assets/Hand-drawn arrow.svg";

const MidTopSection = () => {
  return (
    <div className="section-with-images">
      <div className=" grid grid-cols-12  ">
        <div className=" col-span-7 w-full ">
          <div>
            <Button
              className="  hover:no-underline p-0  text-sm text-[#175CD3]"
              variant="link"
            >
              The ClearLink Advantage
            </Button>
            <h1 className="  text-[2.7rem] text-[#1D2939] leading-[4.05rem]   font-medium  tracking-[-2.5px] ">
              Why Choose ClearLink?
            </h1>
            <p className=" text-[#667085] text-[1.15rem] font-light mt-4 leading-7  ">
              In a world where connection is everything, ClearLink takes the
              lead. Our cutting-edge <br /> video conferencing app offers:
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 grid-rows-4 gap-4 mt-20">
        <div className="col-span-2 row-span-2">
          <div className="  size-10 flex items-center justify-center rounded-full border border-[#EAECF0] bg-[#F9FAFB]">
            <Image
              className=" object-contain"
              src={videoRecorder}
              alt="video-recorder"
            />
          </div>
          <h2 className="pt-5  font-medium text-[#101828]">
            Crystal-clear HD video
          </h2>
          <p className=" text-sm text-[#475467] font-light mt-2 leading-6">
            No more pixelation or blurriness – just <br /> stunning, lifelike
            clarity that brings your <br /> team closer in meetings.
          </p>
        </div>

        <div className="col-span-2 row-span-2 col-start-3">
          <div className="  size-10 flex items-center justify-center rounded-full border border-[#EAECF0] bg-[#F9FAFB]">
            <Image
              className=" object-contain"
              src={noiseCancellation}
              alt="video-recorder"
            />
          </div>
          <h2 className="pt-5  font-medium text-[#101828]">
            Noise-canceling audio
          </h2>
          <p className=" text-sm text-[#475467] font-light mt-2 leading-6">
            Say goodbye to distractions with our <br /> advanced audio tech for
            crisp <br />
            interruption-free conversations.
          </p>
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-3">
          <div className="  size-10 flex items-center justify-center rounded-full border border-[#EAECF0] bg-[#F9FAFB]">
            <Image
              className=" object-contain"
              src={calendar}
              alt="video-recorder"
            />
          </div>
          <h2 className="pt-5  font-medium text-[#101828]">
            Scheduling made easy
          </h2>
          <p className=" text-sm text-[#475467] font-light mt-2 leading-6">
            Streamline your agenda with ClearLink&rsquo;s <br /> intuitive
            scheduling. Set up meetings,
            <br /> send invitations, and receive reminders in <br /> one place.
          </p>
        </div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-3">
          <div className="  size-10 flex items-center justify-center rounded-full border border-[#EAECF0] bg-[#F9FAFB]">
            <Image
              className=" object-contain"
              src={lock}
              alt="video-recorder"
            />
          </div>
          <h2 className="pt-5  font-medium text-[#101828]">
            Bank-grade security
          </h2>
          <p className=" text-sm text-[#475467] font-light mt-2 leading-6">
            Your privacy is our priority with bank- <br /> grade security
            protocols safeguarding <br /> your meetings and data from unwanted{" "}
            <br />
            intruders.
          </p>
        </div>
        <div className="col-span-3 row-span-4 col-start-5 row-start-1 flex justify-end items-center relative">
          <div className="relative flex items-center justify-center">
            <Image
              className=" object-contain absolute -top-[14rem] right-[11rem] z-10  h-[50%]"
              src={curvedArrow}
              alt="video-recorder"
            />
            <Image
              className=" object-contain relative big-image"
              src={happyFaces}
              alt="video-recorder"
              height={470}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidTopSection;
