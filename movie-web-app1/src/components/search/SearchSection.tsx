"use client";
import { useState } from "react";
import { movieResponseType, MovieType } from "../../../types";
import { getSearchedMovies } from "../../../utils/get-data";
import { Input } from "../ui/input";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import { SearchbarMovieCard } from "../home";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await getSearchedMovies(value);
    setFoundMovies(foundData);
  };

  const isOpen = isFocused && searchValue;

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 300);
  };

  return (
    <div className="relative">
      <Input
        // type="text"
        placeholder="Search.."
        className="w-[379px] pl-8"
        onChange={handleChange}
        value={searchValue}
        onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
        onBlur={handleBlur}
      />

      <SearchResults
        isOpen={isOpen}
        foundMovies={foundMovies}
        searchValue={searchValue}
      />
    </div>
  );
};

type SearchResultsProps = {
  isOpen: boolean;
  // foundMovies: MovieType[];
  foundMovies: movieResponseType;
  searchValue: string;
  setIsOpen: boolean;
};

const SearchResults = ({
  isOpen,
  foundMovies,
  searchValue,
}: SearchResultsProps) => {
  return (
    <Popover
      open={isOpen}
      // onOpenChange={setIsOpen}
      // anchorOrigin={{
      //   vertical: "bottom",
      //   horizontal: 100,
      // }}
    >
      <PopoverTrigger className=" flex justify-self-center"></PopoverTrigger>
      {/* <div className=""> */}
      <PopoverContent
        className="w-[577px] justify-center flex flex-col"
        side="bottom"
        sideOffset={4.5}
        align="center"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
        // sideOffset={665}
      >
        <div>
          {foundMovies?.results.slice(0, 5).map((movie) => {
            return (
              <SearchbarMovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                image={movie.poster_path}
              />
            );
          })}
        </div>
        <Link href={`/search?value=${searchValue}`}>
          <p className="mt-[10px] text-[14px] leading-[20px] font-[500]">
            See all result for "{searchValue}"
          </p>
        </Link>
      </PopoverContent>
      {/* </div> */}
    </Popover>
  );
};
