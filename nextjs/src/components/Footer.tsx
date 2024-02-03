// components/Footer.tsx

import React from 'react';
import { Link } from '@nextui-org/react';

const Footer: React.FC = () => {
  return (
    <div className='flex text-white-500 align-center justify-center bg-green-500 py-4 px-2'>
      <p className="text-white">
        Realizado por José Oroño. {new Date().getFullYear()}.
      </p>
      <div className="flex">
        <Link href="/about" color="primary">
          Acerca de
        </Link>
        <Link href="/contact" color="primary">
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Footer;
