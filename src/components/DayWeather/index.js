import './index.css';

export default function DayWeather(props) {
  const {
    data
  } = props;

  return (
    <div className="day-weather" >
      <div>{data.date}</div>
      <div>Min: {data.minTemp}</div>
      <div>Max: {data.maxTemp}</div>
    </div>
  );
}
