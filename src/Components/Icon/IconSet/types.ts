import { EIconSet } from './IconSet';

export interface IconProps {
  width?: number;
  height?: number;
}

export type TIconName = keyof typeof EIconSet;
