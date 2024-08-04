import { Dayjs } from 'dayjs';
import { WeatherIcon } from '../WeatherIcon';

interface IProps {
  addedMoonDegree: number;
  sunrise: Dayjs;
  sunset: Dayjs;
}

export const TodayMoonLine: React.FC<IProps> = ({
  addedMoonDegree,
  sunrise,
  sunset,
}) => {
  return (
    <>
      <div className="relative mt-28 flex h-14 w-full justify-center overflow-hidden">
        <div
          className="absolute bottom-0"
          style={{ rotate: `${addedMoonDegree.toFixed(0)}deg` }}
        >
          <WeatherIcon
            width={540}
            height={540}
            iconName={'WEATHER_NOW_NIGHT'}
          />
        </div>
      </div>
      <div className="absolute right-32 top-32 flex h-10 flex-col items-center text-xs">
        <div>{sunrise.format('HH:mm')}</div>
        <div>Восход</div>
      </div>
      <div className="absolute left-32 top-32 flex h-10 flex-col items-center text-xs">
        <div>{sunset.format('HH:mm')}</div>
        <div>Заход</div>
      </div>
    </>
  );
};
