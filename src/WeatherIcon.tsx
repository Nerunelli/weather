import React from 'react';
import { IconProps } from './Icons/types';
import { getIcon } from './utils';
import { EIconSet } from './Icons/IconSet';

interface Props extends IconProps {
  iconName: keyof typeof EIconSet;
}

export const WeatherIcon: React.FC<Props> = ({
  iconName,
  width = 60,
  height = 60,
}) => {
  const Icon = getIcon(iconName);

  return <Icon width={width} height={height} />;
};
