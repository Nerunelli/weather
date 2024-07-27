import { useMemo } from 'react';
import { ICurrentWeatherData } from '../types';
import { TodayExtraInfoCard } from './TodayExtraInfoCard';

interface IProps {
	data: ICurrentWeatherData;
}

export const TodayDetailedCardFooter: React.FC<IProps> = ({ data }) => {
	const extraData = useMemo(() => {
		return [
			{
				itemName: 'Ветер',
				value: (data.wind_kph / 3.6).toFixed(0),
				unit: 'м/с штиль',
			},
			{
				itemName: 'Давление',
				value: data.pressure_in.toFixed(0),
				unit: 'мм рт. ст.',
			},
			{
				itemName: 'Влажность',
				value: (data.humidity / 3.6).toFixed(0),
				unit: '%',
			},
			{
				itemName: 'УФ индекс',
				value: data.uv,
				unit: '',
			},
			{
				itemName: 'Облачность',
				value: data.cloud.toFixed(0),
				unit: '%',
			},
		];
	}, [data]);

	return (
		<div className="absolute flex gap-9 justify-center bottom-0 w-full h-14 p-1 bg-gray-100/20">
			{extraData.map((el) => (
				<TodayExtraInfoCard
					key={el.itemName}
					itemName={el.itemName}
					value={el.value}
					unit={el.unit}
				/>
			))}
		</div>
	);
};