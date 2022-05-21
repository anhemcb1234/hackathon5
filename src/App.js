import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Quiz from "./pages/Quiz";
import ChooseQuiz from "./pages/ChooseQuiz";
import Result from "./pages/Result"
import DashBoard from "./pages/DashBoard";
import NotFound from "./pages/NotFound";
import Ranking from "./pages/Ranking";
/* import QuizDetail from "./components/QuizDetail"; */
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/choose-quiz" element={<ChooseQuiz />} />
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/ranking" element={<Ranking />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
      </BrowserRouter>
    </div>
  );
}
