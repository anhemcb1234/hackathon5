import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { examsServices } from "../services/examsServices";
function Result() {
  let navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const [id, setId] = useState(() => {
    return searchParam?.get("id");
  });
  const [idUser, setIdUser] = useState(() => {
    return searchParam?.get("idUser");
  });
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName");
  });
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  if (!localStorage.getItem("token")) {
    alert("You must be logged in to access this page");
    navigate("/");
  }
  useEffect(() => {
    (async () => {
      try {
        const reps = await examsServices.getResult(idUser, id);
        setData(reps.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  useEffect(() => {
    let correct = 0;
    let wrong = 0;
    let sumPoint = data.reduce((acc, cur) => {
      acc += cur.mark;
      return acc;
    }, 0);
    for (let i in data) {
      if (data[i].mark == 0) {
        wrong += 1;
      } else {
        correct += 1;
      }
    }
    setResult({
      correct,
      wrong,
      sumPoint,
    });
  }, [result]);

  return (
    <div>
      <div
        id="app"
        className="flex w-full h-screen justify-center items-center"
      >
        <div className="w-full max-w-xl p-3">
          <h1 className="font-bold text-5xl w-full text-center text-indigo-700">
            Result Hackathon Quiz
          </h1>
          <div className="mt-4">
            <p>UserName: {userName}</p>
          </div>
          <div className="mt-1 flex flex-col justify-center items-center">
                <h2 className="text-bold text-3xl text-center">
                  Point: {result?.sumPoint}
                </h2>
                <div className="flex justify-center items-center space-x-4 mt-6">
                  <p>
                    Correct Answers: {result?.correct}
                    <span className="text-2xl text-green-700 font-bold"></span>
                  </p>
                  <p>
                    Wrong Answers:{result?.wrong}
                    <span className="text-2xl text-red-700 font-bold"></span>
                  </p>
                </div>
                <div className="mt-6 flex justify-end w-full">
                  <Link to={`/choose-quiz?userName=${userName}`}>
                    <button className="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
                      Go to home page
                    </button>
                  </Link>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Result;
