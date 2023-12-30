import TopBlogPost from "../cards/TopBlogPost";

const TopBlogPosts = () => {
  return (
    <>
      <section className="my-8">
        <div className="flex flex-col md:flex-row gap-6">
          <TopBlogPost />
          <TopBlogPost />
        </div>
      </section>
    </>
  );
};
export default TopBlogPosts;
