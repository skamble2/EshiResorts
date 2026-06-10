"use client";

import { useEffect, useState } from "react";

// Bhimashankar / Taleghar area coordinates.
const LAT = 19.0719;
const LON = 73.5355;

// Live temperature via Open-Meteo (free, keyless). Renders nothing on failure.
export default function WeatherBadge() {
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m`
    )
      .then((r) => r.json())
      .then((d) => {
        const t = d?.current?.temperature_2m;
        if (typeof t === "number") setTemp(Math.round(t));
      })
      .catch(() => {});
  }, []);

  if (temp === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-sand-50/10 px-3 py-1 text-xs font-medium tracking-wide text-sand-50 backdrop-blur">
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden>
        <path
          d="M10 13.5V5a2 2 0 1 1 4 0v8.5a4 4 0 1 1-4 0Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      {temp}°C at the resort now
    </span>
  );
}
