import cn from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  active: boolean;
  holiday?: boolean;
}

export const TabTitle: React.FC<Props> = ({
  children,
  active,
  holiday = false,
}) => {
  return (
    <p
      className={cn(
        'font-main',
        !active && 'text-lightBlue',
        holiday && !active && 'text-red-500',
      )}
    >
      {children}
    </p>
  );
};
