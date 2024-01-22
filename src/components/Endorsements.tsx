import Image from "next/image";
import shopify from "../assets/Shopify.com svg.svg";
import coinbase from "../assets/Coinbase svg.svg";
import dropbox from "../assets/Dropbox svg.svg";
import intercom from "../assets/Intercom svg.svg";
import marvel from "../assets/Marvel svg.svg";
import automatic from "../assets/Automattic svg.svg";

const Endorsements = () => {
  return (
    <div>
      <p className=" text-center text-[#475467] text-sm font-normal">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className=" flex justify-center items-center gap-[5rem] mt-12">
        <Image
          className="  object-cover w-[8.5rem]"
          src={shopify}
          alt="shopify"
        />
        <Image
          className="  object-cover w-[8.5rem]"
          src={coinbase}
          alt="coinbase"
        />
        <Image
          className="  object-cover w-[8.5rem]"
          src={dropbox}
          alt="dropbox"
        />
        <Image
          className="  object-cover w-[8.5rem]"
          src={intercom}
          alt="intercom"
        />
        <Image
          className="  object-cover w-[8.5rem]"
          src={marvel}
          alt="marvel"
        />
        <Image
          className="  object-cover w-[8.5rem]"
          src={automatic}
          alt="automatic"
        />
      </div>
    </div>
  );
};

export default Endorsements;
