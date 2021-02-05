import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from 'react-native-maps';

import * as S from './styles';
import collectorAPI from '../../services/collectorAPI';

interface Collector {
  fone: string;
  name: string;
  tipo: string;
  latitude: number;
  longitude: number;
  image: string;
  repre: string;
}

const Collect: React.FC = () => {
  const [collectors, setCollectors] = useState<Collector[]>([]);
  const [region, setRegion] = useState<Region>();

  const initialPositionMap = {
    latitude: -3.0374533,
    longitude: -60.0354363,
    latitudeDelta: 100,
    longitudeDelta: 100,
  };

  useEffect(() => {
    collectorAPI
      .get('')
      .then((response) => setCollectors(response.data.results));
  }, []);

  Icon.loadFont();

  return (
    <S.Container>
      <Header />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={[{width: '100%', height: '100%'}]}
        region={region}
        initialRegion={initialPositionMap}
      />
    </S.Container>
  );
};

export default Collect;
