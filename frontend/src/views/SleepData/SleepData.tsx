import React, { useContext, useState } from "react";
import SleepDataCard from "./SleepDataCard";
import AuthContext from "../../contexts/AuthContext";
import { useGetDiaryList } from "../../services/diary.service";
import {
  getDiaryStatisticForDateRange,
  getDiaryStatisticForOneDay,
  getLastTwoWeekDates,
  getThisWeekDates,
} from "../../utils/diaryStatistics.util";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SModal from "../../components/SModal";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import SStatisticsEvaluation from "../../components/SStatisticsEvaluation";
import SChart from "../../components/SChart";

const SleepData: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>({ name: "Today" });
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const context = useContext(AuthContext);
  const { diaryList } = useGetDiaryList(
    context?.user?.userId ? context.user.userId : ""
  );
  const [statistic, setStatistic] = useState<any>(
    getDiaryStatisticForOneDay(
      diaryList?.find(
        (field) =>
          field.createdAt?.slice(0, 10) ===
          new Date().toISOString().slice(0, 10)
      )
    )
  );
  const dataForChart = '';

  const onClickTodayButtonHandler = () => {
    setStatistic(
      getDiaryStatisticForOneDay(
        diaryList?.find(
          (field) =>
            field.createdAt?.slice(0, 10) ===
            new Date().toISOString().slice(0, 10)
        )
      )
    );
    setSelected({ name: "Today" });
    onCloseModalHandler();
  };

  const onClickThisWeekButtonHandler = () => {
    const thisWeek = getThisWeekDates();
    setStatistic(
      getDiaryStatisticForDateRange(
        diaryList?.filter(
          (field) =>
            new Date(field?.createdAt ? field?.createdAt : "").getDate() >=
              new Date(thisWeek[0]).getDate() &&
            new Date(field?.createdAt ? field?.createdAt : "").getDate() <=
              new Date(thisWeek[1]).getDate()
        )
      )
    );
    setSelected({ name: "This Week" });
    onCloseModalHandler();
  };

  const onClickTwoLastWeekButtonHandler = () => {
    const twoLastWeek = getLastTwoWeekDates();
    setStatistic(
      getDiaryStatisticForDateRange(
        diaryList?.filter(
          (field) =>
            new Date(field?.createdAt ? field?.createdAt : "").getDate() >=
              new Date(twoLastWeek[0]).getDate() &&
            new Date(field?.createdAt ? field?.createdAt : "").getDate() <=
              new Date(twoLastWeek[1]).getDate()
        )
      )
    );
    setSelected({ name: "Last 2 Week" });
    onCloseModalHandler();
  };

  const onCloseModalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onSubmitDateRangeHandler = (item: any) => {
    if (item.selection.endDate !== item.selection.startDate) {
      setSelected({
        name: `${new Date(
          item.selection.startDate
        ).toDateString()} - ${new Date(item.selection.endDate).toDateString()}`,
      });
      setStatistic(
        getDiaryStatisticForDateRange(
          diaryList?.filter(
            (field) =>
              new Date(field?.createdAt ? field?.createdAt : "").getDate() >=
                new Date(item.selection.startDate).getDate() &&
              new Date(field?.createdAt ? field?.createdAt : "").getDate() <=
                new Date(item.selection.endDate).getDate()
          )
        )
      );
      setState([item.selection]);
      onCloseModalHandler();
    }
    setState([item.selection]);
  };
  
  return (
    <div className="w-full text-center text-teal-900 font-medium animate__animated animate__bounceInDown">
      <SModal isOpen={isOpenModal} onCloseModal={onCloseModalHandler}>
        <div className="w-full flex justify-center mb-10">
          <button
            className="px-8 py-3 bg-gray-200 rounded-full ml-5 hover:bg-gray-100"
            onClick={onClickTodayButtonHandler}
            type="button"
          >
            Today
          </button>
          <button
            className="px-8 py-3 bg-gray-200 rounded-full ml-5 hover:bg-gray-100"
            onClick={onClickThisWeekButtonHandler}
            type="button"
          >
            This Week
          </button>
          <button
            className="px-8 py-3 bg-gray-200 rounded-full ml-5 hover:bg-gray-100"
            onClick={onClickTwoLastWeekButtonHandler}
            type="button"
          >
            Last 2 Week
          </button>
        </div>
        <div className="flex justify-center">
          <DateRange
            editableDateInputs={true}
            onChange={onSubmitDateRangeHandler}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        </div>
      </SModal>
      <div className="flex justify-center items-center mt-8">
        <button className="flex items-center" onClick={onCloseModalHandler}>
          <p className="mr-2 text-xl font-medium cursor-pointer">
            <u>{selected.name}</u>
          </p>
          <ChevronDownIcon className="w-5 h-5 cursor-pointer" />
        </button>
      </div>
      <SStatisticsEvaluation sleepEfficiency={statistic?.sleepEfficiency?.slice(0, -1) || statistic?.averageSleepEfficiency?.slice(0, -1)}/>
      {selected.name === "Today" ? (
        <div className="w-full h-max bg-teal-500 mt-10 pb-5 px-5 lg:px-10">
          <SleepDataCard
            title="Total sleep time"
            value={statistic?.totalSleepTime}
          />
          <SleepDataCard
            title="Time to fall asleep"
            value={statistic?.timeToFallAsleep}
          />
          <SleepDataCard
            title="Time awake in the middle of the night"
            value={statistic?.timeAwakeInTheMiddleOfTheNight}
          />
          <SleepDataCard
            title="Sleep efficiency"
            value={statistic?.sleepEfficiency}
          />
          <SleepDataCard
            title="Total time in bed"
            value={statistic?.correctTotalTimeInBed}
          />
          <SleepDataCard title="Sleep time" value={statistic?.sleepTime} />
          <SleepDataCard title="Rise time" value={statistic?.riseTime} />
        </div>
      ) : (
        <div className="w-full h-max bg-teal-500 mt-10 mb-10 px-5 lg:px-10">
          <SleepDataCard
            title="Average Total Sleep time"
            value={statistic?.averageTimeToSleep}
          />
          <SleepDataCard
            title="Average Total Time to Fall Asleep"
            value={statistic?.averageTotalTimeToFallSleep}
          />
          <SleepDataCard
            title="Average Amount of Time Awake in the Middle of the Night"
            value={statistic?.averageAmountOfTimeAwakeInTheMiddleOfTheNight}
          />
          <SleepDataCard
            title="Sleep Efficiency"
            value={statistic?.averageSleepEfficiency}
          />
          <SleepDataCard
            title="Average Total Time in Bed"
            value={statistic?.averageTotalTimeInBed}
          />
        </div>
      )}
      <SChart />
    </div>
  );
};

export default SleepData;
