import { Card, Skeleton } from "@nextui-org/react";

const AuthorSkeleton = () => {
  return (
    <>
      <Card className="bg-gray p-5 group-hover:drop-shadow-1 group-hover:-translate-y-2 transition-all">
        <div className="flex  items-center gap-6">
          <div className=" h-24  overflow-hidden">
            <Skeleton className="w-24 h-24 rounded-full" />
          </div>
          <div className="flex flex-col gap-3 flex-grow">
            <Skeleton className="w-full h-5 rounded-full" />
            <Skeleton className="w-3/5 h-4 rounded-full" />
            <Skeleton className="w-2/5 h-4 rounded-full" />
          </div>
        </div>
      </Card>
    </>
  );
};
export default AuthorSkeleton;
