import { useEffect, useState } from "react";
import type {
  TodayWeather,
  HourlyWeather,
  WeeklyWeather,
} from "../types/weather";

export function useWeather(locationId: number | null) {
  const [today, setToday] = useState<TodayWeather | null>(null);
  const [hourly, setHourly] = useState<HourlyWeather[]>([]);
  const [weekly, setWeekly] = useState<WeeklyWeather[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!locationId) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const [t, h, w] = await Promise.all([
          fetch(`/api/weather/${locationId}/current`).then((r) => r.json()),
          fetch(`/api/weather/${locationId}/hourly`).then((r) => r.json()),
          fetch(`/api/weather/${locationId}/daily`).then((r) => r.json()),
        ]);

        setToday(t.data);
        setHourly(h.data);
        setWeekly(w.data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [locationId]);

  return { today, hourly, weekly, loading };
}
