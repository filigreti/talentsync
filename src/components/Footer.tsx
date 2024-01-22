import React from "react";
import logo from "../assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import apple from "../assets/Mobile app store badge.svg";
import google from "../assets/google.svg";

const Footer = () => {
  return (
    <div className=" grid grid-cols-9 gap- justify-evenly">
      <div className=" col-span-4 mr-[5rem] flex flex-col">
        <Image src={logo} className="w-[6.1rem]" alt="logo" />
        <p className=" t text-[#475467] font-light mt-6 leading-6">
          ClearLink is your gateway to effortless, high -<br /> quality video
          conferencing. Join us in shaping <br /> the future of communication!
        </p>
      </div>
      <div className=" col-span-1 col-start-5">
        <p className=" text-xs text-[#667085] font-medium  leading-6">
          Product
        </p>
        <ul className=" flex flex-col gap-y-4 mt-4">
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Overview</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Features</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Solutions</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Tutorials</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Pricing</Link>
          </li>
        </ul>
      </div>
      <div className=" col-span-1 ">
        <p className=" text-xs text-[#667085] font-medium  leading-6">
          Company
        </p>
        <ul className=" flex flex-col gap-y-4 mt-4">
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">About Us</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Careers</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Press</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">News</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <div className=" col-span-1 ">
        <p className=" text-xs text-[#667085] font-medium  leading-6">
          Resources
        </p>
        <ul className=" flex flex-col gap-y-4 mt-4">
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Blog</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Events</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Help Centre</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Tutorials</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Support</Link>
          </li>
        </ul>
      </div>
      <div className=" col-span-1 ">
        <p className=" text-xs text-[#667085] font-medium  leading-6">Legal</p>
        <ul className=" flex flex-col gap-y-4 mt-4">
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Terms</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Privacy</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Cookies</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Licenses</Link>
          </li>
          <li className=" text-[0.85rem] text-[#475467] font-medium  leading-6">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>

      <div className=" col-span-1 ">
        <Button
          className="  hover:no-underline p-0 m-0 h-0  text-xs text-[#175CD3]"
          variant="link"
        >
          Get the app
        </Button>
        <div className=" mt-4 flex flex-col gap-4">
          <Image src={apple} className="w-[8rem]" alt="logo" />
          <Image src={google} className="w-[8rem]" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
