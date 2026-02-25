import { useEffect, useRef, useState, useMemo } from "react";
import { useAnimate } from "framer-motion";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// Helper to determine the next Sunday 7PM in UTC-5 (Bogota, Lima, Quito)
function getNextSunday7PMEST() {
    const targetDayOfWeek = 0; // Sunday
    const targetHour = 19;     // 7 PM
    const offsetHours = -5;    // Bogota UTC-5

    const now = new Date();
    const utcNowMs = now.getTime();

    // Shift current UTC time by Bogota offset so we can easily read local "Bogota" month/day/hour values using standard getUTC* methods.
    const bogotaDate = new Date(utcNowMs + (offsetHours * 3600000));

    const currentDay = bogotaDate.getUTCDay();
    const currentHour = bogotaDate.getUTCHours();

    let daysToAdd = targetDayOfWeek - currentDay;
    if (daysToAdd < 0) {
        daysToAdd += 7; // Wrap to next week if past Sunday
    }

    // If it is currently Sunday, but already past 7 PM, push to next Sunday
    if (daysToAdd === 0 && currentHour >= targetHour) {
        daysToAdd = 7;
    }

    // Advance the Bogota simulated date to the target day and clamp the exact time to 19:00:00
    bogotaDate.setUTCDate(bogotaDate.getUTCDate() + daysToAdd);
    bogotaDate.setUTCHours(targetHour, 0, 0, 0);

    // Convert back from the simulated Bogota "UTC" object to true absolute UTC by subtracting the offset we artificially added
    return bogotaDate.getTime() - (offsetHours * 3600000);
}

interface ShiftingCountdownProps {
    labels: {
        title?: string;
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
    };
}

export default function ShiftingCountdown({ labels }: ShiftingCountdownProps) {
    // Memoize target across renders so it doesn't recalculate unless mounted
    const COUNTDOWN_FROM = useMemo(() => getNextSunday7PMEST(), []);

    return (
        <div className="w-full flex flex-col items-center lg:items-end justify-start bg-transparent transition-colors duration-500 py-4 gap-3">
            {labels.title && (
                <span className="text-gray-400 font-semibold text-sm md:text-base tracking-[0.2em] uppercase text-center lg:text-right w-full max-w-lg px-2">
                    {labels.title}
                </span>
            )}
            <div className="flex w-full max-w-lg items-center divide-x divide-zinc-800 border border-zinc-800 rounded-xl bg-black/40 backdrop-blur-sm shadow-2xl">
                <CountdownItem unit="Day" label={labels.days} targetTime={COUNTDOWN_FROM} />
                <CountdownItem unit="Hour" label={labels.hours} targetTime={COUNTDOWN_FROM} />
                <CountdownItem unit="Minute" label={labels.minutes} targetTime={COUNTDOWN_FROM} />
                <CountdownItem unit="Second" label={labels.seconds} targetTime={COUNTDOWN_FROM} />
            </div>
        </div>
    );
}

function CountdownItem({ unit, label, targetTime }: { unit: string, label: string, targetTime: number }) {
    const { ref, time } = useTimer(unit, targetTime);
    // For seconds, ensure two digits (00–59)
    const display = unit === "Second" || unit === "Minute" ? String(time).padStart(2, '0') : time;

    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-1 px-2 py-4 md:px-4 md:py-6 relative overflow-hidden group">
            <div className="relative w-full overflow-hidden text-center z-10">
                <span
                    ref={ref as any}
                    className="block text-2xl md:text-4xl font-mono font-bold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-colors duration-500"
                >
                    {display}
                </span>
            </div>
            <span className="text-xs md:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-magenta to-blue transition-colors duration-500 z-10">
                {label}
            </span>
            {/* Background glow specific to component logic */}
            <div className="absolute inset-0 bg-gradient-to-t from-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>
        </div>
    );
}

function useTimer(unit: string, targetTime: number) {
    const [ref, animate] = useAnimate();
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const timeRef = useRef(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        handleCountdown();
        intervalRef.current = setInterval(handleCountdown, 1000);
        return () => clearInterval(intervalRef.current!);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [targetTime]);

    const handleCountdown = async () => {
        const end = targetTime;
        const now = new Date().getTime();
        const distance = end - now;

        let newTime = 0;

        if (distance > 0) {
            switch (unit) {
                case "Day":
                    newTime = Math.max(0, Math.floor(distance / DAY));
                    break;
                case "Hour":
                    newTime = Math.max(0, Math.floor((distance % DAY) / HOUR));
                    break;
                case "Minute":
                    newTime = Math.max(0, Math.floor((distance % HOUR) / MINUTE));
                    break;
                default:
                    newTime = Math.max(0, Math.floor((distance % MINUTE) / SECOND));
            }
        }

        if (newTime !== timeRef.current && ref.current) {
            // Exit animation
            await animate(
                ref.current,
                { y: ["0%", "-50%"], opacity: [1, 0] },
                { duration: 0.25 }
            );

            timeRef.current = newTime;
            setTime(newTime);

            // Entry animation
            await animate(
                ref.current,
                { y: ["50%", "0%"], opacity: [0, 1] },
                { duration: 0.25 }
            );
        }
    };

    return { ref, time };
}
