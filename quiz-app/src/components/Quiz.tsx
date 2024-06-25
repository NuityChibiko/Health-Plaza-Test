import React, { useState, useEffect } from "react";
import Question from "./Question";
import { questions as mockQuestions } from "../data/mockData";
import { QuestionType } from "../types";

const shuffleArray = <T,>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

const Quiz: React.FC = () => {
  const [currentQuestions, setCurrentQuestions] = useState<QuestionType[]>(() =>
    shuffleArray(mockQuestions).slice(0, 20)
  );
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string, correctAnswer: string) => {
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    setCurrentQuestions(shuffleArray(mockQuestions).slice(0, 20));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {currentQuestions.map((q, idx) => (
          <Question
            key={idx}
            question={q.question}
            answers={shuffleArray(q.answers)}
            onAnswer={(answer) => handleAnswer(answer, q.correct)}
          />
        ))}
        <div className="mt-4 text-lg font-bold text-center">Score: {score}</div>
      </div>
    </div>
  );
};

export default Quiz;
