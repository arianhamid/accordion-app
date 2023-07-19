import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ question }) => {
  const { title, info } = question;
  const [isShow, setIsShow] = useState(false);
  return (
    <article>
      <h2>{title}</h2>
      {isShow ? <div>{info}</div> : <p>show content</p>}

      <button className="btn" onClick={() => setIsShow(!isShow)}>
        {isShow ? "hide" : "show"}
      </button>
    </article>
  );
};

export default Question;
