"use client";

import { useEffect, useState } from 'react';

interface WeatherData {
    city: string;
    data: string;
}

const CITIES = ["Beijing", "New York", "London"];

export default function WeatherWidget() {
    const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

    useEffect(() => {
        const fetchWeather = async () => {
            const results = await Promise.all(
                CITIES.map(async (city) => {
                    try {
                        // Using format="%c %t" to get "ConditionIcon Temperature" e.g. "☀️ +25°C"
                        // Adding random cache buster to avoid stale data
                        const response = await fetch(`https://wttr.in/${city.replace(' ', '+')}?format=%c+%t`);
                        if (!response.ok) return { city, data: "ERR" };
                        const text = await response.text();
                        return { city, data: text.trim() };
                    } catch (error) {
                        return { city, data: "N/A" };
                    }
                })
            );
            setWeatherData(results);
        };

        fetchWeather();

        // Refresh every 15 minutes
        const interval = setInterval(fetchWeather, 15 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col gap-2 font-mono text-xs pointer-events-none select-none">
            <div className="flex flex-col items-end gap-1">
                <span className="text-secondary/50 mb-1 tracking-widest">[ATMOSPHERIC_DATA]</span>
                {weatherData.length === 0 ? (
                    <div className="text-primary animate-pulse">SCANNING...</div>
                ) : (
                    weatherData.map((w, i) => (
                        <div
                            key={w.city}
                            className="bg-black/60 backdrop-blur-sm border-r-2 border-primary/50 pr-3 py-1 text-right w-48 flex justify-between transition-all hover:bg-black/80 hover:border-cta"
                            style={{ animation: `fadeIn 0.5s ease-out ${i * 0.1}s backwards` }}
                        >
                            <span className="text-foreground/70 uppercase">{w.city}</span>
                            <span className="text-primary font-bold">{w.data}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
