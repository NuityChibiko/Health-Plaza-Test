import React from "react";

interface QuestionProps {
  question: string;
  answers: string[];
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, answers, onAnswer }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md mb-4 bg-white">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {answers.map((answer, idx) => (
          <button
            key={idx}
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors duration-300"
            onClick={() => onAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
