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
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    const foundData = await getSearchedMovies(value);
    if (value.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    setFoundMovies(foundData);
  };

  return (
    <div className="relative">
      <Input
        // type="text"
        placeholder="Search.."
        className="w-[379px] pl-8"
        onChange={handleChange}
        value={searchValue}
      />
      <div className="sticky">
        <SearchResults
          isOpen={isOpen}
          foundMovies={foundMovies}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
};

type SearchResultsProps = {
  isOpen: boolean;
  foundMovies: MovieType[];
  searchValue: string;
};

const SearchResults = ({
  isOpen,
  foundMovies,
  searchValue,
}: SearchResultsProps) => {
  return (
    <Popover open={isOpen}>
      <PopoverTrigger className="hidden"></PopoverTrigger>
      <PopoverContent className="w-[577px] sticky mt-[52px]">
        {foundMovies?.results.slice(0, 5).map((movie) => {
          return (
            // <div
            //   key={movie.id}
            //   title={movie.title}
            //   rating={movie.vote_average}
            //   image={movie.poster_path}
            // >
            //   {movie.title}
            // </div>
            <SearchbarMovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              image={movie.poster_path}
            />
          );
        })}
        <Link href={`/search?value=${searchValue}`}>
          <p className="mt-[10px] text-[14px] leading-[20px] font-[500]">
            See all result for "{searchValue}"
          </p>
        </Link>
      </PopoverContent>
    </Popover>
  );
};
