import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import imgIntro from '../../assets/folhalupa.png';
import imgStudy from '../../assets/btn/form1.png';
import imgLaw from '../../assets/btn/img02.png';
import imgQuiz from '../../assets/btn/img03.png';
import imgColet from '../../assets/btn/coleta.png';

import * as S from './styles';
import impactsAPI from '../../services/impactsAPI';
import {Linking, Platform} from 'react-native';

export interface Impacts {
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

const Home: React.FC = () => {
  const {navigate} = useNavigation();

  const [impacts, setImpacts] = useState<Impacts[]>([]);

  Icon.loadFont();

  useEffect(() => {
    impactsAPI.get('').then((response) => setImpacts(response.data.results));
  }, []);

  const navigateToCourses = useCallback(() => {
    navigate('Courses');
  }, [navigate]);

  const navigateToLaws = useCallback(() => {
    navigate('Laws');
  }, [navigate]);

  const navigateToImpact = useCallback(
    (objectId) => {
      return navigate('Impact', {objectId});
    },
    [navigate],
  );

  const navigateToQuiz = useCallback(() => {
    navigate('Quiz');
  }, [navigate]);

  const navigateToCollect = useCallback(() => {
    navigate('Collect');
  }, [navigate]);

  const callPhone = useCallback(() => {
    let phonNumber = '+55923878-7150';

    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${phonNumber}`);
    }

    Linking.openURL(`telpromt:${phonNumber}`);
  }, []);

  return (
    <S.Container>
      <S.areaViwScroller>
        <S.IntroContent>
          <S.ImageIntro source={imgIntro} />
          <S.IntroView>
            <S.Title>Impactos ambientais</S.Title>
            <S.TxtOne>e seus problemas</S.TxtOne>
          </S.IntroView>
        </S.IntroContent>
        <S.BTNspaceHorizontal horizontal showsHorizontalScrollIndicator={false}>
          <S.BTN onPress={navigateToCourses}>
            <S.BackImage source={imgStudy} />
            <S.btnTitle>Cursos</S.btnTitle>
          </S.BTN>
          <S.BTN onPress={navigateToLaws}>
            <S.BackImage source={imgLaw} />
            <S.btnTitle>Leis</S.btnTitle>
          </S.BTN>
          <S.BTN onPress={navigateToQuiz}>
            <S.BackImage source={imgQuiz} />
            <S.btnTitle>Quiz</S.btnTitle>
          </S.BTN>
          <S.BTN onPress={navigateToCollect}>
            <S.BackImage source={imgColet} />
            <S.btnTitle>Coletores</S.btnTitle>
          </S.BTN>
          {/*<S.BTN>*/}
          {/*  <S.BackImage source={imgFaq} />*/}
          {/*  <S.btnTitle>Faq</S.btnTitle>*/}
          {/*</S.BTN>*/}
        </S.BTNspaceHorizontal>
        <S.TitlePages>
          <S.TitlePagesText>Tipos de impactos</S.TitlePagesText>
        </S.TitlePages>

        <S.Pages>
          <S.scrolPages
            horizontal
            showsHorizontalScrollIndicator={false}
            data={impacts}
            keyExtractor={(impact) => impact.objectId}
            renderItem={({item: impact}) => (
              <S.SolidWaste onPress={() => navigateToImpact(impact.objectId)}>
                <S.imagePage
                  source={{
                    uri: impact.imgFeature,
                  }}
                />
                <S.TitlePagesBtn>{impact.name}</S.TitlePagesBtn>
              </S.SolidWaste>
            )}
          />
        </S.Pages>
        <S.btnDenounce onPress={callPhone}>
          <Icon name="phone" size={24} color="#f0f0f0" />
          <S.textBtnDenounce>Denúncia anônima</S.textBtnDenounce>
        </S.btnDenounce>
      </S.areaViwScroller>
    </S.Container>
  );
};

export default Home;
