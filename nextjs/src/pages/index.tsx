import BodyWrapper from "~/components/BodyWrapper";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Un Cliente de Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyWrapper>
        <p>
          Welcome to my App!
        </p>
      </BodyWrapper>
      
    </>
  );
}
