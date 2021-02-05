import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Impacts} from '.';

export const Container = styled.View`
  padding: 12px 0;
  flex: 1;
  background: #55856c;
  border-top-right-radius: 180px;
  border-bottom-left-radius: 180px;
`;

export const areaViwScroller = styled.ScrollView`
  flex: 1;
`;

export const IntroContent = styled.View`
  padding: 24px 24px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ImageIntro = styled.Image`
  width: 90px;
  height: 90px;
`;

export const IntroView = styled.View`
  padding: 0 12px 12px 0;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 35px;
`;

export const TxtOne = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const BTNspaceHorizontal = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const BTN = styled.TouchableOpacity`
  background: #7fad96;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-left: 10px;
  align-items: center;
`;

export const btnTitle = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

export const BackImage = styled.Image`
  width: 100px;
  height: 80%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  opacity: 0.8;
`;

export const TitlePages = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 12px 0;
`;

export const TitlePagesText = styled.Text`
  color: #f0f0f0;
  font-size: 24px;
`;

export const Pages = styled.View`
  padding: 12px 0 24px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const scrolPages = styled(FlatList as new () => FlatList<Impacts>)`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin-left: -25px;
`;

export const SolidWaste = styled.TouchableOpacity`
  width: 200px;
  height: 230px;
  background: #2e3532;
  border: 1px solid #78ecb2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-right: 12px;
`;

export const imagePage = styled.Image`
  width: 150px;
  height: 150px;
  position: absolute;
  right: 0;
  top: 0;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 150px;
  opacity: 0.8;
`;
export const TitlePagesBtn = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  padding: 12px;
`;

export const btnDenounce = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  background: #d42439;
  margin-left: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

export const textBtnDenounce = styled.Text`
  font-size: 24px;
  color: #f0f0f0;
`;
