import { DetailDynamicPage } from "@/components";
import DetailPageSkeleton from "@/components/main/DetailPageSkeleton";
import { Suspense } from "react";

type DetailDynamicPageProps = {
  params: Promise<{ id: string }>;
};
export default async function Home({ params }: DetailDynamicPageProps) {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  return (
    <Suspense fallback={<DetailPageSkeleton id={id} />}>
      <DetailDynamicPage id={id} />
    </Suspense>
  );
}
