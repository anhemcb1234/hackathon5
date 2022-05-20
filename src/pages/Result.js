import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const [data, setData] = useState([]);
  if (!localStorage.getItem("token")) {
    alert("You must be logged in to access this page");
    navigate("/");
  }
  useEffect(() => {
    (async () => {
      try {
        const reps = await examsServices.getResult(idUser, id);
        setData(reps.data);
        console.log(reps);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div>
      <div
        id="app"
        className="flex w-full h-screen justify-center items-center"
      >
        <div className="w-full max-w-xl p-3">
          <h1 className="font-bold text-5xl text-center text-indigo-700">
            Result Hackathon Quiz
          </h1>
          <div className="mt-6 flex flex-col justify-center items-center">
            {data?.map((item, index) => {
              <>
                <div>
                  <h2 className="text-bold text-3xl">Results</h2>
                  <div className="flex justify-start space-x-4 mt-6">
                    <p>
                      Correct Answers:
                      <span className="text-2xl text-green-700 font-bold">
                        
                      </span>
                    </p>
                    <p>
                      Wrong Answers:
                      <span className="text-2xl text-red-700 font-bold">
                      </span>
                    </p>
                  </div>
                  <div className="mt-6 flow-root">
                    <button className="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
                      Play again
                    </button>
                  </div>
                </div>
              </>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Result;
