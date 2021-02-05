import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

const Header: React.FC = () => {
  const {goBack} = useNavigation();

  const navigateToBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <S.Header>
      <S.BackButton onPress={navigateToBack}>
        <Icon name="chevron-left" size={24} color="#e2ddd8" />
      </S.BackButton>
    </S.Header>
  );
};

export default Header;
