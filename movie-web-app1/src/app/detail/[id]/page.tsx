import { DetailDynamicPage } from "@/components";
import DetailPageSkeleton from "@/components/main/DetailPageSkeleton";
import { Suspense } from "react";
import {
  getMovieDetailSearchBar,
  getMovieTrailers,
} from "../../../../utils/get-data";
import { TrailerResponseType } from "../../../../types";
import { TrailerDialog } from "@/components/trailer/TrailerDialog";

type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: DetailDynamicPageProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetailData = await getMovieDetailSearchBar(id);

  return {
    title: `Movie Web App | ${movieDetailData.title}`,
  };
};
export default async function Home({ params }: DetailDynamicPageProps) {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  // const movieDetailData = await getMovieTrailers(id);
  // const trailerData: TrailerResponseType = await getMovieTrailers(id);
  // const trailer = trailerData.results.find((item) => item.type === "Trailer");
  return (
    <Suspense fallback={<DetailPageSkeleton id={id} />}>
      <DetailDynamicPage id={id} />
      {/* <>
        <TrailerDialog youtubeKey={trailer?.key} />
      </> */}
      {/* <div className="text-2xl font-bold">{movieDetailData.title}</div>; */}
    </Suspense>
  );
}
