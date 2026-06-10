"use client";

import { useEffect, useState } from "react";

// Bhimashankar / Taleghar area coordinates.
const LAT = 19.0719;
const LON = 73.5355;

type Day = {
  date: string;
  max: number;
  min: number;
  code: number;
};

// WMO weather code → label + simple icon.
function describe(code: number): { icon: string; label: string } {
  if (code === 0) return { icon: "☀️", label: "Clear" };
  if (code <= 2) return { icon: "⛅", label: "Partly cloudy" };
  if (code === 3) return { icon: "☁️", label: "Cloudy" };
  if (code <= 48) return { icon: "🌫️", label: "Misty" };
  if (code <= 57) return { icon: "🌦️", label: "Drizzle" };
  if (code <= 67) return { icon: "🌧️", label: "Rain" };
  if (code <= 77) return { icon: "🌨️", label: "Snow" };
  if (code <= 82) return { icon: "🌧️", label: "Showers" };
  return { icon: "⛈️", label: "Thunderstorm" };
}

// 7-day forecast for the resort via Open-Meteo (free, keyless).
// Renders nothing until data arrives; hides entirely on failure.
export default function WeekWeather() {
  const [days, setDays] = useState<Day[] | null>(null);

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Asia%2FKolkata`
    )
      .then((r) => r.json())
      .then((d) => {
        const t = d?.daily;
        if (!t?.time) return;
        setDays(
          t.time.map((date: string, i: number) => ({
            date,
            max: Math.round(t.temperature_2m_max[i]),
            min: Math.round(t.temperature_2m_min[i]),
            code: t.weather_code[i],
          }))
        );
      })
      .catch(() => {});
  }, []);

  if (!days) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
      {days.slice(0, 7).map((d, i) => {
        const w = describe(d.code);
        const dayName =
          i === 0
            ? "Today"
            : new Date(d.date).toLocaleDateString("en-IN", {
                weekday: "short",
              });
        return (
          <div
            key={d.date}
            className={`flex flex-col items-center rounded-2xl px-3 py-5 text-center ${
              i === 0
                ? "bg-forest-800 text-sand-50"
                : "bg-white text-forest-900 ring-1 ring-sand-200"
            }`}
          >
            <p
              className={`text-xs font-semibold uppercase tracking-wider ${
                i === 0 ? "text-gold-400" : "text-stone-soft"
              }`}
            >
              {dayName}
            </p>
            <p className="mt-2 text-2xl" aria-hidden>
              {w.icon}
            </p>
            <p
              className={`mt-1 text-[0.7rem] ${
                i === 0 ? "text-sand-200/80" : "text-stone-soft"
              }`}
            >
              {w.label}
            </p>
            <p className="mt-2 font-serif text-lg font-semibold">
              {d.max}°
              <span
                className={`ml-1 text-sm font-normal ${
                  i === 0 ? "text-sand-200/70" : "text-stone-soft"
                }`}
              >
                {d.min}°
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
