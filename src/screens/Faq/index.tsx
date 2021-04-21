import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';
import Header from '../../components/Header';
import faqCompostAPI from '../../services/faqCompostAPI';
import faqPillAPI from '../../services/faqPillAPI';
import faqBurnAPI from '../../services/faqBurnAPI';

export interface IFaq {
  objectId: string;
  title: string;
  content: string;
}

const Faq: React.FC = () => {
  const [data, setData] = useState<IFaq[]>([]);

  const [faqComposts, setFaqComposts] = useState<IFaq[]>([]);
  const [faqPills, setFaqPills] = useState<IFaq[]>([]);
  const [faqBurns, setFaqBurns] = useState<IFaq[]>([]);

  useEffect(() => {
    async function loadFaqs() {
      await faqCompostAPI.get('').then(
        (response) => setFaqComposts(response.data.results)
      );

      await faqPillAPI.get('').then(
        (response) => setFaqPills(response.data.results)
      );

      await faqBurnAPI.get('').then(
        (response) => setFaqBurns(response.data.results)
      );
    }
    loadFaqs();
  }, []);

  const handleSelect = useCallback((faqSelected: IFaq[]) => {
    setData(faqSelected)
  }, []);

  Icon.loadFont();


  return (
    <S.Container>
      <Header />
      <S.FiltersView horizontal showsHorizontalScrollIndicator={false}>
        <S.FilterBtn activeOpacity={0.8} onPress={() => handleSelect(faqComposts)}>
          <S.FilterText>Compostos e óleo</S.FilterText>
        </S.FilterBtn>
        <S.FilterBtn activeOpacity={0.8} onPress={() => handleSelect(faqBurns)}>
          <S.FilterText>Queima de plástico</S.FilterText>
        </S.FilterBtn>
        <S.FilterBtn activeOpacity={0.8} onPress={() => handleSelect(faqPills)}>
          <S.FilterText>Pilha</S.FilterText>
        </S.FilterBtn>
      </S.FiltersView>
      {data.length === 0  ? (
        <S.lawContainerList
          data={faqComposts}
          keyExtractor={(data) => data.objectId}
          renderItem={({ item: data }) => (
            <S.lawItem>
              <S.lawTitle>{data.title}</S.lawTitle>
              <S.lawText>{data.content}</S.lawText>
            </S.lawItem>
          )}
        />
      ) : (
        <S.lawContainerList
          data={data}
          keyExtractor={(data) => data.objectId}
          renderItem={({ item: data }) => (
            <S.lawItem>
              <S.lawTitle>{data.title}</S.lawTitle>
              <S.lawText>{data.content}</S.lawText>
            </S.lawItem>
          )}
        />
      )}
    </S.Container>
  );
};

export default Faq;
