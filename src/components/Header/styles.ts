import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Header = styled.View`
  width: 100%;
  height: 80px;
  background: #2e3532;
  padding-top: ${getStatusBarHeight() + 12}px;
  padding-left: 12px;
  padding-bottom: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;
