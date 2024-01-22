import Image from "next/image";
import check from "../assets/check-circle.svg";
import { Button } from "./ui/button";
const BottomSection = () => {
  return (
    <div className="mt-8">
      <h1 className="  text-[3rem] text-[#1D2939] leading-[3.55rem]   font-medium  tracking-[-2.5px] ">
        Ready to clear the path to <br /> perfect communication?
      </h1>
      <div className="ml-4 mt-7 flex flex-col gap-y-5">
        <div className=" flex items-center gap-2">
          <Image className="  object-cover " src={check} alt="check" />
          <p className=" text-[#667085] text-[1.1rem] font-light  leading-7  ">
            30 days free trial
          </p>
        </div>
        <div className=" flex items-center gap-2">
          <Image className="  object-cover " src={check} alt="check" />
          <p className=" text-[#667085] text-[1.1rem] font-light  leading-7  ">
            Cancel at any time
          </p>
        </div>
        <div className=" flex items-center gap-2">
          <Image className="  object-cover " src={check} alt="check" />
          <p className=" text-[#667085] text-[1.1rem] font-light  leading-7  ">
            Access to all features
          </p>
        </div>
        <div className=" flex items-center gap-2">
          <Image className="  object-cover " src={check} alt="check" />
          <p className=" text-[#667085] text-[1.1rem] font-light  leading-7  ">
            Personalized onboarding
          </p>
        </div>
      </div>
      <div className=" flex gap-4 items-center mt-10">
        <Button variant="outline" className=" rounded-full text-xs">
          Talk to sales
        </Button>
        <Button className=" rounded-full text-xs bg-[#175CD3]">
          Start your free trial
        </Button>
      </div>
    </div>
  );
};

export default BottomSection;
