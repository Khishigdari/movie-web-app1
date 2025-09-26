import { Skeleton } from "../ui/skeleton";

export const HomePageSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-screen md:h-[600px] h-[246px] mb-[82px]" />
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="mt-[82px] md:p-0 p-5">
          <div className="flex justify-between max-w-[1280px] m-auto">
            <Skeleton className="rounded-full h-[32px] md:w-[250px] w-[145px]"></Skeleton>
            <Skeleton className="rounded-full md:h-[32px] h-[36px] w-[125px] md:w-[165px]"></Skeleton>
          </div>
          <div className="max-w-[1280px] m-auto flex justify-between md:gap-[32px] gap-[20px] rounded-lg mt-[20px] md:mt-[32px] flex-wrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton
                className="md:w-[230px] w-[157px] h-[310px] md:h-[430px]"
                key={i}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
