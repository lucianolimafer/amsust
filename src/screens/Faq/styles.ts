import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {ILaw} from '.';

export const Container = styled.View`
  flex: 1;
  background: #58866a;
  align-items: center;
  justify-content: center;
`;

export const lawContainerList = styled(FlatList as new () => FlatList<ILaw>)`
  padding: 12px 10px 0;
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

export const FiltersView = styled.ScrollView``;

export const FilterBtn = styled.TouchableOpacity`
  padding: 24px 12px;
  background: rgba(46, 53, 50, 0.8);
  border-radius: 8px;
  margin: 4px;
`;

export const FilterText = styled.Text`
  color: #59866A;
  font-size: 18px;
  font-weight: bold;
`;
