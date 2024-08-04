import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const MainText: React.FC<Props> = ({ children }) => {
  return <p className="font-main text-xs">{children}</p>;
};
