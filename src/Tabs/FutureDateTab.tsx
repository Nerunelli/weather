import { useMemo } from 'react';
import dayjs from 'dayjs';
import { daysOfWeek, months } from '../consts';
import { TabTitle } from '../Text/TabTitle';
import { IForecastWeatherData } from '../types';
import { generateDailyIconName } from '../utils';
import { WeatherIcon } from '../WeatherIcon';
import { TIconName } from '../Icons/types';
import { SecondaryColoredText } from '../Text/SecondaryColoredText';
import { SecondaryText } from '../Text/SecondaryText';

interface IProps {
	data: IForecastWeatherData;
	active: boolean;
	onClick?: () => void;
}

export const FutureDateTab: React.FC<IProps> = ({ data, active }) => {
	const day = dayjs(data.date);

	const dayOfWeak = daysOfWeek[day.day()];
	const month = months[day.month()];

	const iconName = useMemo(() => generateDailyIconName(data), [data]);

	return (
		<>
			<div className="flex flex-col items-start mr-6">
				<TabTitle
					active={active}
				>{`${dayOfWeak}, ${day.date()} ${month}`}</TabTitle>
				<SecondaryText>
					{dayjs().isSame(day, 'd')
						? 'Сегодня'
						: dayjs().add(1, 'd').isSame(day, 'd')
							? 'Завтра'
							: ''}
				</SecondaryText>
			</div>
			<div>
				<WeatherIcon iconName={iconName as TIconName} />
				{data.day.totalprecip_mm ? (
					<SecondaryColoredText>{data.day.totalprecip_mm}</SecondaryColoredText>
				) : null}
			</div>
		</>
	);
};
