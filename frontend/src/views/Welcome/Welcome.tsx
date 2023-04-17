import React from "react";
import { Link } from "react-router-dom";
import 'animate.css';

const Welcome: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-bold text-6xl pt-80 animate__bounceIn">Welcome to Sleep Diary!</h1>
      <p className="pt-10 text-xl animate__bounceIn">
        Here you can keep your own sleep diary to track changes and view overall
        statistics.
      </p>
      <div className="mt-52 animate__bounceIn">
        <Link
          to="/registration"
          className="text-xl bg-teal-900 px-8 py-4 rounded-full hover:bg-teal-950"
        >
          Get Started!
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
