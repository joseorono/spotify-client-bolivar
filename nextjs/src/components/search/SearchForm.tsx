
'use client'

// Components
import Link from "next/link";
import {Select, SelectItem, Spinner} from "@nextui-org/react";
import { Input, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

// Hooks / Libraries
import { useDebounce } from "use-debounce";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchResults from "./SearchResults";
import ErrorNotice from "../ErrorNotice";

// Referencias:
// Para use-debounce: https://www.npmjs.com/package/use-debounce
// Guia: https://dev.to/manishkc104/debounce-input-in-react-3726

const SearchTypes: SearchTypeOptions[] = [
    { label: 'Artista', value: 'artist' },
    { label: 'Album', value: 'album' },
    { label: 'Canción', value: 'track' },
];

export default function SearchForm() {
    const [inputValue, setInputValue] = useState("");
    const [debouncedValue] = useDebounce(inputValue, 500);
    const [searchType, setSearchType] = useState< Set<SpotifySearchTypes> >( new Set(["track"]) );
  
    let isNotEmptyQuery = (debouncedValue.length > 0) && (searchType.size > 0);

    // process.env.NEXT_PUBLIC_API_ROOT

    const getSearchURL = (): string => {

        const url = `${process.env.NEXT_PUBLIC_API_ROOT}/search/${Array.from(searchType)[0]}?query=${
            encodeURIComponent(debouncedValue).trim()
        }`;
        console.log("URL: " + url);
        return url;
    }

    const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
      const value = e.target.value;
      console.log("Cambio query de busqueda");
      //console.log(e.currentTarget.value);
      console.log("Buscando: " + e.target.value);
      setInputValue(value);
    };

    // https://stackoverflow.com/questions/77068657/nextui-select-component-onchange-option
    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchType(new Set([e.target?.value as SpotifySearchTypes]));
        console.log("Selected Category:", Array.from(searchType));

        // Quizas deba usar useMemo en el futuro
        // Usar Array.from() para convertir set en array
    };

    const { isPending, isSuccess, error, data } = useQuery({
        queryKey: ['spotifySearch', Array.from(searchType)[0], searchType],
        queryFn: () =>
          fetch( getSearchURL() ).then((res) =>
            res.json(),
          ),
        enabled: isNotEmptyQuery,
    });


  return (
    <>
        <div className="flex justify-center p-4">
            <Input
                radius="full"
                placeholder="Search..."
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>

        <div className="p-4">
            <Select
            label="Tipo de Búsqueda"
            placeholder="Selecciona una categoría"
            startContent={<Icon icon="mdi:music-note-quarter" className="text-xl text-black-400" />}
            defaultSelectedKeys={["track"] satisfies SpotifySearchTypes[] }
            //defaultSelectedKeys={searchType}
            onChange={handleSelectionChange}
            className="max-w-xs"
            >
                {SearchTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                    {type.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
        
        <div className="p-4">
            <div className="text-center italic text-black-300">
                { (isPending && isNotEmptyQuery) ? <Spinner size="lg" /> : ""}
                { (isPending && !isNotEmptyQuery) ? "¿Qué te gustaría escuchar hoy?" : ""}
                {error && (<><ErrorNotice message="Falla en la solicitud a la base de datos." /></>)}
            </div>

            {
                isSuccess && 
                (<SearchResults type={searchType.values().next().value} data={data} />)
            }
            
        </div>
        

        <div id="debug_container">
            <div>
                <h4>URL Endpoint:</h4>
                <p>
                    {process.env.NEXT_PUBLIC_API_ROOT}	
                </p>
            </div>
            <p>Debounced Search Query: {debouncedValue}</p>
            <p>Type Value: {searchType}</p>
        </div>
    </>
  );
}

