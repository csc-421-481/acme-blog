"use client";
import Author from "@/components/cards/Author";
import AuthorSkeleton from "@/components/skeletons/AuthorSkeleton";
import useGetTeam from "@/features/hooks/swr-requests/useGetTeam";
import { XCircle } from "react-feather";

const TeamMembers = () => {
  const { userData } = useGetTeam();
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold">Acme Blog Team </h1>
        <p className="text-sm mt-1 ">{userData?.length} members</p>
      </div>
      {/* Start Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-5">
        {userData ? (
          userData.length > 0 ? (
            userData.map((each, index) => <Author author={each} key={index} />)
          ) : (
            <div className="flex flex-col gap-3 items-center col-span-3 text-danger">
              <XCircle size={50} />
              <p>No Team member available.</p>
            </div>
          )
        ) : (
          Array(6)
            .fill(true)
            .map((each, index) => <AuthorSkeleton key={index} />)
        )}
      </div>
    </>
  );
};
export default TeamMembers;
