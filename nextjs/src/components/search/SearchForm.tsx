
'use client'

// Components
import Link from "next/link";
import {Select, SelectItem} from "@nextui-org/react";
import { Input, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

// Hooks / Libraries
import { useDebounce } from "use-debounce";
import { useState } from "react";

type SearchTypes = 'artist' | 'album' | 'track';

interface SearchTypeOptions {
    label: string;
    value: SearchTypes;
}

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
    const [searchType, setSearchType] = useState< Set<SearchTypes> >( new Set(["track"]) );
  
    // process.env.NEXT_PUBLIC_API_ROOT

    const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
      const value = e.target.value;
      console.log("Cambio query de busqueda");
      //console.log(e.currentTarget.value);
      console.log("Buscando: " + e.target.value);
      setInputValue(value);
    };

    // https://stackoverflow.com/questions/77068657/nextui-select-component-onchange-option
    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchType(new Set([e.target?.value as SearchTypes]));
        console.log("Selected City", Array.from(searchType));

        // Quizas deba usar useMemo 
        // Usar Array.from() para convertir set en array
    };


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
            defaultSelectedKeys={["track"] satisfies SearchTypes[] }
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

