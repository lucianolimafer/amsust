import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from '../styles';
import Header from '../../components/Header';
import questions from '../../data/quiz/tof';

const QuizTOF: React.FC = () => {
  Icon.loadFont();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <S.Container>
      <Header />
      {showScore ? (
        <S.questionContainer>
          <S.scoreForQuestions>
            Você acertou {score} de {questions.length} questões
          </S.scoreForQuestions>
        </S.questionContainer>
      ) : (
        <>
          <S.currentQuestionContainer>
            <S.currentQuestionCounter>
              Questão {currentQuestion + 1} / {questions.length}
            </S.currentQuestionCounter>
            <S.questionTitle>
              {questions[currentQuestion].questionText}
            </S.questionTitle>
          </S.currentQuestionContainer>
          <>
            <S.answerContainer>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <S.answerBTN
                  onPress={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }>
                  <S.answerOptionText>
                    {answerOption.answerText}
                  </S.answerOptionText>
                </S.answerBTN>
              ))}
            </S.answerContainer>
          </>
        </>
      )}
    </S.Container>
  );
};

export default QuizTOF;
