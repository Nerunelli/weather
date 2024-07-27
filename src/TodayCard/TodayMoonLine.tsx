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
			<div className="relative flex justify-center h-14 w-full mt-28 overflow-hidden">
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
			<div className="absolute flex flex-col items-center text-xs top-32 h-10 right-32">
				<div>{sunrise.format('HH:mm')}</div>
				<div>Восход</div>
			</div>
			<div className="absolute flex flex-col items-center text-xs top-32 h-10 left-32">
				<div>{sunset.format('HH:mm')}</div>
				<div>Заход</div>
			</div>
		</>
	);
};