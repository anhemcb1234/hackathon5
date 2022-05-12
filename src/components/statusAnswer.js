import React, { useState } from "react";

export default function StatusAnswer() {
    const [ answers, setAnswers] = useState ([])
  return (
    <div>
      <div className="day-la-phan-tra-loi-cau-hoi">
        <button onClick={ ()=> }> Bam vao day de chuyen sang cau tiep theo</button>
      </div>
      <div className="status-Answer rounded-full bg-red-500 w-10 h-10"></div>
      <div className="status-Answer rounded-full bg-green-500 w-10 h-10"></div>
    </div>
  );
}
