import React from 'react';
import {
  Card,
  Spacer,
  Button,
  Input,
  Checkbox,
  Divider,
} from '@nextui-org/react';

import BodyWrapper from "~/components/BodyWrapper";
import Head from "next/head";

export default function Login() {
  return (
    <>
        <Head>
            <title>{ "Perfil Spotify - Constructora Bolivar" }</title>
            <meta name="description" content="Un Cliente de Spotify" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BodyWrapper containerClasses='flex flex-col justify-center items-center' hasBackButton={true}>

        <div className='flex w-full justify-center items-center'>
    
            <Card className='p-4 max-w-sm w-11/12 '>
            <h1 className='h1 text-3xl text-center font-bold mb-6'>Iniciar Sesión</h1>

            <div className='py-8'>
                <Input size="md" placeholder="Email"
                />
                <Spacer y={2} />
                <Input 
                    size="md"
                    placeholder="Password"
                />
            </div>

            <div className="flex justify-around">
                <Checkbox defaultSelected>Remember Me</Checkbox>
            </div>
            <Divider className="my-4" />
            <Button>Sign in</Button>
            </Card>
        </div>

        </BodyWrapper>
    </>
  );
}