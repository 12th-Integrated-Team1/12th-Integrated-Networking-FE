import TodayWeatherPanel from "../components/weather/TodayWeatherPanel";
import HourlyWeatherPanel from "../components/weather/HourlyWeatherPanel";
import WeeklyWeatherPanel from "../components/weather/WeeklyWeatherPanel";
import { mockToday, mockHourly, mockWeekly } from "../mock/weatherMock";

export default function Home() {
  return (
    <div className="w-full flex justify-center pt-16 pb-20">
      <div className="w-full max-w-[1100px] px-6 flex flex-col gap-12">
        <TodayWeatherPanel data={mockToday} />
        <HourlyWeatherPanel list={mockHourly} />
        <WeeklyWeatherPanel data={mockWeekly} />
      </div>
    </div>
  );
}
