import Image from "next/image";
import { ThemeToggler } from "./ThemeToggler";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { GenreDropDown, SearchSection } from "../main";

export const MenuBar = () => {
  return (
    <header className="w-full sticky top-0 z-10">
      <div
        className="max-w-[1280px] m-auto px-20 py-[11.5px] flex justify-between items-center mb-6 
    "
      >
        <Link href="/">
          <Image
            src={"/images/LogoLightMode.svg"}
            alt=""
            width={92}
            height={20}
          ></Image>
        </Link>

        <div className="flex gap-6">
          <GenreDropDown />
          <div className="flex items-center">
            <Search className="w-3 h-3 -mr-6" />
            {/* <Input
              type="text"
              placeholder="Search.."
              className="w-[379px] pl-8"
            /> */}
            <SearchSection />
          </div>
        </div>

        <ThemeToggler />
      </div>
    </header>
  );
};
