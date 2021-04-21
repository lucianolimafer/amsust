import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import imgIntro from '../../assets/folhalupa.png';
import imgStudy from '../../assets/btn/form1.png';
import imgLaw from '../../assets/btn/img02.png';
import imgQuiz from '../../assets/btn/img03.png';
import imgColet from '../../assets/btn/coleta.png';
import imgFaq from '../../assets/btn/faq.png';

import * as S from './styles';
import impactsAPI from '../../services/impactsAPI';
import { Linking, Platform } from 'react-native';

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
  const { navigate } = useNavigation();

  const [impacts, setImpacts] = useState<Impacts[]>([]);

  Icon.loadFont();

  useEffect(() => {
    impactsAPI.get('').then((response) => setImpacts(response.data.results));
  }, []);

  const navigateToPage = useCallback((page: string) => {
    navigate(`${page}`);
  }, [navigate]);

  const navigateToImpact = useCallback(
    (objectId) => {
      return navigate('Impact', { objectId });
    },
    [navigate],
  );

  const callPhone = useCallback((value: string) => {
    let phonNumber = value;

    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${phonNumber}`);
    }

    Linking.openURL(`telpromt:${phonNumber}`);
  }, []);

  return (
    <S.Container>
      <S.areaViwScroller>
        <S.IntroContent>
          <S.ImageIntro resizeMode="contain" source={imgIntro} />
          <S.IntroView>
            <S.Title>Impactos ambientais</S.Title>
            <S.TxtOne>e seus problemas</S.TxtOne>
          </S.IntroView>
        </S.IntroContent>
        <S.BTNspaceHorizontal horizontal showsHorizontalScrollIndicator={false}>
          <S.BTN onPress={() => navigateToPage('Courses')}>
            <S.BackImage source={imgStudy} />
            <S.btnTitle>Cursos</S.btnTitle>
          </S.BTN>
          <S.BTN onPress={() => navigateToPage('Laws')}>
            <S.BackImage source={imgLaw} />
            <S.btnTitle>Leis</S.btnTitle>
          </S.BTN>
          <S.BTN onPress={() => navigateToPage('Quiz')}>
            <S.BackImage source={imgQuiz} />
            <S.btnTitle>Quiz</S.btnTitle>
          </S.BTN>
          <S.BTN onPress={() => navigateToPage('Collect')}>
            <S.BackImage source={imgColet} />
            <S.btnTitle>Coletores</S.btnTitle>
          </S.BTN>
          <S.BTN onPress={() => navigateToPage('Faq')}>
            <S.BackImage source={imgFaq} />
            <S.btnTitle>Faq</S.btnTitle>
          </S.BTN>
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
            renderItem={({ item: impact }) => (
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
        <S.ViewBtn>
          <S.btnDenounce
            colorBG="#af182c"
            onPress={() => callPhone('+55923878-7150')}
          >
            <Icon name="phone" size={24} color="#f0f0f0" />
            <S.textBtnDenounce>Denúncia anônima</S.textBtnDenounce>
          </S.btnDenounce>
          <S.btnDenounce
            colorBG="#2E3532"
            onPress={() => callPhone('+559298415-9563')}
          >
            <Icon name="phone" size={24} color="#f0f0f0" />
            <S.textBtnDenounce>Coleta agendada</S.textBtnDenounce>
          </S.btnDenounce>
        </S.ViewBtn>
      </S.areaViwScroller>
    </S.Container>
  );
};

export default Home;
