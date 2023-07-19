import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h4>Questions And Answers About Login</h4>
        <section className="info">
          {question.map((question) => {
            return <SingleQuestion key={question.id} question={question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
