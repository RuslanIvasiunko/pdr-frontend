'use client';

import React, { useState, useEffect } from 'react';
import { useMemo } from 'react';
import Question from './Question.jsx';

const QuestionsOfSection = ({ sectionTests }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const sectionTitle = sectionTests.title || 'Робота над помилками';
  useEffect(() => {
    sectionTests?.content
      ? setQuestions(
          sectionTests.content.map(question => ({
            ...question,
            buttonColor: '#F5F5F5',
            selectedAnswer: null,
            isCorrect: null,
          })),
        )
      : setQuestions([]);
  }, [sectionTests]);

  const getButtonStyles = useMemo(() => {
    return index => {
      const isActive = index === currentQuestionIndex;
      const question = questions[index];

      const backgroundColor =
        question?.isCorrect === true
          ? '#90EE90'
          : question?.isCorrect === false
            ? '#FF6347'
            : '#F5F5F5';

      return {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: isActive ? backgroundColor : backgroundColor,
        border: isActive ? '2px solid black' : 'none',
        borderRadius: '4px',
        cursor: isActive ? 'default' : 'pointer',
        pointerEvents: isActive ? 'none' : 'auto',
        margin: '5px',
      };
    };
  }, [currentQuestionIndex, questions]);

  const handleQuestionButtonClick = index => {
    setCurrentQuestionIndex(index);
  };

  const handleAnswerClick = (questionIndex, answerId) => {
    setQuestions(prevQuestions =>
      prevQuestions.map((q, index) => {
        if (index === questionIndex) {
          return {
            ...q,
            selectedAnswer: answerId,
            isCorrect: answerId === q.correctAnswerId,
          };
        }
        return q;
      }),
    );
  };

  return (
    <div>
      {sectionTests && (
        <>
          <h2>{sectionTitle}</h2>
          <ul
            style={{
              display: 'flex',
              listStyleType: 'none',
            }}
          >
            {questions.map((_, index) => (
              <li key={index}>
                <button
                  type="button"
                  style={getButtonStyles(index)}
                  onClick={() => handleQuestionButtonClick(index)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
          <div>
            {questions.length > 0 && (
              <Question
                questions={questions}
                questionIndex={currentQuestionIndex}
                handleAnswerClick={handleAnswerClick}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionsOfSection;
