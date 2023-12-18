"use client";
import { Fragment, useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Spacer,
  Switch,
  Button,
} from "@nextui-org/react";
import useMediaQuery from "@/features/hooks/useMediaQuery";
import { mediaBreakpoints } from "@/lib/constants";
import { useRouter, usePathname } from "next/navigation";
import { Sun } from "react-feather";
import { Moon } from "react-feather";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const pathname = usePathname();
  // Had to use a hook to check for screen size since for some reason the tailwind breakpoint classes don't seem to work with this component
  // tailwind breakpoints: {
  //     sm: "640px",
  //     md: "768px",
  //     lg: "1024px",
  //     xl: "1280px",
  //   }
  const { queryMatches: isSmallScreen } = useMediaQuery(mediaBreakpoints.sm);
  const { queryMatches: isLargeScreen } = useMediaQuery(mediaBreakpoints.lg);

  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Archive", route: "/archive" },
    { label: "About Us", route: "/about" },
    { label: "Contact", route: "/contact" },
  ];
  const handleThemeChange = (value) => {
    if (value) {
      document.documentElement.className = "dark";
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.className = "light";
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);
  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="w-full">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={isSmallScreen && "hidden"}
          />
          <NavbarBrand className="">
            <p className="font-bold text-inherit text-red-500">LOGO</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className={`hidden ${isSmallScreen && "flex"}`}
          justify="center"
        >
          {menuItems.map((each, index) => (
            <NavbarItem key={index}>
              <Link
                color={each.route == pathname ? "primary" : "foreground"}
                href={each.route}
              >
                {each.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className={`hidden ${isLargeScreen && "flex"}`}>
            <Switch
              color="success"
              isSelected={theme == "dark"}
              startContent={<Sun />}
              endContent={<Moon />}
              onValueChange={handleThemeChange}
            />
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/login" variant="flat">
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((each, index) => (
            <Fragment key={index}>
              <NavbarMenuItem key={index}>
                <Link
                  color={each.route == pathname ? "primary" : "foreground"}
                  href={each.route}
                  className="w-full"
                  size="lg"
                >
                  {each.label}
                </Link>
              </NavbarMenuItem>
              <Spacer y={3} />
            </Fragment>
          ))}
          <NavbarMenuItem>
            <Switch
              color="success"
              isSelected={theme == "dark"}
              size="lg"
              startContent={<Sun />}
              endContent={<Moon />}
              onValueChange={handleThemeChange}
            />
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
export default Header;
