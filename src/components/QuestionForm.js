import React, { useState } from "react";

function QuestionForm({ onAddNewQuestion }) {
  const [formData, setFormData] = useState({
    prompt: "lorem testum 1",
    answers: ["choice 1", "choice 2", "choice 3", "choice 4"],
    correctIndex: 0,
  });

  function handleChange(event) {
    const { name, value, dataset } = event.target;
    if (name === "prompt") {
      setFormData({
        ...formData,
        prompt: value,
      });
    } else {
      const updatedAnswers = [...formData.answers];
      updatedAnswers[dataset.index] = value;
      setFormData({
        ...formData,
        answers: updatedAnswers,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => onAddNewQuestion(data));
    //.then((data) => setNewQuestion(data));
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Answer 1:
          <input
            type="text"
            name="answer1"
            value={formData.answers[0]}
            onChange={handleChange}
            data-index={0}
          />
        </label>
        <label>
          Answer 2:
          <input
            type="text"
            name="answer2"
            value={formData.answers[1]}
            onChange={handleChange}
            data-index={1}
          />
        </label>
        <label>
          Answer 3:
          <input
            type="text"
            name="answer3"
            value={formData.answers[2]}
            onChange={handleChange}
            data-index={2}
          />
        </label>
        <label>
          Answer 4:
          <input
            type="text"
            name="answer4"
            value={formData.answers[3]}
            onChange={handleChange}
            data-index={3}
          />
        </label>

        <label>
          Correct Answer:
          <select
            name="correctIndex"
            value={formData.correctIndex}
            onChange={handleChange}
          >
            <option value="0">{formData.answers[0]}</option>
            <option value="1">{formData.answers[1]}</option>
            <option value="2">{formData.answers[2]}</option>
            <option value="3">{formData.answers[3]}</option>
          </select>
        </label>
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
