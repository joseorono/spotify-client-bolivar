
import BodyWrapper from "~/components/BodyWrapper";
import Head from "next/head";
import Link from "next/link";

import SearchForm from "~/components/search/SearchForm";


export default function Busqueda() {
  return (
    <>
        <Head>
            <title>{ "Busqueda Spotify - Constructora Bolivar" }</title>
            <meta name="description" content="Un Cliente de Spotify" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <BodyWrapper hasBackButton={true}>
        <h1>
          Pagina de Busqueda
        </h1>

        <SearchForm />

      </BodyWrapper>
    </>
  );
}

