
import BodyWrapper from "~/components/BodyWrapper";
import Head from "next/head";
import Link from "next/link";


export default function Perfil() {
  return (
    <>
      <Head>
          <title>{ "Perfil Spotify - Constructora Bolivar" }</title>
          <meta name="description" content="Un Cliente de Spotify" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
    <BodyWrapper hasBackButton={true}>
      <p>
        Pagina de Perfil
      </p>
    </BodyWrapper>
    </>
  );
}

