import * as yup from "yup";

export const RegistrationFormSchema = yup
  .object({
    name: yup.string().required("Name is a required field"),
    surname: yup.string().required("Surname is a required field"),
    email: yup.string().email().required("Email is a required field"),
    bDay: yup.string().required("Please, set your birth date."),
    password: yup
      .string()
      .required("Password is a required field")
      .min(6, "Password length should be at least 6 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is a required field")
      .min(6, "Password length should be at least 6 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([yup.ref("password")], "Passwords do not match"),
  })
  .required();

export const LoginFormSchema = yup.object({
  email: yup
    .string()
    .email("Incorrect E-mail address.")
    .required("Email is a required field"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(6, "Password length should be at least 6 characters")
    .max(12, "Password cannot exceed more than 12 characters"),
  isRemember: yup.boolean(),
});

export const DiaryFormSchema = yup
  .object({
    amountOfSleepYesterday: yup.number(),
    totalMinutesOfSleepYesterday: yup.number(),
    kindOfSport: yup.string(),
    totalMinutesOfSports: yup.number(),
    numberOfCigarretesSmokedYesterday: yup.number(),
    kindOfAlcohol: yup.string(),
    amountOfAlcoholConsumedYesterday: yup.number(),
    nameOfTheSleepingPill: yup.string(),
    doseOfTheSleepingPill: yup.number(),
    timeWentToBedYesterday: yup
      .string()
      .required("You must complete this field!"),
    decisionTimeToSleep: yup.string().required("You must complete this field!"),
    numberOfMinutesBeforeSleep: yup
      .number()
      .required("You must complete this field!"),
    numberOfAwakeningsAtNight: yup
      .number()
      .required("You must complete this field!"),
    totalWakeUpTime: yup.number(),
    wakeUpTime: yup.string().required("You must complete this field!"),
    timeToGetOutOfBed: yup.string().required("You must complete this field!"),
    timeOfSleep: yup.number().required("You must complete this field!"),
    rateOfSleep: yup.number().required("You must complete this field!"),
    comment: yup.string(),
  })
  .required();
