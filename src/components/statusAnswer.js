import React, { useEffect, useState } from "react";

export default function StatusAnswer({ collection }) {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    console.log(collection);
    setAnswers([...answers, ...collection]);
  }, []);
  return (
    <div>
      <div>Day la phan liet ke tat ca cac cau hoi</div>
      <div className="day-la-phan-tra-loi-cau-hoi">
        {/* <button onClick={ ()=> }> Bam vao day de chuyen sang cau tiep theo</button> */}
      </div>
      <div>
        {(answers || []).map((item, index) => {
          if (item?.answers)
            return (
              <div>
                <button onClick={() => {}}>
                  <div className="status-Answer rounded-full bg-green-500 w-10 h-10"></div>{" "}
                </button>
              </div>
            );
          if (!item?.answers)
            return (
              <div>
                <button onClick={() => {}}>
                  <div className="status-Answer rounded-full bg-yellow-500 w-10 h-10"></div>{" "}
                </button>
              </div>
            );
        })}
      </div>
    </div>
  );
}
