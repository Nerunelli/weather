import { useMemo } from 'react';
import dayjs from 'dayjs';
import { DAYS_OF_WEEK, MONTH } from '../../consts';
import { TabTitle } from '../Text/TabTitle';
import { IForecastWeatherData } from '../../types';
import { generateFutureDailyIconName, isHoliday } from '../../utils';
import { WeatherIcon } from '../Icon/WeatherIcon';
import { TIconName } from '../Icon/IconSet/types';
import { SecondaryColoredText } from '../Text/SecondaryColoredText';
import { SecondaryText } from '../Text/SecondaryText';
import cn from 'classnames';
import { TemperatureTag } from '../Tags/TemperatureTag';

interface IProps {
  data: IForecastWeatherData;
  active: boolean;
  onClick?: () => void;
}

export const FutureDateTab: React.FC<IProps> = ({ data, active }) => {
  const day = dayjs(data.date);

  const dayOfWeak = DAYS_OF_WEEK[day.day()];
  const month = MONTH[day.month()];

  const minTemperature = Math.round(data.day.mintemp_c);
  const maxTemperature = Math.round(data.day.maxtemp_c);

  const iconName = useMemo(() => generateFutureDailyIconName(data), [data]);

  return (
    <>
      <div className="mr-auto flex h-full flex-col items-start">
        <div className="flex flex-col items-start">
          <TabTitle
            active={active}
            holiday={isHoliday(day)}
          >{`${dayOfWeak}, ${day.date()} ${month}`}</TabTitle>
          <SecondaryText>
            {dayjs().isSame(day, 'd')
              ? 'Сегодня'
              : dayjs().add(1, 'd').isSame(day, 'd')
                ? 'Завтра'
                : ''}
          </SecondaryText>
        </div>
        <div className={cn('w-full mt-auto', active && 'mb-2')}>
          <div className="flex">
            <TemperatureTag
              temperature={minTemperature}
              marginTop={maxTemperature - minTemperature}
            />
            <TemperatureTag temperature={maxTemperature} />
          </div>
        </div>
      </div>
      <div>
        <WeatherIcon iconName={iconName as TIconName} />
        <div className="mt-2">
          {data.day.totalprecip_mm ? (
            <SecondaryColoredText>
              {data.day.totalprecip_mm}мм
            </SecondaryColoredText>
          ) : null}
        </div>
      </div>
    </>
  );
};
