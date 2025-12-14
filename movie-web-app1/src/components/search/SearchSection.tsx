"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { movieResponseType } from "../../../types";
import { getSearchedMovies } from "../../../utils/get-data";
import { Input } from "../ui/input";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import { SearchbarMovieCard } from "../home";
import { Spinner } from "@/components/ui/spinner";

export const SearchSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);

    if (value.trim() === "") {
      setFoundMovies(null);
      return;
    }

    setLoading(true);
    const foundData = await getSearchedMovies(value);
    setFoundMovies(foundData);
    setLoading(false);
  };

  const handleBlur = () => {
    setTimeout(() => setIsFocused(false), 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.trim() !== "") {
      router.push(`/search?value=${searchValue}`);
    }
  };

  const isOpen = isFocused && searchValue !== "";

  return (
    <div className="relative">
      <Input
        placeholder="Search.."
        className="w-[379px] pl-8"
        onChange={handleChange}
        value={searchValue}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />

      <SearchResults
        isOpen={isOpen}
        foundMovies={foundMovies}
        searchValue={searchValue}
        loading={loading}
      />
    </div>
  );
};

type SearchResultsProps = {
  isOpen: boolean;
  foundMovies: movieResponseType | null;
  searchValue: string;
  loading: boolean;
};

const SearchResults = ({
  isOpen,
  foundMovies,
  searchValue,
  loading,
}: SearchResultsProps) => {
  if (!isOpen) return null;

  return (
    <Popover open={isOpen}>
      <PopoverTrigger className="flex justify-self-center"></PopoverTrigger>
      <PopoverContent
        className="md:w-[577px] w-[335px] justify-center flex flex-col"
        side="bottom"
        sideOffset={4.5}
        align="center"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div>
          {loading ? (
            <div className="m-auto py-10">
              <Spinner className="w-9 h-9 m-auto opacity-40" />
            </div>
          ) : foundMovies && foundMovies.results.length > 0 ? (
            foundMovies.results
              .slice(0, 5)
              .map((movie) => (
                <SearchbarMovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  rating={movie.vote_average}
                  image={movie.poster_path}
                />
              ))
          ) : (
            <p className="text-center text-gray-500 py-4">
              No results found for "{searchValue}"
            </p>
          )}
        </div>

        {!loading && foundMovies && foundMovies.results.length > 0 && (
          <Link href={`/search?value=${searchValue}`}>
            <p className="mt-[10px] text-[14px] leading-[20px] font-[500]">
              See all results for "{searchValue}"
            </p>
          </Link>
        )}
      </PopoverContent>
    </Popover>
  );
};
