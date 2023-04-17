import React from "react";

const Instruction: React.FC = () => {
  return (
    <div className="flex w-full h-max bg-teal-500 justify-center text-teal-900 animate__animated animate__bounceInDown">
      <div className="w-full mt-10 mb-10 mx-3 bg-white p-6 rounded-lg shadow-xl lg:w-2/5">
        <h2 className="border-l-2 border-red-500 pl-3 text-xl font-medium">
          What is a Sleep Diary?
        </h2>
        <p className="pt-3">
          A sleep diary is designed to gather information about your daily sleep
          pattern.
        </p>
        <h2 className="border-l-2 border-red-500 mt-10 pl-3 text-xl font-medium">
          How often and when do I fill out the sleep diary?
        </h2>
        <p className="pt-3">
          It is necessary for you to complete your sleep diary every day. If
          possible, the sleep diary should be completed within one hour of
          getting out of bed in the morning.
        </p>
        <h2 className="border-l-2 border-red-500 mt-10 pl-3 text-xl font-medium">
          What should I do if I miss a day?
        </h2>
        <p className="pt-3">
          If you forget to fill in the diary or are unable to finish it, leave
          the diary blank for that day.
        </p>
        <h2 className="border-l-2 border-red-500 mt-10 pl-3 text-xl font-medium">
          What if something unusual affects my sleep or how I feel in the
          daytime?
        </h2>
        <p className="pt-3">
          If your sleep or daytime functioning is affected by some unusual event
          (such as an illness, or an emergency) you may make brief notes on your
          diary.
        </p>
        <h2 className="border-l-2 border-red-500 mt-10 pl-3 text-xl font-medium">
          What do the words “bed” and “day” mean on the diary?
        </h2>
        <p className="pt-3">
          This diary can be used for people who are awake or asleep at unusual
          times. In the sleep diary, the word “day” is the time when you choose
          or are required to be awake. The term “bed” means the place where you
          usually sleep.
        </p>
        <h2 className="border-l-2 border-red-500 mt-10 pl-3 text-xl font-medium">
          Will answering these questions about my sleep keep me awake?
        </h2>
        <p className="pt-3">
          This is not usually a problem. You should not worry about giving exact
          times, and you should not watch the clock. Just give your best
          estimate.
        </p>
      </div>
    </div>
  );
};

export default Instruction;
