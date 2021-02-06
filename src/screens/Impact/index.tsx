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
  const routeParams = route.params as RouteParams;

  const idComingFromHome = routeParams.objectId;

  const [impacts, setImpacts] = useState<Impacts[]>([]);

  useEffect(() => {
    impactsAPI.get('').then((response) => setImpacts(response.data.results));
  }, []);

  return (
    <S.Container>
      <Header />
      {impacts.map((impact) => {
        if (impact.objectId === idComingFromHome) {
          return (
            <>
              <S.contentContainer>
                <S.Title>{impact.name}</S.Title>
                <S.titleOne>{impact.titleOne}:</S.titleOne>
                <S.contentText>{impact.textOne}</S.contentText>
                <S.titleOne>{impact.titleTwo}:</S.titleOne>
                <S.contentText>{impact.textTwo}</S.contentText>
              </S.contentContainer>
            </>
          );
        }
      })}
    </S.Container>
  );
};

export default Impact;
