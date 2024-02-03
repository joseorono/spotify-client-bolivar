import { ReactNode } from "react";
import BsCenteredContainer from "./BsCenteredContainer";

interface BodyWrapperProps {
  children: ReactNode;
}

const BodyWrapper = ({children} : BodyWrapperProps) => {
  return (
    <main className="light">
      {
        /* text-foreground bg-background*/
      }
      <BsCenteredContainer>
        {children}
      </BsCenteredContainer>
    </main>
  );
};

export default BodyWrapper;
