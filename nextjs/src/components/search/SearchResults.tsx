'use client'
import { ReactNode } from "react";

import {
  Snippet
} from "@nextui-org/react";


import { Icon } from '@iconify/react';
import Link from "next/link";
import ErrorNotice from "../ErrorNotice";


interface SearchResultsProps {
    type: SpotifySearchTypes;
    data: any;
}

const SearchResults = ({type, data} : SearchResultsProps) => {
    const hasData = data ? true : false;

    if (!hasData) {
        return (
            <ErrorNotice message="No se encontraron resultados" />
        );
    }

    return (
    <>
    <div>
        <p>
            Los Resultados de la busqueda son: <small>(Tipo: {type})</small>
        </p>
    </div>
    <div>
        <p>
            { JSON.stringify(data) }
        </p>
    </div>
    </>
    );
};

export default SearchResults;
