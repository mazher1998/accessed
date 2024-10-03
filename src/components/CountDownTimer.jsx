"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    setTimeLeft({ days, hours, minutes });
  };

  useEffect(() => {
    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000 * 60);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
    <div className="d-flex">
      <div className="pxy-15-12 bg-FFFFFF border-radius-6 timer-shadow mr-6">
        <span className="text-3980F3">{timeLeft.days} days </span>
      </div>
      <div className="pxy-15-12 bg-FFFFFF border-radius-6 timer-shadow mr-6">
        <span className="text-3980F3"> {timeLeft.hours} hours </span>
      </div>
      <div className="pxy-15-12 bg-FFFFFF border-radius-6 timer-shadow">
        <span className="text-3980F3">{timeLeft.minutes} minutes </span>
      </div>
    </div>
    </>
  );
};

export default CountdownTimer;
