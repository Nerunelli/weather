import cn from 'classnames';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	active: boolean;
}

export const TabTitle: React.FC<Props> = ({ children, active }) => {
	return (
		<p className={cn('font-main', active && 'text-lightBlue')}>{children}</p>
	);
};
