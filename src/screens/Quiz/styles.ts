import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {QuizTypes} from '.';

export const Container = styled.View`
  flex: 1;
  background: #58866a;
  align-items: center;
  justify-content: flex-start;
`;

export const testFlat = styled(FlatList as new () => FlatList<QuizTypes>)`
  padding-top: 12px;
`;

export const quizBTN = styled.View`
  background: #fff;
  width: 320px;
  height: 80px;
  margin-bottom: 12px;
  border-radius: 20px;
  padding: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const pageTitle = styled.Text`
  font-size: 24px;
  color: #59866a;
  font-weight: bold;
`;

export const startBtn = styled.TouchableOpacity`
  width: 80px;
  height: 38px;
  border-radius: 10px;
  background: #59866a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const startText = styled.Text`
  color: #f0f0f0;
  font-size: 18px;
  font-weight: bold;
`;
