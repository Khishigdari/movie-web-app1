import { DetailDynamicPage } from "@/components";
import DetailPageSkeleton from "@/components/main/DetailPageSkeleton";
import { Suspense } from "react";
import { getMovieDetailSearchBar } from "../../../../utils/get-data";

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
  const movieDetailData = await getMovieDetailSearchBar(id);
  return (
    <Suspense fallback={<DetailPageSkeleton id={id} />}>
      <DetailDynamicPage id={id} />
      {/* <div className="text-2xl font-bold">{movieDetailData.title}</div>; */}
    </Suspense>
  );
}
