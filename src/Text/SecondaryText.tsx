import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export const SecondaryText: React.FC<Props> = ({ children }) => {
	return <p className="font-main text-xs text-grey">{children}</p>;
};
