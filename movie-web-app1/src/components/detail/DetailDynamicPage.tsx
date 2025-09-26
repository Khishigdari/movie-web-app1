import { Badge } from "@/components/ui/badge";
import { getMovieDetail, getMovieGenre } from "../../../utils/get-data";
import { GenreResponseType } from "../../../types";

import DetailInfos from "./DetailInfos";
import DetailUpperInfo from "./DetailUpperInfo";

type DetailDynamicPageProps = {
  id: string;
};

export const DetailDynamicPage = async ({ id }: DetailDynamicPageProps) => {
  const genres: GenreResponseType = await getMovieGenre(id);
  const detail = await getMovieDetail(id);

  return (
    <div>
      <div className="md:mt-[52px] mt-[32px] max-w-[1080px] m-auto">
        <DetailUpperInfo id={id} />
        <div className="px-5 md:px-0 flex gap-[34px]">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
            className="w-[100px] h-[148px] block md:hidden bg-[#F4F4F5] md:rounded-lg  "
          ></img>
          <div>
            <div>
              {/* flex gap-3 */}
              {genres.genres?.map((genre) => (
                <Badge
                  key={genre.id}
                  className="rounded-full border border-[#E4E4E7] bg-transparent text-black mr-3 mb-3"
                >
                  <p>{genre.name}</p>
                </Badge>
              ))}
            </div>
            <div className="block md:hidden text-[16px] leading-[24px] my-5">
              {detail.overview}
            </div>
          </div>
        </div>

        <DetailInfos id={id} />
      </div>
    </div>
  );
};
