import React, { useState, useEffect } from 'react';

function Quiz() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  // Aquí debes agregar la lógica para cargar preguntas y opciones.

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Aquí debes agregar la lógica para verificar la respuesta y actualizar el puntaje.
  };

  const nextQuestion = () => {
    // Aquí debes cargar la siguiente pregunta y opciones.
    setSelectedOption(null);
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <h2>Question: {question}</h2>
      <ul>
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={selectedOption === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={nextQuestion}>Next Question</button>
      <p>Score: {score}</p>
    </div>
  );
}

export default Quiz;
