import { ReactNode } from 'react';
import cn from 'classnames';
import { RoundedBorder } from './RoundedBorders';

interface IProps {
  visible: boolean;
  active: boolean;
  children: ReactNode;
  first?: boolean;
  last?: boolean;
  lastVisible?: boolean;
  onClick?: () => void;
}

export const DateTab: React.FC<IProps> = ({
  visible,
  active,
  children,
  first = false,
  last = false,
  lastVisible = false,
  onClick,
}) => {
  return (
    <button
      className={cn(
        'flex w-52 relative justify-center rounded-t-lg bg-neutral-50 p-2',
        lastVisible ? 'mr-0' : 'mr-2',
        active ? '' : 'rounded-lg mb-2',
        !visible && 'hidden',
      )}
      onClick={onClick}
    >
      {active && <RoundedBorder first={first} last={last} />}
      {children}
    </button>
  );
};
