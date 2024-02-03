
import BodyWrapper from "~/components/BodyWrapper";
import Head from "next/head";
import Link from "next/link";


import {Divider} from "@nextui-org/react";

import {Button} from '@nextui-org/react'

import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

export default function StylesTest() {
    return (
    <>
        <Head>
            <title>Create T3 App</title>
            <meta name="description" content="Un Cliente de Spotify" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <BodyWrapper>
            
            <Card>
                <CardBody>
                    <p>Make beautiful websites regardless of your design experience.</p>
                </CardBody>
            </Card>
        
            <Button color="primary" radius="full">
                Click Me
            </Button>
            <Divider className="my-4" />
            <Button color="secondary" radius="full">
                Click Me
            </Button>
        </BodyWrapper>
    </>
    );
}
