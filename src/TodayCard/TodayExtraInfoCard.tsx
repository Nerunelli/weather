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
      <div className="text-small">{itemName}</div>
      <div className="flex">
        <div className="text-2xl">{value}&nbsp;</div>
        <div className="flex items-center text-[10px]/[10px]">{unit}</div>
      </div>
    </div>
  );
};
