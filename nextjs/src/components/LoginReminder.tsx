
import React from 'react';

import {Card, CardBody, Button} from "@nextui-org/react";
import Link from 'next/link';

const LoginReminder = () => {
  return (
    <>
    <div className="my-8 mx-auto max-w-sm">
        <Card>
            <CardBody className='p-8'>
                <p className='mb-8'>Inicia sesión para acceder a todas las funciones.</p>
                <Link className='block px-8' href={"/login"}>
                    <Button color='primary' className='w-full block text-white-500'>Iniciar Sesión</Button>
                </Link>
            </CardBody>
        </Card>
    </div>
    </>
  );
};

export default LoginReminder;

