import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Quiz = () => {
  const [id, setId] = useState(1);
  useEffect(() => {
    setId(id + 1);
  });
  return (
    <div id="app" className="flex w-full h-screen justify-center items-center">
      <div className="w-full max-w-xl p-3">
        <h1 className="font-bold text-5xl text-center text-indigo-700">
          Hackathon Quiz
        </h1>
        <div className="bg-white w-50 h-50 p-12 rounded-lg shadow-lg w-full mt-8">
          <div className="flex justify-start">
            <div>
              <div className="form-check w-full flex items-center">
                {/* Checkbox input */}
                <input
                  className="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="checkbox"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label ml-5 text-xl inline-block text-gray-800"
                  for="flexRadioDefault1"
                >
                  Default radio
                </label>
              </div>
              <div className="form-check w-full flex items-center">
                {/* radio input */}
                <input
                  className="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label
                  className="form-check-label ml-5 text-xl inline-block text-gray-800"
                  for="flexRadioDefault2"
                >
                  Default radio
                </label>
              </div>
              <div className="form-check w-full flex items-center">
                {/* radio input */}
                <input
                  className="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label
                  className="form-check-label ml-5 text-xl inline-block text-gray-800"
                  for="flexRadioDefault2"
                >
                  Default radio
                </label>
              </div>
              <div className="form-check w-full flex items-center">
                {/* radio input */}
                <input
                  className="form-check-input  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label
                  className="form-check-label ml-5 text-xl inline-block text-gray-800"
                  for="flexRadioDefault2"
                >
                  Default radio
                </label>
              </div>
            </div>
          </div>

          {/* <div>
            <h2 className="text-bold text-3xl">Results</h2>
            <div className="flex justify-start space-x-4 mt-6">
              <p>
                Correct Answers:
                <span className="text-2xl text-green-700 font-bold">
                  {{ correctAnswers }}
                </span>
              </p>
              <p>
                Wrong Answers:
                <span className="text-2xl text-red-700 font-bold">
                  {{ wrongAnswers }}
                </span>
              </p>
            </div>
            <div className="mt-6 flow-root">
              <button className="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
                Play again
              </button>
            </div>
          </div> */}
        </div>
        <div className="mt-6 flex justify-between">
          <Link to={`/quiz/id=${1}`}>
            <button className="float-right hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
              Previous
            </button>
          </Link>
          <Link to={`/quiz/id=${2}`}>
            <button className="float-right hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
