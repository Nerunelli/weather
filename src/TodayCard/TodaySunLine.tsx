import { Dayjs } from 'dayjs';
import { WeatherIcon } from '../WeatherIcon';

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
			<div className="relative flex justify-center w-full h-14 overflow-hidden">
				<div
					className="absolute top-0"
					style={{ rotate: `${addedSunDegree.toFixed(0)}deg` }}
				>
					<WeatherIcon width={540} height={540} iconName={'WEATHER_NOW_DAY'} />
				</div>
			</div>
			<div className="absolute flex flex-col items-center text-xs top-32 h-10 left-32">
				<div>{sunrise.format('HH:mm')}</div>
				<div>Восход</div>
			</div>
			<div className="absolute flex flex-col items-center text-xs top-32 h-10 right-32">
				<div>{sunset.format('HH:mm')}</div>
				<div>Заход</div>
			</div>
		</>
	);
};
