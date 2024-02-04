import BodyWrapper from "~/components/BodyWrapper";
import Head from "next/head";
import Link from "next/link";
import LoginReminder from "~/components/LoginReminder";

import Image from 'next/image';
import LogoBolivar from "@/logo-constructora-bolivar.svg";

export default function Home() {
  return (
    
    <>
      <Head>
        <title>{ "Spotify - Constructora Bolivar" }</title>
        <meta name="description" content="Un Cliente de Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyWrapper hasBackButton={false}>
        <h1>
          Inicio
        </h1>
        <div className="flex gap-3 max-w-[640px] mx-auto my-16 justify-between items-center">
          <div className="flex-1 p-4">
            Este proyecto fue creado por José Oroño para la Constructora Bolivar durante el fin de semana del 3-4 de Febrero de 2024,
            con el fin de demostrar sus habilidades en el desarrollo. Dado circunstancias personales, el proyecto no se encuentra terminado pero funcional y estaría feliz de discutirlo. 
          </div>
          <div className="hidden md:block w-[280px]">
            <Image src={LogoBolivar} alt="Constructora Bolivar" className='w-full mx-auto' />
          </div>
        </div>

        <LoginReminder />
      </BodyWrapper>
    </>
  );
}
