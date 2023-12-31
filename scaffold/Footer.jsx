import { Link, Spacer } from "@nextui-org/react";
import { GitHub } from "react-feather";

const Footer = () => {
  return (
    <>
      <footer className="xl:container w-5/6 lg:w-4/5 mx-auto">
        <Spacer y={100} className="w-full" />
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 flex flex-col gap-8 pt-12">
          <div className="flex justify-center ">
            <h2 className="text-2xl font-bold font-logo">ACME BLOG</h2>
          </div>
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
          <ul className=" flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link color="foreground" className="hover:text-primary" href="/">
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link color="foreground" className="hover:text-primary" href="/">
                {" "}
                Projects{" "}
              </Link>
            </li>
          </ul>
          <ul className=" flex justify-center gap-6 md:gap-8">
            <li>
              <Link
                href="https://github.com/csc-421-481/"
                rel="noreferrer"
                target="_blank"
                color="foreground"
                className="hover:text-primary"
              >
                <span className="sr-only">GitHub</span>
                <GitHub size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
