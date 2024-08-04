import dayjs from 'dayjs';
import {
  INITIAL_DEGREE,
  INITIAL_MOON_DEGREE,
  MOON_DAY_DEGREES,
  SUN_DAY_DEGREES,
  DAYS_OF_WEEK,
  MONTH,
} from '../consts';
import { ICurrentWeatherData } from '../types';
import cn from 'classnames';
import { TodayDetailedCardFooter } from './TodayDetailedCardFooter';
import { TodayTemperature } from './TodayTemperature';
import { TodaySunLine } from './TodaySunLine';
import { TodayMoonLine } from './TodayMoonLine';

interface IProps {
  data: ICurrentWeatherData;
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
  };
}

const prepareDateFromTime = (time: string) => {
  const hour = time.slice(0, 2);
  const minute = time.slice(3, 5);
  const pm = time.slice(6, 8) === 'PM';
  return dayjs()
    .hour(pm ? +hour + 12 : +hour)
    .minute(+minute);
};

export const TodayDetailedCard: React.FC<IProps> = ({ data, astro }) => {
  const day = dayjs(data.last_updated);
  const sunrise = prepareDateFromTime(astro.sunrise);
  const sunset = prepareDateFromTime(astro.sunset);
  const isDay = dayjs().isAfter(sunrise) && dayjs().isBefore(sunset);

  const betweenMidnightAndSunrise = dayjs().isBefore(sunrise);

  const sunDayParts = sunset.diff(sunrise) / SUN_DAY_DEGREES;
  const addedSunDegree = INITIAL_DEGREE + dayjs().diff(sunrise) / sunDayParts;

  const moonDayParts = sunset.diff(sunrise.add(1, 'd')) / MOON_DAY_DEGREES;
  const addedMoonDegree =
    dayjs().diff(betweenMidnightAndSunrise ? sunrise : sunrise.add(1, 'd')) /
      moonDayParts -
    INITIAL_MOON_DEGREE;

  const dayOfWeak = DAYS_OF_WEEK[day.day()];
  const month = MONTH[day.month()];

  const isSunrise = Math.abs(dayjs().diff(sunrise, 'h')) < 1;
  const isSunset = Math.abs(dayjs().diff(sunset, 'h')) < 1;

  return (
    <div
      className={cn(
        'flex relative w-full items-center h-80 flex-col text-white bg-no-repeat bg-cover',
        !data.is_day && !isSunrise && !isSunset && 'bg-night bg-bottom',
        data.is_day && !isSunrise && !isSunset && 'bg-day bg-bottom',
        isSunrise && 'bg-sunrise bg-center',
        isSunset && 'bg-sunset bg-center',
      )}
    >
      <div className="flex h-14 w-full items-center justify-center font-medium">
        {`${dayOfWeak}, ${day.date()} ${month}, ${day.format('HH:mm')}`}
      </div>

      <TodayTemperature
        isDay={isDay}
        temp={data.temp_c}
        feelslike={data.feelslike_c}
      />

      {isDay ? (
        <TodaySunLine
          addedSunDegree={addedSunDegree}
          sunrise={sunrise}
          sunset={sunset}
        />
      ) : (
        <TodayMoonLine
          addedMoonDegree={addedMoonDegree}
          sunrise={sunrise}
          sunset={sunset}
        />
      )}

      <TodayDetailedCardFooter data={data} />
    </div>
  );
};
