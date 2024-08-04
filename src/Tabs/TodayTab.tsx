import { useMemo } from 'react';
import dayjs from 'dayjs';
import { TabTitle } from '../Text/TabTitle';
import { ICurrentWeatherData } from '../types';
import { generateDailyIconName, isHoliday } from '../utils';
import { WeatherIcon } from '../WeatherIcon';
import { TIconName } from '../Icons/types';
import { SecondaryText } from '../Text/SecondaryText';
import { CurrentTemperatureTag } from '../Tags/CurrentTemperatureTag';
import cn from 'classnames';

interface IProps {
  data: ICurrentWeatherData;
  active: boolean;
}

export const TodayTab: React.FC<IProps> = ({ data, active }) => {
  const iconName = useMemo(() => generateDailyIconName(data), [data]);

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
