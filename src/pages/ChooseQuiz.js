import React from "react";
import { Link } from "react-router-dom";

export default function ChooseQuiz() {
  return (
    <>
      <div
        id="app"
        className="flex w-full h-screen justify-center items-center"
      >
        <div className="w-full max-w-xl p-3">
          <h1 className="font-bold text-5xl text-center text-indigo-700">
            Hackathon Quiz
          </h1>
          <div className="mt-6 flex justify-center items-center">
            <Link to={`/quiz/id=${1}`}>
              <button
                className="float-right hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
              >
                Đề 1
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
