import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import impactsAPI from '../../services/impactsAPI';

import * as S from './styles';
import Header from '../../components/Header';

interface RouteParams {
  objectId: string;
  name: string;
}

interface Impacts {
  objectId: string;
  name: string;
  imgFeature: string;
  bigText: string;
  description: string;
  titleOne: string;
  textOne: string;
  titleTwo: string;
  textTwo: string;
}

const Impact: React.FC = () => {
  const route = useRoute();
  const routeReceiverParams = route.params as RouteParams;

  const {name} = routeReceiverParams;

  console.log(name);

  const [impacts, setImpacts] = useState<Impacts[]>([]);

  useEffect(() => {
    impactsAPI.get('').then((response) => setImpacts(response.data.results));
  }, []);

  return (
    <S.Container>
      <Header />
      <S.Title>Teste teste</S.Title>
    </S.Container>
  );
};

export default Impact;
