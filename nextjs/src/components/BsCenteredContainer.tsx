import React, { ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
  whiteBg?: boolean;
  extraClasses?: string;
}

const BsCenteredContainer: React.FC<IContainerProps> = (
  { children,
    extraClasses = ""
  }
  ) => {
  return (
    <div className={"mx-auto max-w-screen-lg " + extraClasses}>
      {children}
    </div>
  );
}

export default BsCenteredContainer;

