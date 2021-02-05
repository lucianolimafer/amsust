import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';
import Header from '../../components/Header';
import lawsAPI from '../../services/lawssAPI';

export interface ILaw {
  objectId: string;
  lei: string;
  text: string;
  img: string;
}

const Laws: React.FC = () => {
  const [laws, setLaws] = useState<ILaw[]>([]);

  useEffect(() => {
    lawsAPI.get('').then((response) => setLaws(response.data.results));
  }, []);

  Icon.loadFont();

  return (
    <S.Container>
      <Header />
      <S.lawContainerList
        data={laws}
        keyExtractor={(law) => law.objectId}
        renderItem={({item: law}) => (
          <S.lawItem>
            <S.lawTitle>{law.lei}</S.lawTitle>
            <S.lawText>{law.text}</S.lawText>
          </S.lawItem>
        )}
      />
    </S.Container>
  );
};

export default Laws;
