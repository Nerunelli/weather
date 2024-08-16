import dayjs from 'dayjs';
import { WeatherIcon } from '../Icon/WeatherIcon';
import { generateHourlyIconName } from '../../utils';
import { IHourWeatherData } from '../../types';
import { MainText } from '../Text/MainText';

interface IProps {
  data: IHourWeatherData;
}

export const HourCard: React.FC<IProps> = ({ data }) => {
  const iconName = generateHourlyIconName(data);

  return (
    <div className="flex min-w-7 flex-col items-center px-2">
      <MainText>{dayjs(data.time).format('HH:mm')}</MainText>
      <WeatherIcon iconName={iconName} />
    </div>
  );
};
