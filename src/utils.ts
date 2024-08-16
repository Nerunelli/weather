import React from 'react';
import { EIconSet, IconSet } from './Components/Icon/IconSet/IconSet';
import { IconProps, TIconName } from './Components/Icon/IconSet/types';
import {
  TEMPERATURE_TAG_COLORS,
  TEMPERATURE_TAG_DARKER_COLORS,
  WIND_COLORS,
} from './consts';
import { Dayjs } from 'dayjs';
import {
  ICurrentWeatherData,
  IForecastWeatherData,
  IHourWeatherData,
} from './types';

export const getIcon = (iconName: TIconName): React.FC<IconProps> => {
  return IconSet[EIconSet[iconName]];
};

export const isHoliday = (date: Dayjs) => {
  return date.day() === 0 || date.day() === 6;
};

export const getTemperatureTagColor = (temperature: string) => {
  return TEMPERATURE_TAG_COLORS[
    temperature as keyof typeof TEMPERATURE_TAG_COLORS
  ];
};

export const getTemperatureTagDarkerColor = (temperature: string) => {
  return TEMPERATURE_TAG_DARKER_COLORS[
    temperature as keyof typeof TEMPERATURE_TAG_DARKER_COLORS
  ];
};

export const getWindTagColor = (wind: string) => {
  return WIND_COLORS[wind as keyof typeof WIND_COLORS];
};

export const generateHourlyIconName = (data: IHourWeatherData): TIconName => {
  const dayOrNight = data?.is_day ? 'D' : 'N';

  let cloudiness = '';
  let rain = '';
  let storm = '';
  let snow;
  let precipitation = '';

  if (!data.cloud) {
    cloudiness = '1';
  } else if (data.cloud < 40) {
    cloudiness = '1';
  } else if (data.cloud < 100) {
    cloudiness = '2';
  } else {
    cloudiness = '3';
  }

  if (data.precip_mm === 0) {
    rain = '';
  } else if (data.precip_mm < 1) {
    rain = '1';
  } else if (data.precip_mm < 2) {
    rain = '2';
  } else {
    rain = '3';
  }

  if (!data.snow_cm) {
    snow = '';
  } else if (data.snow_cm < 1) {
    snow = '1';
  } else if (data.snow_cm < 2) {
    snow = '2';
  } else {
    snow = '3';
  }

  if (data.gust_kph > 54) {
    storm = '_ST';
  }

  let result = cloudiness !== '3' ? dayOrNight : '';

  if (result) {
    result = result + (cloudiness ? '_C' + cloudiness : '');
  } else {
    result = cloudiness ? 'C' + cloudiness : '';
  }

  if (rain) {
    precipitation = precipitation + 'R';
  }
  if (snow) {
    precipitation = precipitation + 'S';
  }

  if (result) {
    result = result + (rain ? '_' + precipitation + rain : '');
  } else {
    result = rain ? precipitation + rain : '';
  }

  if (storm) {
    result = result + '_ST';
  }

  return result as TIconName;
};

export const generateTodayIconName = (data: ICurrentWeatherData): TIconName => {
  const dayOrNight = !data?.is_day ? 'N' : 'D';

  let cloudiness = '';
  let rain = '';
  let storm = '';
  let precipitation = '';

  if (!data.cloud) {
    cloudiness = '';
  } else if (data.cloud < 40) {
    cloudiness = '1';
  } else if (data.cloud < 100) {
    cloudiness = '2';
  } else if (data.cloud) {
    cloudiness = '3';
  }

  if (data.precip_mm === 0) {
    rain = '';
  } else if (data.precip_mm < 1) {
    rain = '1';
  } else if (data.precip_mm < 2) {
    rain = '2';
  } else {
    rain = '3';
  }

  if (!cloudiness && rain) {
    cloudiness = rain;
  }

  if (data.gust_kph > 54) {
    storm = '_ST';
  }

  let result = cloudiness !== '3' ? dayOrNight : '';

  if (result) {
    result = result + (cloudiness ? '_C' + cloudiness : '');
  } else {
    result = cloudiness ? 'C' + cloudiness : '';
  }

  if (rain) {
    precipitation = precipitation + 'R';
  }

  if (result) {
    result = result + (rain ? '_' + precipitation + rain : '');
  } else {
    result = rain ? precipitation + rain : '';
  }

  if (storm) {
    result = result + '_ST';
  }

  return result as TIconName;
};

export const generateFutureDailyIconName = ({
  day,
}: IForecastWeatherData): TIconName => {
  const dayOrNight = 'D';

  let rain = '';
  let cloudiness = '';
  let precipitation = '';

  if (day.totalprecip_mm === 0) {
    rain = '';
  } else if (day.totalprecip_mm < 1) {
    rain = '1';
  } else if (day.totalprecip_mm < 2) {
    rain = '2';
  } else {
    rain = '3';
  }

  cloudiness = rain;

  let result = cloudiness !== '3' ? dayOrNight : '';

  if (result) {
    result = result + (cloudiness ? '_C' + cloudiness : '');
  } else {
    result = cloudiness ? 'C' + cloudiness : '';
  }

  if (rain) {
    precipitation = precipitation + 'R';
  }

  if (result) {
    result = result + (rain ? '_' + precipitation + rain : '');
  } else {
    result = rain ? precipitation + rain : '';
  }

  return result as TIconName;
};

// Названия иконок генерируются по правилу:
// [day|night|]_[cloudiness](0-3)_[rain][snow](0-3)_[storm]
