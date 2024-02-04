import BodyWrapper from "~/components/BodyWrapper";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    
    <>
      <Head>
        <title>{ "Spotify - Constructora Bolivar" }</title>
        <meta name="description" content="Un Cliente de Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyWrapper hasBackButton={false}>
        <p>
          Pagina de Inicio
        </p>
      </BodyWrapper>
    </>
  );
}
