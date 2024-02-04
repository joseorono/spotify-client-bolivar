

import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import React, { ReactNode } from 'react';

import { Icon } from '@iconify/react';

interface IErrorNoticeProps {
  message?: string;
}

const ErrorNotice: React.FC<IErrorNoticeProps> = (
  { message = "" }
  ) => {
  return (
    <Card className="max-w-[400px] mx-auto my-16">
        <CardHeader className="flex gap-1 text-left">
        <Icon icon="mdi:arrow-back" className="text-5xl text-red-500" />
        <div className="flex-1 flex flex-col">
            <p className="text-md">Ha habido un error.</p>
            <p className="text-small text-default-500">Contacte a su Administrador</p>
        </div>
        </CardHeader>
        <Divider/>
        {
            message &&
            <CardBody>
                <p>{message}</p>
            </CardBody>
        }

    </Card>
  );
}

export default ErrorNotice;

