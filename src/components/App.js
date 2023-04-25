import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
 const [newQuestion, setNewQuestion] = useState("")

  // function addNewQuestion(question){
  //   const updatedQuestions = [...newQuestion, question]
  //   setNewQuestion(updatedQuestions)
  // }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /*OnAddNewQuestion={addNewQuestion}*/ /> : <QuestionList />}
    </main>
  );
}

export default App;
