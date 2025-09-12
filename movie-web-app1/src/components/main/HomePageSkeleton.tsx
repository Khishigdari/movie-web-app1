import { Skeleton } from "../ui/skeleton";

export const HomePageSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-screen h-[600px] mb-[82px]" />
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="mt-[82px]">
          <div className="flex justify-between max-w-[1280px] m-auto">
            <Skeleton className="rounded-full h-[32px] w-[250px]"></Skeleton>
            <Skeleton className="rounded-full h-[32px] w-[165px]"></Skeleton>
          </div>
          <div className="max-w-[1280px] m-auto flex justify-between gap-[32px] rounded-lg  mt-[32px] flex-wrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton className="w-[230px] h-[430px]" key={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
