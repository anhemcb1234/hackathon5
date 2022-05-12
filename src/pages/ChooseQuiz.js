import React from "react";
import { Link } from "react-router-dom";

export default function ChooseQuiz() {
  return (
    <div>
      ChooseQuiz
      <Link to={"/quiz/1"}>
        <div>Đề 1</div>
      </Link>
      <Link to={"/quiz/2"}>
        <div>Đề 2</div>
      </Link>
      <Link to={"/quiz/3"}>
        <div>Đề 3</div>
      </Link>
    </div>
  );
}
