import dayjs from 'dayjs';
import { WeatherIcon } from '../WeatherIcon';
import { generateHourlyIconName } from '../utils';
import { IHourWeatherData } from '../types';

export interface IProps {
	data: IHourWeatherData;
}

export const HourCard: React.FC<IProps> = ({ data }) => {
	const iconName = generateHourlyIconName(data);

	return (
		<div className="ml-justify-center flex min-w-7 flex-col items-center px-2">
			<span className="mb-2">{dayjs(data.time).format('HH:mm')}</span>
			<WeatherIcon iconName={iconName} width={60} height={60} />
		</div>
	);
};
