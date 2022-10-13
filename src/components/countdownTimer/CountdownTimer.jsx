import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getRemainingTimeUntilMsTimestemp } from "./utils/UtilsCountdownTimer";
import './CountdownTimerStyles.css';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

export const CountdownTimer = (countdownTimestampMs) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  // console.log(remainingTime)
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  });

  function updateRemainingTime(countdown) {
  // console.log(countdown)

    setRemainingTime(getRemainingTimeUntilMsTimestemp(countdown))
  }

  return (
    <div className="countdown-timer">
      <span className="countdown-timer__item-value">
        { remainingTime.days }
      </span>
      <span className="countdown-timer__item-name">
        DAYS
      </span>
      <span className="countdown-timer__item-value">
        { remainingTime.hours }
      </span>
      <span className="countdown-timer__item-name">
        HOURS
      </span>
      <span className="countdown-timer__item-value">
        { remainingTime.minutes }
      </span>
      <span className="countdown-timer__item-name">
        MINUTES
      </span>
      <span className="countdown-timer__item-value">
        { remainingTime.seconds }
      </span>
      <span className="countdown-timer__item-name">
        SECONDS LEFT !
      </span>
    </div>
  )
}
