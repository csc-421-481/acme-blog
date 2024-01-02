import { Link, Spacer } from "@nextui-org/react";
import { GitHub } from "react-feather";

const Footer = () => {
  return (
    <>
      <footer className="xl:container w-5/6 lg:w-4/5 mx-auto mt-12 py-5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col gap-8 ">
          <div className="flex justify-center ">
            <h2 className="text-2xl font-bold font-logo">ACME BLOG</h2>
          </div>
          <p className="mx-auto text-center leading-relaxed text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
          <ul className=" flex flex-wrap justify-center gap-6 ">
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
