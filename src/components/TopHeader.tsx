import logo from "../assets/logo.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TopHeader = () => {
  return (
    <header className=" bg-[#F2F4F7] sticky top-[1px] z-50 px-4 border border-input rounded-full py-3 flex items-center justify-between ">
      <Image src={logo} className="w-[6.1rem]" alt="logo" />

      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" bg-transparent text-[#667085] text-xs">
                Products
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" bg-transparent text-[#667085] text-xs">
                Solutions
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" bg-transparent text-[#667085] text-xs">
                Resources
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <Link
              className=" font-medium hover:text-accent-foreground focus:text-accent-foreground text-[#667085] text-xs"
              href="#"
            >
              Pricing
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className=" flex gap-4 items-center">
        <Button variant="outline" className=" rounded-full text-xs">
          Talk to sales
        </Button>
        <Button className=" rounded-full text-xs bg-[#175CD3]">
          Sign up for free
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;
