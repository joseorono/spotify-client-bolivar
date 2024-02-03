import { ReactNode } from "react";
import BsCenteredContainer from "./BsCenteredContainer";

import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button
} from "@nextui-org/react";
import BolivarNavbar from "./header/BolivarNavbar";

import { Icon } from '@iconify/react';
import Link from "next/link";
import Footer from "./Footer";

interface BodyWrapperProps {
  hasBackButton: boolean;
  children: ReactNode;
}

const BodyWrapper = ({children, hasBackButton = false} : BodyWrapperProps) => {
  return (
    <main className="light flex flex-col min-h-svh">

      <BolivarNavbar />
      
      <BsCenteredContainer extraClasses="flex-1 my-8">

        {
          hasBackButton && (
            <>
            <Link href="/">
              <Button className="my-4 hover:font-bold text-black-500" variant="light" 
                startContent={<Icon icon="mdi:arrow-back" className="text-2xl text-black-400" />}>
                Regresar
              </Button>
            </Link>
            </>
          )
        }

        {children}
      </BsCenteredContainer>

      <Footer />
    </main>
  );
};

export default BodyWrapper;
