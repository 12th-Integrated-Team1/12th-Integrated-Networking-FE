import WeatherIcon from "./WeatherIcon";
import type { TodayWeather } from "../../types/weather";

export default function TodayWeatherPanel({ data }: { data: TodayWeather }) {
  if (!data) return null;

  return (
    <div className="w-full p-8 bg-color-gray-0 rounded-2xl shadow-[0px_0px_8px_2px_rgba(0,0,0,0.10)]">
      <h2 className="text-color-gray-100 text-xl font-bold mb-4">
        {data.date} {data.locationName} 날씨 현황
      </h2>
      {/* 아이콘/온도 */}
      <div className="mt-4 flex flex-col items-center gap-2.5">
        <div className="flex items-center justify-center gap-2.5">
          <WeatherIcon icon={data.icon} size={160} />
          <p className="text-color-gray-60 text-7xl font-bold">
            {data.temperature}°
          </p>
        </div>
        {/* 상태 */}
        <p className="text-color-gray-60 text-xl font-semibold">
          {data.status}
        </p>
        {/* 상세 정보 (체감/습도/바람) */}
        <div className="flex items-center justify-center gap-2 mt-1">
          {/* 체감 */}
          <div className="flex items-center">
            <span className="text-color-gray-40 text-base font-medium">
              체감
            </span>
            <span className="text-color-gray-60 text-base font-medium">
              {" "}
              {data.feelsLike}°
            </span>
          </div>
          {/* 구분점 */}
          <span className="text-color-gray-40 text-[8px] font-medium">●</span>
          {/* 습도 */}
          <div className="flex items-center">
            <span className="text-color-gray-40 text-base font-medium">
              습도
            </span>
            <span className="text-color-gray-60 text-base font-medium">
              {" "}
              {data.humidity}%
            </span>
          </div>
          {/* 구분점 */}
          <span className="text-color-gray-40 text-[8px] font-medium">●</span>
          {/* 바람 */}
          <div className="flex items-center">
            <span className="text-color-gray-40 text-base font-medium">
              바람
            </span>
            <span className="text-color-gray-60 text-base font-medium">
              {" "}
              {data.windSpeed}m/s
            </span>
          </div>
        </div>
      </div>
      {/* 배지 영역 */}
      <div className="grid grid-cols-4 gap-4 mt-8 mx-auto max-w-[600px]">
        <Badge label="미세먼지" value={data.fineDust} color="blue" />
        <Badge label="초미세먼지" value={data.ultraFineDust} color="green" />
        <Badge label="자외선" value={data.uv} color="red" />
        <Badge label="일출" value={data.sunrise} color="yellow" />
      </div>
    </div>
  );
}

// 배지 컴포넌트
function Badge({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: "blue" | "green" | "red" | "yellow";
}) {
  const bgColors = {
    blue: "bg-color-skyblue",
    green: "bg-color-mint",
    red: "bg-color-coral",
    yellow: "bg-color-lime",
  };
  const textColors = {
    blue: "text-color-blue",
    green: "text-color-green",
    red: "text-color-red",
    yellow: "text-color-yellow",
  };
  return (
    <div
      className={`${bgColors[color]} rounded-xl py-3 text-center flex flex-col items-center justify-center`}
    >
      <span className="text-color-gray-60 text-xs font-medium">{label}</span>
      <span className={`${textColors[color]} text-xs font-bold mt-1`}>
        {value}
      </span>
    </div>
  );
}
