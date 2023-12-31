"use client";
import useGetUser from "@/features/hooks/swr-requests/useGetUser";
import useMediaQuery from "@/features/hooks/useMediaQuery";
import Cookies from "js-cookie";
import { mediaBreakpoints } from "@/lib/constants";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Spacer,
  Switch,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import {
  Moon,
  Sun,
  LogOut,
  LogIn,
  PlusCircle,
  FilePlus,
  User,
} from "react-feather";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const pathname = usePathname();
  const router = useRouter();
  // Had to use a hook to check for screen size since for some reason the tailwind breakpoint classes don't seem to work with this component
  // tailwind breakpoints: {
  //     sm: "640px",
  //     md: "768px",
  //     lg: "1024px",
  //     xl: "1280px",
  //   }
  const { queryMatches: isSmallScreen } = useMediaQuery(mediaBreakpoints.sm);
  const { userData } = useGetUser(Cookies.get("userId"));
  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Archive", route: "/archive" },
    { label: "Team", route: "/team" },
    { label: "Authors", route: "/authors" },
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
  const authRoutes = ["/login", "/create-account"];
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
            <Link href="/" color="foreground">
              <p className="font-bold text-inherit">LOGO</p>
            </Link>
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
          <NavbarItem className={`hidden ${isSmallScreen && "flex"}`}>
            <Switch
              color="success"
              isSelected={theme == "dark"}
              startContent={<Sun />}
              endContent={<Moon />}
              onValueChange={handleThemeChange}
            />
          </NavbarItem>
          {!authRoutes.includes(pathname) && (
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Avatar
                    size="sm"
                    src={userData?.profileImage}
                    className="cursor-pointer"
                  />
                </DropdownTrigger>
                {userData?.id ? (
                  <DropdownMenu aria-label="user panel actions">
                    <DropdownItem
                      key="new"
                      startContent={<User size={15} />}
                      className="text-foreground"
                      as={Link}
                      href="/profile"
                    >
                      {userData?.firstName} {userData?.lastName}
                    </DropdownItem>
                    <DropdownItem
                      key="create post"
                      startContent={<FilePlus size={15} />}
                      className="text-foreground"
                      as={Link}
                      href="/profile/create-post"
                    >
                      Create Post
                    </DropdownItem>
                    <DropdownItem
                      key="log out"
                      className="text-danger"
                      color="danger"
                      startContent={<LogOut size={15} />}
                      onClick={() => {
                        Cookies.remove("userId");
                        Cookies.remove("token");
                        window.location.href = pathname.includes("/profile")
                          ? "/"
                          : pathname; // needed in order to refresh the page
                      }}
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                ) : (
                  <DropdownMenu aria-label="user panel actions">
                    <DropdownItem
                      key="copy"
                      startContent={<LogIn size={15} />}
                      as={Link}
                      className="text-foreground"
                      href="/login"
                    >
                      Login
                    </DropdownItem>
                    <DropdownItem
                      key="log out"
                      className="text-primary"
                      color="primary"
                      startContent={<PlusCircle size={15} />}
                      as={Link}
                      href="/create-account"
                    >
                      Create Account
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </Dropdown>
            </NavbarItem>
          )}
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
