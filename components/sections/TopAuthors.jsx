import TopAuthor from "../cards/TopAuthor";
import { Link, Divider } from "@nextui-org/react";

const TopAuthors = () => {
  return (
    <>
      <section className="my-8">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold my-6">Top Authors</h2>
          <Link
            href="#"
            color="foreground"
            underline="hover"
            className="text-sm hover:text-primary"
            showAnchorIcon
          >
            All Authors
          </Link>
        </div>
        <Divider className="my-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <TopAuthor />
          <TopAuthor />
          <TopAuthor />
        </div>
      </section>
    </>
  );
};
export default TopAuthors;
