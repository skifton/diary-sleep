export interface IDiary {
    id?: string,
    user_id?: string,
    amountOfSleepYesterday?: number,
    totalMinutesOfSleepYesterday?: number,
    kindOfSport?: string,
    totalMinutesOfSports?: number,
    numberOfCigarretesSmokedYesterday?: number,
    kindOfAlcohol?: string,
    amountOfAlcoholConsumedYesterday?: number,
    nameOfTheSleepingPill?: string,
    doseOfTheSleepingPill?: number,
    timeWentToBedYesterday: string, //
    decisionTimeToSleep: string,//
    numberOfMinutesBeforeSleep: number,//
    numberOfAwakeningsAtNight: number,//
    totalWakeUpTime: number,//
    wakeUpTime: string,//
    timeToGetOutOfBed: string,//
    timeOfSleep: number,//
    rateOfSleep: number,
    comment?: string,
    createdAt?: string,
    updatedAt?: string,
}