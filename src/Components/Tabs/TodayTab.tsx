import { useMemo } from 'react';
import dayjs from 'dayjs';
import { TabTitle } from '../Text/TabTitle';
import { ICurrentWeatherData } from '../../types';
import { generateTodayIconName } from '../../utils';
import { WeatherIcon } from '../Icon/WeatherIcon';
import { TIconName } from '../Icon/IconSet/types';
import { SecondaryText } from '../Text/SecondaryText';
import { CurrentTemperatureTag } from '../Tags/CurrentTemperatureTag';
import cn from 'classnames';

interface IProps {
  data: ICurrentWeatherData;
  active: boolean;
}

export const TodayTab: React.FC<IProps> = ({ data, active }) => {
  const iconName = useMemo(() => generateTodayIconName(data), [data]);

  return (
    <>
      <div className="mr-auto flex h-full flex-col items-start">
        <div className="flex flex-col items-start">
          <TabTitle active={active}>Сейчас</TabTitle>
          <SecondaryText>{dayjs().format('HH:mm')}</SecondaryText>
        </div>
        <div className={cn('mt-auto', active && 'mb-2')}>
          <CurrentTemperatureTag
            temperature={data.temp_c}
            feelsLike={data.feelslike_c}
          />
        </div>
      </div>
      <div>
        <WeatherIcon iconName={iconName as TIconName} />
      </div>
    </>
  );
};
