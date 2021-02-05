import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/Header';
import * as S from './styles';

export interface QuizTypes {
  key: string;
  page: string;
  name: string;
}

const Quiz: React.FC = () => {
  Icon.loadFont();

  const pagesQuiz = [
    {key: '1', name: 'Acid Rain', page: 'QuizAcidRain'},
    {key: '2', name: 'Composting', page: 'QuizCompost'},
    {key: '3', name: 'Environment', page: 'QuizEnviron'},
    {key: '4', name: 'Oil', page: 'QuizOil'},
    {key: '5', name: 'Batteries', page: 'QuizPils'},
    {key: '6', name: 'Events', page: 'QuizRelact'},
    {key: '7', name: 'True or false', page: 'QuizTOF'},
  ];

  const {navigate} = useNavigation();

  return (
    <S.Container>
      <Header />
      <S.testFlat
        showsVerticalScrollIndicator={false}
        data={pagesQuiz}
        renderItem={({item: quiz}) => (
          <S.quizBTN>
            <S.pageTitle>{quiz.name}</S.pageTitle>
            <S.startBtn onPress={() => navigate(quiz.page)}>
              <S.startText>Start</S.startText>
              <Icon name="chevron-right" size={12} color="#ffffff" />
            </S.startBtn>
          </S.quizBTN>
        )}
      />
    </S.Container>
  );
};

export default Quiz;
