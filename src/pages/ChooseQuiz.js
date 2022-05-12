import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { examsServices } from "../services/examsServices";

export default function ChooseQuiz() {
  const [exams, setExams] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("You must be logged in to access this page");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const reps = await examsServices.getExams();
        setExams(reps.data);
        console.log(reps);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
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
          <div className="mt-6 flex flex-col justify-center items-center">
            {exams?.map((exam, index) => (
              <div key={index} className="w-full my-2">
                <Link to={`/quiz?id=${exam?.id}`}>
                  <button className="float-right w-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
                    {exam?.exam_name}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
