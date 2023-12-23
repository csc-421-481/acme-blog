import Image from "next/image";
import { Avatar, Card, CardHeader, CardBody, Link } from "@nextui-org/react";
import { FileText } from "react-feather";

const TopAuthor = () => {
  return (
    <>
      <Card className="bg-gray p-5 group-hover:drop-shadow-1 group-hover:-translate-y-2 transition-all">
        <div className="flex flex-wrap items-center gap-8">
          <Avatar
            alt="profile image"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="w-24 h-24"
          />
          <div>
            <h3 className="font-semibold text-custom-xl text-dark mb-1">
              Joshua Dreu
            </h3>
            <p>Content Writer</p>
            <span className="flex items-center gap-2 text-sm mt-2.5 text-foreground-500">
              <FileText size={15} />6 Published posts
            </span>
          </div>
        </div>
      </Card>
    </>
  );
};
export default TopAuthor;
