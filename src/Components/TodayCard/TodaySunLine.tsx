import { Dayjs } from 'dayjs';
import { WeatherIcon } from '../Icon/WeatherIcon';

interface IProps {
  addedSunDegree: number;
  sunrise: Dayjs;
  sunset: Dayjs;
}

export const TodaySunLine: React.FC<IProps> = ({
  addedSunDegree,
  sunrise,
  sunset,
}) => {
  return (
    <>
      <div className="relative flex h-14 w-full justify-center overflow-hidden">
        <div
          className="absolute top-0"
          style={{ rotate: `${addedSunDegree.toFixed(0)}deg` }}
        >
          <WeatherIcon width={540} height={540} iconName={'WEATHER_NOW_DAY'} />
        </div>
      </div>
      <div className="absolute left-32 top-32 flex h-10 flex-col items-center text-xs">
        <div>{sunrise.format('HH:mm')}</div>
        <div>Восход</div>
      </div>
      <div className="absolute right-32 top-32 flex h-10 flex-col items-center text-xs">
        <div>{sunset.format('HH:mm')}</div>
        <div>Заход</div>
      </div>
    </>
  );
};
