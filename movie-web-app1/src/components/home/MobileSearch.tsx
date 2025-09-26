"use client";
import { useState } from "react";
import { GenreDropDown, SearchSection } from "../main";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
import { GenreResponseType } from "../../../types";

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
        </div>
      ) : (
        <div className="flex justify-between max-w-[768px]">
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
            variant="outline"
          >
            <Search />
          </Button>
        </div>
      )}
    </div>
  );
};
