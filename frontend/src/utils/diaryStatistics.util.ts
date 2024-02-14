import dayjs from "dayjs";
import { IDiary } from "../models/diary.model";

export const getThisWeekDates = () => {
  const currentDate = new Date();
  const firstDayOfThisWeek = currentDate.getDate() - currentDate.getDay();
  const lastDayOfThisWeek = firstDayOfThisWeek + 6;

  return [
    new Date(currentDate.setDate(firstDayOfThisWeek)).toISOString(),
    new Date(currentDate.setDate(lastDayOfThisWeek)).toISOString(),
  ];
};

export const getLastTwoWeekDates = () => {
  var today = new Date();
  var lastTwoWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 14
  );
  return [lastTwoWeek.toISOString(), today.toISOString()];
};

function msToTime(duration: number) {
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  return hours + "h " + minutes + "m";
}

export const getTotalSleepTimeInMs = (
  wakeUpTime: number,
  decisionTimeToSleep: number,
  numberOfMinutesBeforeSleep: number,
  totalWakeUpTime: number
) => {
  return (
    wakeUpTime -
    decisionTimeToSleep -
    numberOfMinutesBeforeSleep * 60000 -
    totalWakeUpTime * 60000
  );
};

export const getCorrectDateFromDayjs = (date: string | undefined): any => {
  return dayjs(date).toDate();
};

export const getDiaryStatisticForOneDay = (diary: IDiary | undefined) => {
  if (!diary)
    return {
      totalSleepTime: "No Data",
      timeToFallAsleep: "No Data",
      timeAwakeInTheMiddleOfTheNight: "No Data",
      sleepEfficiency: "No Data",
      correctTotalTimeInBed: "No Data",
      sleepTime: "No Data",
      riseTime: "No Data",
    };
  const timeWentToBedYesterday = getCorrectDateFromDayjs(
    diary?.timeWentToBedYesterday
  );
  const timeToGetOutOfBed = getCorrectDateFromDayjs(diary?.timeToGetOutOfBed);
  const decisionTimeToSleep = getCorrectDateFromDayjs(
    diary?.decisionTimeToSleep
  );
  const wakeUpTime = getCorrectDateFromDayjs(diary?.wakeUpTime);
  const numberOfMinutesBeforeSleep = diary?.numberOfMinutesBeforeSleep;
  const totalWakeUpTime = diary?.totalWakeUpTime;
  const totalSleepTimeInMs = getTotalSleepTimeInMs(
    wakeUpTime,
    decisionTimeToSleep,
    numberOfMinutesBeforeSleep || 0,
    totalWakeUpTime || 0
  );
  const totalSleepTime = msToTime(totalSleepTimeInMs);
  const totalTimeInBed = timeToGetOutOfBed - timeWentToBedYesterday;
  const correctTotalTimeInBed = msToTime(totalTimeInBed);
  const sleepEfficiency = (totalSleepTimeInMs / totalTimeInBed) * 100;
  return {
    totalSleepTime,
    timeToFallAsleep: `${numberOfMinutesBeforeSleep}m`,
    timeAwakeInTheMiddleOfTheNight: `${totalWakeUpTime}m`,
    sleepEfficiency: `${Math.floor(sleepEfficiency)}%`,
    correctTotalTimeInBed,
    sleepTime: decisionTimeToSleep.toTimeString().slice(0, 5),
    riseTime: wakeUpTime.toTimeString().slice(0, 5),
  };
};

export const getDiaryStatisticForDateRange = (
  diaryList: IDiary[] | undefined
) => {
  if (diaryList?.length === 0)
    return {
      averageTimeToSleep: "No Data",
      averageTotalTimeToFallSleep: "No Data",
      averageAmountOfTimeAwakeInTheMiddleOfTheNight: "No Data",
      averageSleepEfficiency: "No Data",
      averageTotalTimeInBed: "No Data",
    };
  const result = diaryList?.map((diary) => {
    const timeWentToBedYesterday = getCorrectDateFromDayjs(
      diary?.timeWentToBedYesterday
    );
    const timeToGetOutOfBed = getCorrectDateFromDayjs(diary?.timeToGetOutOfBed);
    const decisionTimeToSleep = getCorrectDateFromDayjs(
      diary?.decisionTimeToSleep
    );
    const wakeUpTime = getCorrectDateFromDayjs(diary?.wakeUpTime);
    const numberOfMinutesBeforeSleep = diary?.numberOfMinutesBeforeSleep;
    const totalWakeUpTime = diary?.totalWakeUpTime;
    const totalSleepTimeInMs = getTotalSleepTimeInMs(
      wakeUpTime,
      decisionTimeToSleep,
      numberOfMinutesBeforeSleep || 0,
      totalWakeUpTime || 0
    );
    const totalTimeInBed = timeToGetOutOfBed - timeWentToBedYesterday;
    const sleepEfficiency = (totalSleepTimeInMs / totalTimeInBed) * 100;
    return {
      totalSleepTimeInMs,
      numberOfMinutesBeforeSleep,
      totalWakeUpTime,
      sleepEfficiency,
      totalTimeInBed,
    };
  });
  return {
    averageTimeToSleep: msToTime(
      (result
        ?.map((field) => field.totalSleepTimeInMs)
        .reduce((p, c) => p + c, 0) || 0) / (result?.length || 1)
    ),
    averageTotalTimeToFallSleep: `${Math.floor(
      (result
        ?.map((field) => field.numberOfMinutesBeforeSleep)
        .reduce((p, c) => p + c, 0) || 0) / (result?.length || 1)
    )}m`,
    averageAmountOfTimeAwakeInTheMiddleOfTheNight: `${Math.floor(
      (result
        ?.map((field) => field.totalWakeUpTime)
        .reduce((p, c) => p + c, 0) || 0) / (result?.length || 1)
    )}m`,
    averageSleepEfficiency: `${Math.floor(
      (result
        ?.map((field) => field.sleepEfficiency)
        .reduce((p, c) => p + c, 0) || 0) / (result?.length || 1)
    )}%`,
    averageTotalTimeInBed: msToTime(
      (result
        ?.map((field) => field.totalTimeInBed)
        .reduce((p, c) => p + c, 0) || 0) / (result?.length || 1)
    ),
  };
};

const getDataForChart = () => {
  
}
