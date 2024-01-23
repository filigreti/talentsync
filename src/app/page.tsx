"use client";
import Image from "next/image";
import bImg from "../assets/Background pattern.png";
import bigVideo from "../assets/big-video.png";
import TopHeader from "@/components/TopHeader";
import HeroSection from "@/components/HeroSection";
import Endorsements from "@/components/Endorsements";
import MidTopSection from "@/components/MidTopSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BottomSection from "@/components/BottomSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const images = document.querySelectorAll(".section-with-images .big-image");
    // const handleAllImagesLoaded = () => {
    //   setIsLoading(false);
    // };
    // let loadedImagesCount = 0;
    // images.forEach((image) => {
    //   console.log(image, "hinimage");
    //   (image as HTMLImageElement).onload = async () => {
    //     console.log("swell");
    //     loadedImagesCount++;
    //     console.log(loadedImagesCount, "pppp");
    //     if (loadedImagesCount === images.length) {
    //       handleAllImagesLoaded();
    //     }
    //   };
    // });
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden h-dvh">
      {/* <div
        className={cn(
          isLoading ? "block" : "hidden",
          " absolute top-0 justify-center flex items-center w-full"
        )}
      >
        <Loader />
      </div> */}
      <div
        className={cn(
          isLoading ? "hidden" : "block",
          "relative w-full h-[100dvh]"
        )}
      >
        <Image
          src={bImg}
          className="w-full h-full absolute "
          alt="background image"
        />

        <div className="container relative  pt-7">
          <TopHeader />
          <div className="   mt-28 px-5">
            <HeroSection />
          </div>
          <div className="   mt-[8.5rem] px-5">
            <Endorsements />
          </div>
          <div className=" mt-36 px-5">
            <MidTopSection />
          </div>
        </div>
        <div className=" bg-[#F9FAFB]   mt-24">
          <div className="container py-28 px-12">
            <Testimonials />
          </div>
        </div>
        <div className="container relative  ">
          <div className="pt-20 px-5">
            <FAQ />
          </div>
        </div>
        <div className=" relative  pt-20 h-[58.52dvh] section-with-images    mt-20 px-5">
          <div className="grid container  grid-cols-12 gap-10">
            <div className="col-span-6">
              <BottomSection />
            </div>
            <div className="col-span-6">
              <Image
                src={bigVideo}
                priority={true}
                className="big-image h-full absolute  object-cover object-top w-[58.45%] rounded-tl-3xl border-l-[8px] border-t-[8px] border-[#101828] "
                alt="background image"
              />
            </div>
          </div>
        </div>
        <div className="container relative  ">
          <div className=" pt-[10rem] pb-10 px-5">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
