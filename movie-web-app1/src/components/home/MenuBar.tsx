import Image from "next/image";
import { ThemeToggler } from "./ThemeToggler";
import Link from "next/link";
import { Search } from "lucide-react";

import { GenreDropDown, SearchSection } from "../main";
import { MobileSearch } from "./MobileSearch";
import { getMovieGenres } from "../../../utils/get-data";
import { GenreResponseType } from "../../../types";

export const MenuBar = async () => {
  const genresResponse: GenreResponseType = await getMovieGenres();
  return (
    <header className="w-full sticky top-0 z-10 bg-background">
      <div
        className="max-w-[1280px]  m-auto md:px-20 p-5 md:py-[11.5px] flex justify-between items-center md:mb-6 mb-0
    "
      >
        <Link href="/" className="max-md:flex max-md:justify-items-start">
          <Image
            src={"/images/LogoLightMode.svg"}
            alt=""
            width={92}
            height={20}
            // className="hidden md:block"
          ></Image>
        </Link>
        {/* desktop */}
        <div className="hidden md:block">
          <div className="md:flex hidden gap-6 ">
            <GenreDropDown genresResponse={genresResponse} />
            <div className="flex items-center ">
              <Search className="w-3 h-3 -mr-6" />

              <SearchSection />
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="flex gap-3">
          <div className="block md:hidden">
            <MobileSearch genresResponse={genresResponse} />
          </div>

          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};
