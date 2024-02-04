
import { ReactNode } from "react";

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


import { Icon } from '@iconify/react';
import Link from "next/link";


interface SearchResultsProps {
    type: SpotifySearchTypes;
    data: any;
}

const SearchResults = ({type, data} : SearchResultsProps) => {
    const hasData = data ? true : false;
    return (
    <>
    <div>
        <p>
            Los Resultados de la busqueda son: <small>(Tipo: {type})</small>
        </p>
    </div>
    <div>
        <p>
            { hasData? JSON.stringify(data) : "No se envió data" }
        </p>
    </div>
    </>
    );
};

export default SearchResults;
