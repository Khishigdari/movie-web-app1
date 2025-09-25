"use client";
import { useState } from "react";
import { GenreDropDown, SearchSection } from "../main";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
import { GenreResponseType } from "../../../types";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggler } from "./ThemeToggler";

export const MobileSearch = ({
  genresResponse,
}: {
  genresResponse: GenreResponseType;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block md:hidden">
      {isOpen ? (
        <div className="flex ">
          <div className="flex gap-3">
            <div>
              <GenreDropDown genresResponse={genresResponse} />
            </div>
            <SearchSection />
          </div>

          <div className="z-20">
            <Button
              className="border-0 -ml-[42px]"
              onClick={() => {
                setIsOpen(false);
              }}
              variant="outline"
            >
              <X className="border-0 bg-transparent" />
            </Button>
          </div>
          {/* <div className={isOpen ? "hidden" : "block"}>
            <ThemeToggler />
          </div> */}
        </div>
      ) : (
        <div className="flex justify-between max-w-[768px]">
          <Link href="/">
            <Image
              src={"/images/LogoLightMode.svg"}
              alt=""
              width={92}
              height={20}
              //   className="hidden md:block"
            ></Image>
          </Link>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
            variant="outline"
          >
            <Search />
          </Button>
          {/* <div className="">
            <ThemeToggler />
          </div> */}
        </div>
      )}
    </div>
  );
};
