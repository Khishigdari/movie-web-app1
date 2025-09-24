import { Badge } from "@/components/ui/badge";
import { getMovieGenre } from "../../../utils/get-data";
import { GenreResponseType } from "../../../types";

import DetailInfos from "./DetailInfos";
import DetailUpperInfo from "./DetailUpperInfo";

type DetailDynamicPageProps = {
  id: string;
};

export const DetailDynamicPage = async ({ id }: DetailDynamicPageProps) => {
  const genres: GenreResponseType = await getMovieGenre(id);

  return (
    <div>
      <div className="mt-[52px] max-w-[1080px] m-auto">
        <DetailUpperInfo id={id} />

        <div className="flex gap-3 ">
          {genres.genres?.map((genre) => (
            <Badge
              key={genre.id}
              className="rounded-full border border-[#E4E4E7] bg-transparent text-black"
            >
              <p>{genre.name}</p>
            </Badge>
          ))}
        </div>

        <DetailInfos id={id} />
      </div>
    </div>
  );
};
