import { useEffect, useState } from 'react';
import axios from 'axios';
import { DEFAULT_LOCATION, WEATHER_API_FORECAST_URL } from './consts';
import cn from 'classnames';
import {
  ICurrentWeatherData,
  IForecastWeatherData,
  IWeatherData,
} from './types';
import { DateTab } from './Components/Tabs/DateTab';
import { TodayTab } from './Components/Tabs/TodayTab';
import { FutureDateTab } from './Components/Tabs/FutureDateTab';
import { TodayDetailedCard } from './Components/TodayCard/TodayDetailedCard';
import { ForecastDetailedCard } from './Components/ForecastCard/ForecastDetailedCard';

export const WeatherWrapper = () => {
  const [location, setLocation] = useState<GeolocationPosition>();

  const [currentWeatherData, setCurrentWeatherData] =
    useState<ICurrentWeatherData>();
  const [weatherData, setWeatherData] = useState<IWeatherData>();
  const [isLoading, setIsLoading] = useState(false);

  const [tabs, setTabs] = useState<IForecastWeatherData[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [firstVisibleTab, setFirstVisibleTab] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setLocation, console.error);
  }, []);

  useEffect(() => {
    const queryLocation = location?.coords
      ? `${location.coords.latitude},${location.coords.longitude}`
      : DEFAULT_LOCATION;

    const url = `${WEATHER_API_FORECAST_URL}?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${queryLocation}&days=14`;
    setIsLoading(true);
    axios
      .get(url)
      .then((data: { data: IWeatherData }) => {
        setWeatherData(data.data);
        setCurrentWeatherData(data.data.current);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [location]);

  useEffect(() => {
    if (!weatherData) {
      return;
    }
    setTabs(weatherData.forecast.forecastday);
  }, [weatherData]);

  if (!currentWeatherData || !weatherData) {
    return (
      <div className="mt-14 flex w-full justify-center">
        {isLoading ? 'Загрузка...' : 'Ошибка'}
      </div>
    );
  }

  return (
    <div className="m-4 flex w-min flex-col">
      <div className="flex">
        <DateTab
          first
          visible={firstVisibleTab === 0}
          active={activeTab === 0}
          onClick={() => setActiveTab(0)}
        >
          <TodayTab data={currentWeatherData} active={activeTab === 0} />
        </DateTab>
        {tabs.map((_el, i) => {
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
              <FutureDateTab
                data={weatherData.forecast.forecastday[i]}
                active={activeTab === i + 1}
              />
            </DateTab>
          );
        })}
      </div>
      <div>
        <div
          className={cn(
            'flex w-full rounded-lg bg-neutral-50',
            activeTab === 0 ? 'rounded-tl-none p-4' : 'p-4 pb-0',
            activeTab === tabs.length && 'rounded-tr-none',
          )}
        >
          {activeTab === 0 && (
            <TodayDetailedCard
              data={currentWeatherData}
              astro={weatherData.forecast.forecastday[0].astro}
            />
          )}
          {tabs[activeTab - 1] && (
            <ForecastDetailedCard data={tabs[activeTab - 1]} />
          )}
        </div>
      </div>
    </div>
  );
};
