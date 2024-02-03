import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button} from "@nextui-org/react";
import {BolivarLogo} from "./BolivarLogo";

import Link from "next/link";

export default function BolivarNavbar() {
  return (
    <Navbar className="bg-green-500 text-white-500" isBordered>
      <NavbarBrand>
        <BolivarLogo />
      </NavbarBrand>

      <NavbarContent className="text-white-500 hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/busqueda">
            Busqueda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/stylestest">
            Test Page
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Iniciado como</p>
              <p className="font-semibold">jose@example.com</p>
            </DropdownItem>
            <DropdownItem key="perfil">Perfil (WIP)</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
