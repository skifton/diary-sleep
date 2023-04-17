import { StaticDateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import React from "react";
import { Controller } from "react-hook-form";
dayjs.extend(utc);

interface IProps {
  currentStep: number;
  control: any;
  diaryQuestions: { title: string; hint: string }[];
  getValues: any;
}
const EleventhQuestion: React.FC<IProps> = ({
  currentStep,
  control,
  diaryQuestions,
  getValues
}) => {
  if (currentStep !== 11) return null;
  const minValue = getValues("timeToGetOutOfBed");
  return (
    <div className="">
      <h2 className="text-2xl font-medium">
        {diaryQuestions[currentStep - 1].title}
      </h2>
      <p className="text-gray-600 text-sm font-sm mt-2">
        {diaryQuestions[currentStep - 1].hint}
      </p>
      <Controller
        name="wakeUpTime"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <div className="w-full text-center">
              <StaticDateTimePicker
                defaultValue={dayjs(new Date()).utc()}
                slotProps={{
                  actionBar: {
                    actions: [],
                  },
                  tabs: {
                    hidden: true,
                  },
                }}
                value={value} 
                minDateTime={minValue || null}
                onChange={onChange}
                ampm={false}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default EleventhQuestion;
