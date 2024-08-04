import { getTemperatureTagColor, getTemperatureTagDarkerColor } from '../utils';

interface IProps {
  temperature: number;
  marginTop?: number;
}

export const TemperatureTag: React.FC<IProps> = ({
  temperature,
  marginTop = 0,
}) => {
  return (
    <span
      style={{
        background: getTemperatureTagColor(temperature.toString()),
        borderColor: getTemperatureTagDarkerColor(temperature.toString()),
        marginTop: `${marginTop}px`,
      }}
      className="block size-full items-center border-b border-solid text-center"
    >
      {temperature}
    </span>
  );
};
