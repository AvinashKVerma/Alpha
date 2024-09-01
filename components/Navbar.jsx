"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";
import BagLogo from "@/public/BagLogo.jsx";

export default function HomepageNavbar() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar classNames={{ wrapper: "max-w-full px-16" }}>
      <NavbarBrand className="mr-4">
        <AcmeLogo />
        <p className="hidden sm:block font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent justify="start">
        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/home">
              Home
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Products
                </Button>
              </DropdownTrigger>
            </NavbarItem>

            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem key="autoscaling" startContent={icons.scale}>
                <Link href="/products/packaging-type">Packaging Type</Link>
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link color="foreground" href="#">
              Shop By
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-10">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className="flex flex-col text-[12px] text-slate-500 pt-4"
          >
            <BagLogo size={24} fontWeight={0.7} color="black" />
            Bag
          </Link>
        </NavbarItem>
        <NavbarItem className="flex-col pt-4 gap-2 text-[12px]">
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          Profile
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
