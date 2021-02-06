import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import * as S from './styles';
import collectorAPI from '../../services/collectorAPI';

interface Collector {
  objectId: string;
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

  const initialPositionMap = {
    latitude: -3.1075619,
    longitude: -60.0193013,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
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
        initialRegion={initialPositionMap}>
        {collectors.map((collector) => (
          <Marker
            key={collector.objectId}
            calloutAnchor={{x: 0.5, y: 0.005}}
            coordinate={{
              latitude: Number(collector.latitude),
              longitude: Number(collector.longitude),
            }}>
            <Callout tooltip>
              <S.calloutContainer>
                <S.collectorName>{collector.name}</S.collectorName>
                <S.collectorFone>{collector.fone}</S.collectorFone>
              </S.calloutContainer>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </S.Container>
  );
};

export default Collect;
