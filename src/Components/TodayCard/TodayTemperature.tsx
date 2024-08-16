import cn from 'classnames';

interface IProps {
  isDay: boolean;
  temp: number;
  feelslike: number;
}

export const TodayTemperature: React.FC<IProps> = ({
  isDay,
  temp,
  feelslike,
}) => {
  return (
    <div className={cn('absolute', isDay ? 'top-24' : 'top-20')}>
      <div className="text-7xl">
        {temp > 0 && '+'}
        {temp.toFixed(0)}
      </div>
      <div className="mt-2 rounded-sm bg-gray-100/20 px-2 py-1 text-xs">
        По ощущению&nbsp;
        {feelslike > 0 && '+'}
        {feelslike.toFixed(0)}
      </div>
    </div>
  );
};