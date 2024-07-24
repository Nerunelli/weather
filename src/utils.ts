import React from 'react';
import { EIconSet, IconSet } from './Icons/IconSet';
import { IconProps, TIconName } from './Icons/types';

export const getIcon = (iconName: TIconName): React.FC<IconProps> => {
	return IconSet[EIconSet[iconName]];
};

// export const generateHourlyIconName = (data: any): TIconName => {
// 	const dayOrNight = data?.is_day ? 'D' : 'N';

// 	let cloudiness = '';
// 	let rain = '';
// 	let storm = '';
// 	let snow;
// 	let precipitation = '';

// 	if (!data.cloud) {
// 		cloudiness = '1';
// 	} else if (data.cloud < 40) {
// 		cloudiness = '1';
// 	} else if (data.cloud < 100) {
// 		cloudiness = '2';
// 	} else {
// 		cloudiness = '3';
// 	}

// 	if (data.precip_mm === 0) {
// 		rain = '';
// 	} else if (data.precip_mm < 1) {
// 		rain = '1';
// 	} else if (data.precip_mm < 2) {
// 		rain = '2';
// 	} else {
// 		rain = '3';
// 	}

// 	if (!data.snow_cm) {
// 		snow = '';
// 	} else if (data.snow_cm < 1) {
// 		snow = '1';
// 	} else if (data.snow_cm < 2) {
// 		snow = '2';
// 	} else {
// 		snow = '3';
// 	}

// 	if (data.gust_kph > 54) {
// 		storm = '_ST';
// 	}

// 	let result = cloudiness !== '3' ? dayOrNight : '';

// 	if (result) {
// 		result = result + (cloudiness ? '_C' + cloudiness : '');
// 	} else {
// 		result = cloudiness ? 'C' + cloudiness : '';
// 	}

// 	if (rain) {
// 		precipitation = precipitation + 'R';
// 	}
// 	if (snow) {
// 		precipitation = precipitation + 'S';
// 	}

// 	if (result) {
// 		result = result + (rain ? '_' + precipitation + rain : '');
// 	} else {
// 		result = rain ? precipitation + rain : '';
// 	}

// 	if (storm) {
// 		result = result + '_ST';
// 	}

// 	return result as TIconName;
// };

// export const generateDailyIconName = (data: any): TIconName => {
// 	const dayOrNight = !data?.is_day ? 'N' : 'D';
// 	console.log(12345, data?.is_day);

// 	let cloudiness = '';
// 	let rain = '';
// 	let storm = '';
// 	// let snow = '';
// 	let precipitation = '';

// 	if (!data.cloud) {
// 		cloudiness = '';
// 	} else if (data.cloud < 40) {
// 		cloudiness = '1';
// 	} else if (data.cloud < 100) {
// 		cloudiness = '2';
// 	} else if (data.cloud) {
// 		cloudiness = '3';
// 	}

// 	if (data.totalprecip_mm === 0) {
// 		rain = '';
// 	} else if (data.totalprecip_mm < 1) {
// 		rain = '1';
// 	} else if (data.totalprecip_mm < 2) {
// 		rain = '2';
// 	} else {
// 		rain = '3';
// 	}

// 	if (!cloudiness && rain) {
// 		cloudiness = rain;
// 	}

// 	// if (!data.snow_cm) {
// 	// 	snow = '';
// 	// } else if (data.snow_cm < 1) {
// 	// 	snow = '1';
// 	// } else if (data.snow_cm < 2) {
// 	// 	snow = '2';
// 	// } else {
// 	// 	snow = '3';
// 	// }

// 	if (data.gust_kph > 54) {
// 		storm = '_ST';
// 	}

// 	let result = cloudiness !== '3' ? dayOrNight : '';

// 	if (result) {
// 		result = result + (cloudiness ? '_C' + cloudiness : '');
// 	} else {
// 		result = cloudiness ? 'C' + cloudiness : '';
// 	}

// 	if (rain) {
// 		precipitation = precipitation + 'R';
// 	}
// 	// if (snow) {
// 	// 	precipitation = precipitation + 'S';
// 	// }

// 	if (result) {
// 		result = result + (rain ? '_' + precipitation + rain : '');
// 	} else {
// 		result = rain ? precipitation + rain : '';
// 	}

// 	if (storm) {
// 		result = result + '_ST';
// 	}
// 	console.log(data, result, 123);

// 	return result as TIconName;
// };

// Названия иконок генерируются по правилу:
// [day|night|]_[cloudiness](0-3)_[rain][snow](0-3)_[storm]
