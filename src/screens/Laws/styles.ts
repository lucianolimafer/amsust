import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {ILaw} from '.';

export const Container = styled.View`
  flex: 1;
  padding-top: 24px;
  background: #58866a;
  align-items: center;
  justify-content: center;
`;

export const lawContainerList = styled(FlatList as new () => FlatList<ILaw>)`
  padding: 0 10px;
`;

export const drawImage = styled.Image``;

export const lawItem = styled.View`
  background: #2e3532;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 12px;
`;

export const lawTitle = styled.Text`
  color: #f0f0f0;
  font-size: 18px;
  text-align: justify;
`;

export const lawText = styled.Text`
  color: #b9b9b8;
  font-size: 12px;
  text-align: justify;
`;
