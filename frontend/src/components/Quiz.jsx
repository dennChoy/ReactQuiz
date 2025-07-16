import { useState, useCallback, useRef } from 'react'

import Question from './Question.jsx';
import Summary from './Summary.jsx';

import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
   
    const activeQuestionIndex = (userAnswers === undefined) ? 0 : userAnswers.length;;
    const quizIsComplete = QUESTIONS.length === activeQuestionIndex;
   
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
            setUserAnswers((prevUserAnswers) => {
                return [...prevUserAnswers, selectedAnswer]
            })
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null), 
        [handleSelectAnswer]
    );

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers}  />
    }

    return (<div id="quiz">
        <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
         />
    </div>) 
}