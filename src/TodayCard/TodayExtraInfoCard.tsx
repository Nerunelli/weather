import React from 'react';

interface IProps {
	itemName: string;
	value: string | number;
	unit: string;
}

export const TodayExtraInfoCard: React.FC<IProps> = ({
	itemName,
	value,
	unit,
}) => {
	return (
		<div className="flex flex-col">
			<div className="text-[10px]">{itemName}</div>
			<div className="flex">
				<div className="text-2xl">{value}&nbsp;</div>
				<div className="flex text-[10px]/[10px] items-center">{unit}</div>
			</div>
		</div>
	);
};
