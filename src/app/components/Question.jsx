'use client';

import { useState, useEffect } from 'react';

import { addError } from '@/utils/errors.js';
import Timer from './Timer';

const Question = ({
  questions,
  questionIndex,
  handleAnswerClick,
  setCurrentQuestionIndex,
}) => {
  const [isAnswered, setIsAnswered] = useState(false);
  const timerHeader = 'Час на запитання:';
  const isActive = questions[questionIndex].selectedAnswer === null;

  const handleAnswerAndNext = selectedAnswerId => {
    const currentQuestion = questions[questionIndex];
    const isCorrect = selectedAnswerId === currentQuestion.correctAnswerId;

    handleAnswerClick(questionIndex, selectedAnswerId);

    if (!isCorrect) {
      const errorQuestion = {
        id: currentQuestion.number,
        question: currentQuestion.question,
        answers: currentQuestion.answers,
        correctAnswerId: currentQuestion.correctAnswerId,
      };

      addError(errorQuestion);
    }
    setIsAnswered(true);

    setTimeout(() => {
      setIsAnswered(false);
      const nextUnansweredQuestionIndex = questions.findIndex(
        (question, index) =>
          index > questionIndex && question.selectedAnswer === null,
      );

      if (nextUnansweredQuestionIndex !== -1) {
        setCurrentQuestionIndex(nextUnansweredQuestionIndex);
      } else {
        const firstUnanswered = questions.findIndex(
          question => question.selectedAnswer === null,
        );

        if (firstUnanswered !== -1) {
          setCurrentQuestionIndex(firstUnanswered);
        } else {
        }
      }
    }, 1500);
  };

  const getButtonColor = (question, answerId) => {
    if (question.selectedAnswer === null) {
      return '#F5F5F5';
    }

    if (answerId === question.correctAnswerId) {
      return '#90EE90';
    }

    if (answerId === question.selectedAnswer) {
      return '#FF6347';
    }
    return '#F5F5F5';
  };

  return (
    <div>
      <Timer
        timerHeader={timerHeader}
        key={questionIndex}
        isActive={isActive}
      />
      <h3>{questions[questionIndex].question}</h3>
      <ul>
        {questions[questionIndex].answers.map((answer, index) => (
          <li key={index}>
            <button
              type="button"
              style={{
                padding: '10px',
                fontSize: '16px',
                backgroundColor: getButtonColor(
                  questions[questionIndex],
                  answer.id,
                ),
                border: 'none',
                borderRadius: '4px',
                cursor:
                  questions[questionIndex].selectedAnswer === null
                    ? 'pointer'
                    : 'default',
                pointerEvents:
                  questions[questionIndex].selectedAnswer !== null
                    ? 'none'
                    : 'auto',
                margin: '5px',
              }}
              onClick={() => handleAnswerAndNext(answer.id)}
            >
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
