import TeamMember from '@/components/cards/TeamMember'

const page = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold">Author page</h1>
        <p className="text-sm mt-1 ">10 authors</p>
      </div>

      {/* Start Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-5">
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </div>
  )
}

export default page
