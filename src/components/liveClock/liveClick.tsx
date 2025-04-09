import { useEffect, useState } from "react";

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
};

export const LiveClock =({ className }: { className?: string }) => {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-2xl font-mono text-center p-2 ${className}`}>
      {time}
    </div>
  );
};
