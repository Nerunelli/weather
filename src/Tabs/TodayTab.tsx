import { useMemo } from 'react';
import dayjs from 'dayjs';
import { TabTitle } from '../Text/TabTitle';
import { ICurrentWeatherData } from '../types';
import { generateDailyIconName } from '../utils';
import { WeatherIcon } from '../WeatherIcon';
import { TIconName } from '../Icons/types';
import { SecondaryColoredText } from '../Text/SecondaryColoredText';
import { SecondaryText } from '../Text/SecondaryText';

interface IProps {
	data: ICurrentWeatherData;
	active: boolean;
}

export const TodayTab: React.FC<IProps> = ({ data, active }) => {
	const iconName = useMemo(() => generateDailyIconName(data), [data]);

	return (
		<>
			<div className="flex flex-col items-start mr-8">
				<TabTitle active={active}>Сейчас</TabTitle>
				<SecondaryText>{dayjs().format('HH:mm')}</SecondaryText>
			</div>
			<div>
				<WeatherIcon iconName={iconName as TIconName} />
			</div>
		</>
	);
};
