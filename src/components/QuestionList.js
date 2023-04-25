import React, {useEffect, useState} from "react"
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [question, setQuestion] = useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => setQuestion(data))
  },[])

  function onDeleteQuestion(id){
    const updatedQuestions = question.filter(quest => quest.id !== id)
    setQuestion(updatedQuestions)
  }


  const allQuestions = question.map(quest => {
    return(
      <QuestionItem key={quest.id} question={quest} onDeleteQuestion={onDeleteQuestion}  />
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
