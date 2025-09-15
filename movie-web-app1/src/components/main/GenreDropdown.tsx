import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { getMovieGenres } from "../../../utils/get-data";
import { GenreResponseType } from "../../../types";

export async function GenreDropDown() {
  const genresResponse: GenreResponseType = await getMovieGenres();
  console.log("movie genre", genresResponse);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown /> Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[577px] p-5" align="start">
        <DropdownMenuLabel className="text-[24px] leading-8 font-[600]">
          Genres
        </DropdownMenuLabel>
        <p className="text-[16px] leading-6 ml-2 mb-3">
          See lists of movies by genre
        </p>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex flex-wrap gap-4 mt-3 hover:!bg-transparent">
          {genresResponse.genres?.map((genre) => (
            <Link href={`/genre?id=${genre.id}`} key={genre.id}>
              <Badge
                variant="outline"
                key={genre.id}
                className="cursor-pointer"
              >
                {genre.name}
                <ChevronRight />
              </Badge>
            </Link>
          ))}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
