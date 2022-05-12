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
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);

  const [questionId, setQuestionId] = useState(0);

  const handlerStart = () => {
    setShow(!show);
  };

  useEffect(() => {
    (async () => {
      try {
        let repsQuestion = await examsServices.getQuestions(id);
        setQuestions(repsQuestion.data);
        setId(searchParam?.get("id"));
      } catch (e) {
        console.log(e);
      }
    })();
  }, [show]);
  const handlerPrevious = () => {
    if(questionId <= 0){
      setQuestionId(0)
      return
    }
    setQuestionId(questionId - 1);
  };
  const handlerNext = () => {
    if(questionId === questions.length - 1){
      setQuestionId(0)
      return
    }
    setQuestionId(questionId + 1);
  };
  return (
    <>
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
            <p>
                Câu hỏi: {questionId+1}/{questions.length}
            </p>
            <div className="flex justify-start flex-col">
              <>
                <p className="font-bold w-full text-2xl text-indigo-700">
                  {questions[questionId]?.question_content}
                </p>
                {questions[questionId]?.answerDTOS?.map((item, index) => (
                  <div className="mx-2 flex items-center" key={index}>
                    <input
                      className="form-check-input mr-2  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                      type={questions[questionId]?.question_type == 1 ? "radio" : "checkbox"}
                      name="flexRadioDefault"
                      id={item?.id}
                    />
                    <label
                      className="form-check-label text-xl inline-block text-gray-800"
                      for={item?.id}
                    >
                      {index + 1}. {item?.answer_content}
                    </label>
                  </div>
                ))}

                {/* {questionId?.filter((item) => item?.id === questionId).question?.map((item, index) => (
                    <>
                      <div
                        key={index}
                        className="form-check p-4 w-full flex flex-col"
                      >
                        <p className="font-bold w-full text-2xl text-indigo-700">Câu {index +1}: {item?.question_content}</p>
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
                  ))} */}
              </>
            </div>
            <div className="flex a justify-between mt-10">
              <button onClick={() => handlerPrevious()} className="float-right hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
                Previous
              </button>
              <button onClick={() => handlerNext()} className="float-right hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
                Next
              </button>
            </div>
            <div className="w-full mt-4">
              <button onClick={() => handlerNext()} className="float-right w-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2">
                Finish
              </button>
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
      )}
    </>
  );
};
export default Quiz;
