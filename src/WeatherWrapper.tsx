import { useEffect, useState } from 'react';
import axios from 'axios';
import { DEFAULT_LOCATION, WEATHER_API_FORECAST_URL } from './consts';
import recievedData from './newData.json';
import cn from 'classnames';
import dayjs from 'dayjs';
import {
	ICurrentWeatherData,
	IForecastWeatherData,
	IWeatherData,
} from './types';
import { DateTab } from './Tabs/DateTab';
import { HourCard } from './HourCard';
import { TodayTab } from './Tabs/TodayTab';
import { FutureDateTab } from './Tabs/FutureDateTab';
import { TodayDetailedCard } from './TodayCard/TodayDetailedCard';
import Geolocation from '@react-native-community/geolocation';

export const WeatherWrapper = () => {
	const [location, setLocation] = useState<GeolocationPosition>();
	const [currentData, setCurrentData] = useState<ICurrentWeatherData>();
	const [data, setData] = useState<IWeatherData>();
	const [activeTab, setActiveTab] = useState(0);
	const [tabs, setTabs] = useState<IForecastWeatherData[]>([]);
	const [firstVisibleTab, setFirstVisibleTab] = useState(0);
	const mockedData = false;

	useEffect(() => {
		Geolocation.getCurrentPosition(setLocation, console.log);
	}, [location]);

	useEffect(() => {
		console.log(location?.coords);
		if (mockedData) {
			return;
		}

		// const queryLocation =
		// 	`${location.coords.latitude},${location.coords.longitude}` ??
		// 	DEFAULT_LOCATION;

		const queryLocation = location?.coords
			? `${location.coords.latitude},${location.coords.longitude}`
			: DEFAULT_LOCATION;

		const url = `${WEATHER_API_FORECAST_URL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${queryLocation}&days=14`;

		axios.get(url).then((data: { data: IWeatherData }) => {
			console.log('data', data);
			setData(data.data);
			setCurrentData(data.data.current);
		});
	}, [location]);

	useEffect(() => {
		if (mockedData) {
			setData(recievedData.data as IWeatherData);
			setCurrentData(recievedData.data.current as ICurrentWeatherData);
		}
	}, [recievedData]);

	useEffect(() => {
		if (!data) {
			return;
		}
		setTabs(data.forecast.forecastday);
	}, [data]);

	if (!data || !currentData) {
		return <div className="flex w-full justify-center mt-14">Загрузка...</div>;
	}

	return (
		<div className="flex flex-col w-min m-4">
			<div className="flex">
				<DateTab
					first={true}
					visible={firstVisibleTab === 0}
					active={activeTab === 0}
					onClick={() => setActiveTab(0)}
				>
					<TodayTab data={currentData} active={activeTab === 0} />
				</DateTab>
				{tabs.map((el, i) => {
					return (
						<DateTab
							key={`date-tab-${i + 1}`}
							last={i + 1 === tabs.length}
							visible={firstVisibleTab >= i - 1 && firstVisibleTab <= i + 3}
							lastVisible={firstVisibleTab === i - 1 || i === tabs.length - 1}
							active={activeTab === i + 1}
							onClick={() => {
								setActiveTab(i + 1);
								setFirstVisibleTab(i);
							}}
						>
							{/* <FutureDateTab
								data={data.forecast.forecastday[i]}
								active={activeTab === i + 1}
							/> */}
						</DateTab>
					);
				})}
			</div>
			<div>
				<div
					className={cn(
						'flex w-full rounded-lg bg-neutral-50 p-4',
						activeTab === 0 && 'rounded-tl-none',
						activeTab === tabs.length && 'rounded-tr-none',
					)}
				>
					{activeTab === 0 && (
						<TodayDetailedCard
							data={currentData}
							astro={data.forecast.forecastday[0].astro}
						/>
					)}
					{/* {tabs[activeTab - 1]?.hour.map((hour, index) => {
						if (dayjs(hour.time).hour() % 3) {
							return <></>;
						}

						return (
							<HourCard
								key={index}
								data={data.forecast.forecastday[activeTab - 1].hour[index]}
							/>
						);
					})} */}
				</div>
			</div>
		</div>
	);
};
