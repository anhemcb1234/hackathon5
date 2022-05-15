import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { examsServices } from "../services/examsServices";

const Quiz = () => {
  const [searchParam] = useSearchParams();
  const [id, setId] = useState(() => {
    return searchParam?.get("id");
  });
  const [show, setShow] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [filterSelected, setFilterSelected] = useState([]);
  const [questionId, setQuestionId] = useState(0);
  const [minutes, setMinutes] = useState(10);
  const [second, setSecond] = useState(0);
  const [listAnswer, setListAnswer] = useState([]);
  const [listsAnswer, setListAnswers] = useState([]);
  const [addQuestion, setAddQuestion] = useState([]);
  const [check, setCheck] = useState(false);
  const [dataCheckBox, setDataCheckBox] = useState([]);
  const [dataCheckBoxs, setDataCheckBoxs] = useState([]);

  const handlerStart = () => {
    setShow(!show);
    setMinutes(5);
    setSecond(59);
  };
  useEffect(() => {
    if (second === 0 && minutes === 0) {
      alert("Time is up");
    }
    if (second === 0) {
      setSecond(59);
      setMinutes(minutes - 1);
    }
    let time = setInterval(() => {
      setSecond(second - 1);
    }, 1000);
    return () => clearInterval(time);
  }, [second]);
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
    setCheck();
    setListAnswers((pre) => [...pre, listAnswer]);
    setFilterSelected(dataCheckBox);
    const arr1 = getUniqueListBy(listsAnswer, "question_id");
    setAddQuestion(arr1);
    console.log("arr1", arr1);
    if (questionId <= 0) {
      setQuestionId(0);
      return;
    }
    setQuestionId(questionId - 1);
  };
  const handlerNext = () => {
    setQuestionId(questionId + 1);
    setListAnswers((pre) => [...pre, listAnswer]);
    // setDataCheckBoxs(...dataCheckBoxs, dataCheckBox);
    if (dataCheckBox.length > 0) {
      setFilterSelected([...filterSelected, dataCheckBox]);
    }
    const arr1 = getUniqueListBy(listsAnswer, "question_id");
    setAddQuestion(arr1);
    console.log("arr2", arr1);
    if (questionId === questions.length - 1) {
      setQuestionId(0);
      return;
    }
  };
  const selectedFilterHandle = (id, index, item) => {
    let test = [...questions];
    item.checked = !item.checked;
    item.question_type = 2;
    item.idSingleQuestion = null;
    setQuestions(test);
    let newArray = questions[questionId]?.answerDTOS.filter(
      (x) => x.checked === true
    );
    setDataCheckBox(...dataCheckBox,newArray);
    console.log("newArray", newArray);
    console.log("setDataCheckBox", dataCheckBox);
  };
  const test = () => {
    console.log("listAnswer", listAnswer);
    console.log("addQuestion", addQuestion);
    console.log("questions", questions);
    // console.log("dataCheckBoxssssssss", dataCheckBoxs);
    console.log("dataCheckBox", dataCheckBox);
  };
  useEffect(() => {
    let test = [...questions];
    test.map((x) => x.answerDTOS?.map((y) => (y.checked = false)));
    setQuestions(test);
  }, []);
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  const radioFilterHandler = (id) => {
    console.log(id);
    let testA = [...questions];
    let testing = [...questions];
    testA[questionId]?.answerDTOS?.map((x) => (x.anwer = false));
    testA[questionId]?.answerDTOS?.map((x) => (x.question_type = 1));
    testA[questionId]?.answerDTOS?.map((x) => (x.idSingleQuestion = id));
    let a = testA[questionId]?.answerDTOS?.find((x) => x.id === id);
    if (a.isright === true) {
      a.point = 10;
    }
    console.log("a", a);
    a.anwer = !a.anwer;
    // console.log("questions", questions);
    let filerList = testing[questionId]?.answerDTOS?.find(
      (x) => x.anwer === true
    );
    // console.log("filerList", filerList);

    setListAnswer(filerList);
  };
  const handlerSubmit = async () => {
    await examsServices.addQuestions({
      userId: "1",
      examId: id,
      lstQuestion: addQuestion,
    });
  };
  return (
    <>
      <button onClick={() => test()}>show</button>
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
            <div className="flex justify-between">
              <p>
                Câu hỏi: {questionId + 1}/{questions.length}
              </p>
              <span className="countdown font-mono text-2xl">
                {minutes === 0 ? (
                  ""
                ) : (
                  <>
                    <span style={{ "--value": minutes }}></span>m
                  </>
                )}
                <span style={{ "--value": second }}></span>s
              </span>
            </div>
            <div className="flex justify-start flex-col">
              <>
                <p className="font-bold w-full text-2xl text-indigo-700">
                  {questions[questionId]?.question_content}
                </p>
                {questions[questionId]?.answerDTOS?.map((item, index) => (
                  <div className="mx-2 flex items-center" key={index}>
                    <input
                      className="form-check-input mr-2  appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                      type={
                        questions[questionId]?.question_type == 1
                          ? "radio"
                          : "checkbox"
                      }
                      name="flexRadioDefault"
                      id={item?.id}
                      checked={
                        questions[questionId]?.question_type == 1
                          ? item?.anwer
                          : item?.checked
                      }
                      onChange={
                        questions[questionId]?.question_type == 1
                          ? () => radioFilterHandler(item?.id)
                          : () =>
                              selectedFilterHandle(
                                item?.answer_content,
                                item?.id,
                                item
                              )
                      }
                    />
                    <label
                      className="form-check-label text-xl inline-block text-gray-800"
                      for={item?.id}
                    >
                      {index + 1}. {item?.answer_content}
                    </label>
                  </div>
                ))}
              </>
            </div>
            <div className="flex a justify-between mt-10">
              <button
                onClick={() => handlerPrevious()}
                className="float-right hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
              >
                Previous
              </button>
              <button
                onClick={() => handlerNext()}
                className="float-right hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
              >
                Next
              </button>
            </div>
            <div className="w-full mt-4">
              <button
                onClick={() => handlerSubmit()}
                className="float-right w-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Quiz;
