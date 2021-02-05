import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 24px;
  background: #58866a;
  align-items: center;
  justify-content: flex-start;
`;

export const questionContainer = styled.View`
  padding: 12px;
`;

export const scoreForQuestions = styled.Text`
  color: #f0f0f0;
  font-size: 24px;
  font-weight: bold;
`;

export const currentQuestionContainer = styled.View`
  padding: 12px;
`;

export const currentQuestionCounter = styled.Text`
  font-size: 24px;
  color: #f0f0f0;
  margin-bottom: 20px;
`;

export const questionTitle = styled.Text`
  color: #f0f0f0;
  text-align: justify;
`;

export const answerContainer = styled.View`
  width: 100%;
  padding: 12px;
`;

export const answerBTN = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  border-radius: 14px;
  border: 1px solid #f0f0f0;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 10px;
`;

export const answerOptionText = styled.Text`
  color: #f0f0f0;
  font-size: 14px;
`;
