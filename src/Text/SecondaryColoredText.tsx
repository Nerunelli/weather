import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export const SecondaryColoredText: React.FC<Props> = ({ children }) => {
	return <p className="font-main text-xs text-lightBlue mt-2">{children}мм</p>;
};
