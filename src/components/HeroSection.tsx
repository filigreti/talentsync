import Image from "next/image";
import image1 from "../assets/image 21.png";
import image2 from "../assets/image 100.png";
import image3 from "../assets/image 8.png";
import image4 from "../assets/image 72.png";
import image5 from "../assets/image 108.png";
import image6 from "../assets/image 103.png";
import microphone from "../assets/microphone-01.svg";
import videoRecorder from "../assets/video-recorder.svg";
import monitor from "../assets/monitor-01.svg";
import smiley from "../assets/face-smile.svg";
import message from "../assets/message-text-circle-02.svg";
import settings from "../assets/settings-01.svg";
import { Button } from "./ui/button";
import frame from "../assets/Frame 10.svg";
import avatar from "../assets/avatars.svg";
import star from "../assets/Star.svg";

const HeroSection = () => {
  return (
    <div className=" grid grid-cols-12 gap-">
      <div className=" col-span-7 w-full flex flex-col   justify-around">
        <h1 className="  text-[3.5rem] text-[#1D2939] leading-[4.05rem]   font-medium  tracking-[-2.5px] ">
          Uniting the world, <br /> one video call at a time
        </h1>
        <p className=" text-[#667085] text-lg font-light ">
          Experience the future of communication with ClearLink – <br /> where
          crystal-clear video conferencing meets <br /> unparalleled simplicity.
        </p>
        <div className=" flex items-center gap-5">
          <Button className=" rounded-full text-sm bg-[#175CD3] py-4">
            Start your free trial
          </Button>
          <Button
            className=" no-underline gap-3 text-sm text-[#175CD3]"
            variant="link"
          >
            <Image
              className=" object-contain w-4 h-4"
              src={frame}
              alt="message"
            />
            Discover AI assistant
          </Button>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <Image className=" object-contain" src={avatar} alt="microphone" />
          <div className=" py-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
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
              <span className=" text-xs">5.0</span>
            </div>
            <span>
              <span className=" text-xs text-[#475467]">
                from 3,000+ reviews
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className=" col-span-5">
        <div className="bg-[#EFF8FF] custom-shadow rounded-lg p-7  border border-[#B2DDFF]">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex  flex-col items-center justify-end rounded-lg bg-[#FE9C66]">
              <Image className=" object-contain" src={image1} alt="imageOne" />
            </div>
            <div className="flex  flex-col items-center justify-end rounded-lg bg-[#D6BBFB]">
              <Image className=" object-contain" src={image2} alt="imageTwo" />
            </div>
            <div className="flex  flex-col items-center justify-end rounded-lg bg-[#ACDC79]">
              <Image
                className=" object-contain"
                src={image3}
                alt="imageThree"
              />
            </div>
            <div className="flex  flex-col items-center justify-end rounded-lg bg-[#B3B8DB]">
              <Image className=" object-contain" src={image4} alt="imageFour" />
            </div>
            <div className="flex  flex-col items-center justify-end rounded-lg bg-[#FEC84A]">
              <Image
                className=" object-contain rounded-b-lg"
                src={image5}
                alt="imageFive"
              />
            </div>
            <div className="flex  flex-col items-center justify-end rounded-lg bg-[#FEA3B4]">
              <Image className=" object-contain" src={image6} alt="imageSix" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="  size-10 flex items-center justify-center rounded-full border border-[#D1E9FF] bg-background">
              <Image
                className=" object-contain"
                src={microphone}
                alt="microphone"
              />
            </div>
            <div className="  size-10 flex items-center justify-center rounded-full border border-[#D1E9FF] bg-background">
              <Image
                className=" object-contain"
                src={videoRecorder}
                alt="video-recorder"
              />
            </div>

            <div className="  size-10 flex items-center justify-center rounded-full border border-[#D1E9FF] bg-background">
              <Image className=" object-contain" src={monitor} alt="monitor" />
            </div>
            <div className="  size-10 flex items-center justify-center rounded-full border border-[#D1E9FF] bg-background">
              <Image className=" object-contain" src={smiley} alt="smiley" />
            </div>
            <div className="  size-10 flex items-center justify-center rounded-full border border-[#D1E9FF] bg-background">
              <Image className=" object-contain" src={message} alt="message" />
            </div>
            <div className="  size-10 flex items-center justify-center rounded-full border border-[#D1E9FF] bg-background">
              <Image
                className=" object-contain"
                src={settings}
                alt="settings"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
