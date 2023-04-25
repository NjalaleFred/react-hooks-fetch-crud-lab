import React, {useEffect, useState} from "react";

function QuestionList() {
  const [question, setQuestion] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => setQuestion(data))
  },[])

  const allQuestions = question.map(quest => {
    return(
      <li key={quest.id}> {quest.prompt} </li>
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{allQuestions}</ul>
    </section>
  );
}

export default QuestionList;
