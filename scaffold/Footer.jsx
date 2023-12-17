import { Link } from "@nextui-org/react";
import { GitHub } from "react-feather";
import { Dribbble } from "react-feather";
import { Twitter } from "react-feather";
import { Instagram } from "react-feather";
import { Facebook } from "react-feather";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 flex flex-col gap-8 mt-8 pt-8">
          <div className="flex justify-center ">
            <h2 className="text-2xl font-bold">LOGO</h2>
          </div>
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link color="foreground" className="hover:text-primary" href="/">
                {" "}
                About{" "}
              </Link>
            </li>
            <li>
              <Link color="foreground" className="hover:text-primary" href="/">
                {" "}
                Careers{" "}
              </Link>
            </li>
            <li>
              <Link color="foreground" className="hover:text-primary" href="/">
                {" "}
                History{" "}
              </Link>
            </li>
            <li>
              <Link color="foreground" className="hover:text-primary" href="/">
                {" "}
                Services{" "}
              </Link>
            </li>
            <li>
              <Link color="foreground" className="hover:text-primary" href="/">
                {" "}
                Projects{" "}
              </Link>
            </li>
            <li>
              <Link color="foreground" className="hover:text-primary" href="/">
                {" "}
                Blog{" "}
              </Link>
            </li>
          </ul>
          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <Link
                href="/"
                rel="noreferrer"
                target="_blank"
                color="foreground"
                className="hover:text-primary"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                rel="noreferrer"
                target="_blank"
                color="foreground"
                className="hover:text-primary"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                rel="noreferrer"
                target="_blank"
                color="foreground"
                className="hover:text-primary"
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                rel="noreferrer"
                target="_blank"
                color="foreground"
                className="hover:text-primary"
              >
                <span className="sr-only">GitHub</span>
                <GitHub />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
