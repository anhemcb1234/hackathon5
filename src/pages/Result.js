import React from "react";
import {useNavigate} from 'react-router-dom'

function Result() {
  let navigate = useNavigate();
  if (!localStorage.getItem("token")) {
    alert("You must be logged in to access this page");
    navigate("/");
  }
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
          
          </div>
        </div>
      </div>
    </div>
  );
}
export default Result;
