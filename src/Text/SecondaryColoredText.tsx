import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const SecondaryColoredText: React.FC<Props> = ({ children }) => {
  return <p className="font-main text-xs text-lightBlue">{children}</p>;
};
