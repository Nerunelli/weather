import {
  getTemperatureTagColor,
  getTemperatureTagDarkerColor,
} from '../../utils';

interface IProps {
  temperature: number;
  feelsLike: number;
}

export const CurrentTemperatureTag: React.FC<IProps> = ({
  temperature,
  feelsLike,
}) => {
  return (
    <div className="flex w-full flex-col">
      <span
        style={{
          background: getTemperatureTagColor(temperature.toFixed()),
        }}
        className="block w-full items-center rounded-t-md"
      >
        {temperature}
      </span>
      <span
        style={{
          background: getTemperatureTagDarkerColor(feelsLike.toFixed()),
        }}
        className="block items-center rounded-b-md px-2 text-small"
      >
        По ощущению {feelsLike}
      </span>
    </div>
  );
};
