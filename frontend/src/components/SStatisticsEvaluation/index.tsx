import React from "react";
import GoodEmoji from "../../assets/good.png";
import AmazingEmoji from "../../assets/amazing.png";
import SoSoEmoji from "../../assets/so-so.png";
import BadEmoji from "../../assets/bad.png";
import AwfulEmoji from "../../assets/awful.png";
import SStatisticsEvaluationCard from "./SStatisticsEvaluationCard";

interface IProps {
  sleepEfficiency: string;
}
const SStatisticsEvaluation: React.FC<IProps> = ({ sleepEfficiency }) => {
  if (Number(sleepEfficiency) >= 0 && Number(sleepEfficiency) <= 20) {
    return (
      <SStatisticsEvaluationCard
        img={AwfulEmoji}
        description="These are very bad indicators. Your sleep is extremely weak and
        unstable, in order to avoid health problems, please consult a doctor
        or try to restore your sleep pattern yourself."
      />
    );
  } else if (Number(sleepEfficiency) > 20 && Number(sleepEfficiency) <= 40) {
    return (
      <SStatisticsEvaluationCard
        img={BadEmoji}
        description="The state of your sleep makes you wary. We strongly recommend that you follow some recommendations for improving sleep. If necessary, you can consult a doctor."
      />
    );
  } else if (Number(sleepEfficiency) > 40 && Number(sleepEfficiency) <= 60) {
    return (
      <SStatisticsEvaluationCard
        img={SoSoEmoji}
        description="Your sleep is unstable, but there is no reason to worry. For better performance, try to spend less time in bed and only go to bed when you feel like sleeping."
      />
    );
  } else if (Number(sleepEfficiency) > 60 && Number(sleepEfficiency) <= 80) {
    return (
      <SStatisticsEvaluationCard
        img={GoodEmoji}
        description="Sufficiently high rates of sleep efficiency. You are really doing well, do not stop listening to advice and the results will be even better."
      />
    );
  } else if (Number(sleepEfficiency) > 80 && Number(sleepEfficiency) <= 100) {
    return (
      <SStatisticsEvaluationCard
        img={AmazingEmoji}
        description="As good as it gets. Your sleep is rapidly approaching perfection. You are a great guy, keep it up!"
      />
    );
  }
  return (
    <div className="mt-10">
      <p>
        Unfortunately, there is no information about this day. Please fill in
        <br />
        all the required data on the main page or select a different time
        <br />
        period.
      </p>
    </div>
  );
};

export default SStatisticsEvaluation;
