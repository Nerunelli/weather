import cn from 'classnames';

interface IProps {
	first: boolean;
	last: boolean;
}

export const RoundedBorder: React.FC<IProps> = ({ first, last }) => {
	return (
		<>
			<div
				className={cn(
					'absolute bottom-0 -left-2 w-2 h-2 bg-neutral-50',
					'after:absolute after:bottom-0 after:left-0 after:content-[""] after:rounded-br-full after:bg-lightGrey after:w-2 after:h-2',
					first && 'hidden',
				)}
			/>
			<div
				className={cn(
					'absolute bottom-0 -right-2 w-2 h-2 bg-neutral-50',
					'after:absolute after:bottom-0 after:right-0 after:content-[""] after:rounded-bl-full after:bg-lightGrey after:w-2 after:h-2',
					last && 'hidden',
				)}
			/>
		</>
	);
};
