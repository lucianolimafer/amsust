import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {ICourse} from '.';

export const Container = styled.View`
  flex: 1;
  padding-top: 24px;
  background: #58866a;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 48px;
  background: #2e3532;
  margin-bottom: 24px;
  padding: 12px;
`;

export const BackButton = styled.TouchableOpacity``;

export const CourseContainer = styled(FlatList as new () => FlatList<ICourse>)`
  padding: 0 10px;
`;

export const CourseArea = styled.TouchableOpacity`
  margin-bottom: 10px;
  background: #314c40;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CourseAreaToImage = styled.View`
  width: 80px;
`;

export const CourseImage = styled.Image`
  width: 80px;
  height: 100px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const CourseTextArea = styled.View`
  width: 250px;
  padding: 1px 8px;
  display: flex;
`;

export const CourseTitle = styled.Text`
  color: #f0f0f0;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const CourseLocal = styled.Text`
  color: #f0f0f0;
  font-size: 12px;
`;
