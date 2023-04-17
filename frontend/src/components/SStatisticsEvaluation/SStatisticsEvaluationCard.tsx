import React from "react";

interface IProps{
    img: string,
    description: string;
}
const SStatisticsEvaluationCard: React.FC<IProps> = ({
    img,
    description
}) => {
  return (
    <div className="my-10">
      <img className="w-32 h-32 mx-auto" src={img} alt="good emoji" />
      <p className="mt-7">
        {description}
      </p>
    </div>
  );
};

export default SStatisticsEvaluationCard;
