import dayjs from 'dayjs';
import { getWindTagColor } from '../../utils';
import { IForecastWeatherData } from '../../types';
import { HourCard } from './HourlyWeather';
import { MainText } from '../Text/MainText';
import { TemperatureTag } from '../Tags/TemperatureTag';
import { SecondaryColoredText } from '../Text/SecondaryColoredText';
import { SecondaryText } from '../Text/SecondaryText';
import cn from 'classnames';

interface IProps {
  data: IForecastWeatherData;
}

export const ForecastDetailedCard: React.FC<IProps> = ({ data }) => {
  const maxTemperature = Math.round(data.day.maxtemp_c);

  return (
    <div>
      <div className="mb-4 flex">
        {data.hour.map((hour, index) => {
          if (dayjs(hour.time).hour() % 3) {
            return;
          }

          return <HourCard key={`hourCard-${index}`} data={data.hour[index]} />;
        })}
      </div>

      <div className="mb-4">
        <MainText>Температура воздуха, °C</MainText>
        <div className="flex h-full">
          {data.hour.map((hour, index) => {
            if (dayjs(hour.time).hour() % 3) {
              return;
            }
            const temperature = Math.round(data.hour[index].temp_c);
            return (
              <TemperatureTag
                key={`temperatureTag-${index}`}
                temperature={temperature}
                marginTop={(maxTemperature - temperature) * 3}
              />
            );
          })}
        </div>
      </div>

      <div className="mb-4">
        <MainText>Порывы ветра, м/с</MainText>
        <div className="mt-3 flex h-full">
          {data.hour.map((hour, index) => {
            if (dayjs(hour.time).hour() % 3) {
              return;
            }
            const wind = (data.hour[index].gust_kph / 3.6).toFixed();

            return (
              <span
                key={`wind-${index}`}
                style={{
                  background: `linear-gradient(90deg, #fff, ${getWindTagColor(wind)} 30%, ${getWindTagColor(wind)})`,
                }}
                className="block size-full items-center text-center"
              >
                {wind}
              </span>
            );
          })}
        </div>
      </div>

      <div className="">
        <MainText>Осадки, мм</MainText>
        <div className="mt-1 flex h-full">
          {data.hour.map((hour, index) => {
            if (dayjs(hour.time).hour() % 3) {
              return;
            }
            const precip =
              data.hour[index].precip_mm +
              data.hour[index + 1].precip_mm +
              data.hour[index + 2].precip_mm;

            return (
              <div
                key={`precip-${index}`}
                className="flex w-full flex-col self-end"
              >
                <span
                  className={cn('block items-center text-center h-full w-full')}
                >
                  {precip ? (
                    <SecondaryColoredText>
                      {precip.toFixed(2)}
                    </SecondaryColoredText>
                  ) : (
                    <SecondaryText>0</SecondaryText>
                  )}
                </span>
                <span
                  style={{ height: `${Math.ceil(precip * 10)}px` }}
                  className={cn('block h-full w-full bg-lightBlue')}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
