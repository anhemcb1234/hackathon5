import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import StatusAnswer from "../components/statusAnswer";
import { examsServices } from "../services/examsServices";
const Quiz = () => {
  const [searchParam] = useSearchParams();
  const [id, setId] = useState(() => {
    return searchParam?.get("id");
  });
  const [show, setShow] = useState(true);
  const [question, setQuestion] = useState([]);
  const handlerStart = () => {
    setShow(!show);
  };
  const test = () => {
    console.log(question);
    console.log(1)
  };
  useEffect(() => {
    (async () => {
      try {
        let repsQuestion = await examsServices.getQuestions(id);
        setQuestion(repsQuestion.data);
        setId(searchParam?.get("id"));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <>
      <button onClick={() => test()}>test</button>
      {show ? (
        <div
          id="app"
          className="flex w-full h-screen justify-center items-center"
        >
          <div className="w-full max-w-xl p-3">
            <h1 className="font-bold text-5xl text-center text-indigo-700">
              Hackathon Quiz
            </h1>
            <div className="mt-6 flex justify-center items-center">
              <button
                onClick={() => handlerStart()}
                className="float-right hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="app"
          className="flex w-full h-screen justify-center items-center"
        >
          <div className="w-full max-w-xl p-3">
            <div className="bg-white h-50 p-0 rounded-lg shadow-lg w-full mt-8">
              <div className="flex justify-start">
                <div>
                  {question?.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="form-check p-4 w-full flex flex-col"
                      >
                        <h1 className="font-bold text-5xl text-center text-indigo-700">Câu {index +1}: {item?.question_content}</h1>
                        <div className="flex flex-col justify-start items-start">
                          {item?.answerDTOS?.map((question, questionIndex) => (
                            <div className="mx-2 flex items-center">
                              <input
                                key={questionIndex}
                                className="form-check-input mr-2  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                type={
                                  item?.question_type == 1
                                    ? "radio"
                                    : item?.question_type == 2
                                    ? "checkbox"
                                    : "select"
                                }
                                name="flexRadioDefault"
                                id={question?.id}
                              />
                              <label
                                className="form-check-label text-xl inline-block text-gray-800"
                                for={question?.id}
                              >
                                {questionIndex+1}. {question?.answer_content}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}
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
            {/* <div className="mt-6 flex justify-between">
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
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};
export default Quiz;
