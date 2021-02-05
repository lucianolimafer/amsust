import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import * as S from './styles';

interface IButtoProps extends RectButtonProperties {
  children: string;
}

const BTNmenu: React.FC<IButtoProps> = ({children, ...rest}) => {
  return (
    <S.Container {...rest}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Container>
  );
};

export default BTNmenu;
