import { Card, Skeleton } from "@nextui-org/react";
const BlogPostSkeleton = () => {
  return (
    <>
      <Card className="rounded-lg shadow transition hover:shadow-lg">
        <Skeleton className="overflow-hidden w-full h-56" />

        <div className=" p-4 sm:p-6">
          <Skeleton className="h-5 w-4/5 rounded-full" />
          <div className="flex flex-col gap-3 mt-3">
            <Skeleton className="h-4 w-full rounded-full" />
            <Skeleton className="h-3 w-3/5 rounded-full" />
            <Skeleton className="h-3 w-1/3 rounded-full" />
          </div>
        </div>
      </Card>
    </>
  );
};
export default BlogPostSkeleton;
