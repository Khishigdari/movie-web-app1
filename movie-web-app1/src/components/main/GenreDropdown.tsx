// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import { Badge } from "../ui/badge";
// import Link from "next/link";

// const GENRES = [
//   {
//     name: "Action",
//   },
//   {
//     name: "Adventure",
//   },
//   {
//     name: "Comedy",
//   },
//   {
//     name: "Horror",
//   },
//   {
//     name: "Sci-fi",
//   },
// ];

// export function GenreDropdown() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline">
//           <ChevronDown /> Genre
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="" align="start">
//         <DropdownMenuLabel className="text-2xl font-bold">
//           Genres
//         </DropdownMenuLabel>
//         <p className="px-2">See list of movies by genre</p>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem className="hover:!bg-transparent">
//           {GENRES.map((genre) => (
//             <Link href="/genre">
//               <Badge variant="outline">
//                 {genre.name}
//                 <ChevronRight />
//               </Badge>
//             </Link>
//           ))}
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

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

const genres = [
  {
    genre: "Action",
  },
  {
    genre: "Adventure",
  },
  {
    genre: "Animation",
  },
  {
    genre: "Action",
  },
  {
    genre: "Biography",
  },
  {
    genre: "Comedy",
  },
  {
    genre: "Crime",
  },
  {
    genre: "Documentary",
  },
  {
    genre: "Drama",
  },
  {
    genre: "Family",
  },
  {
    genre: "Fantasy",
  },
  {
    genre: "Film-Noir",
  },
  {
    genre: "Game-Show",
  },
  {
    genre: "History",
  },
  {
    genre: "Horror",
  },
  {
    genre: "Music",
  },
  {
    genre: "Musical",
  },
  {
    genre: "Mystery",
  },
  {
    genre: "News",
  },
  {
    genre: "Reality-TV",
  },
  {
    genre: "Romance",
  },
  {
    genre: "Sci-Fi",
  },
  {
    genre: "Short",
  },
  {
    genre: "Sport",
  },
  {
    genre: "Talk-Show",
  },
  {
    genre: "Thriller",
  },
  {
    genre: "War",
  },
  {
    genre: "Western",
  },
];

export function GenreDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <ChevronDown /> Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Genres</DropdownMenuLabel>
        <p>See lists of movies by genre</p>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {genres.map((genre, index) => (
            <Badge variant="outline" key={index}>
              {genre.genre}
              <ChevronRight />
            </Badge>
          ))}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
