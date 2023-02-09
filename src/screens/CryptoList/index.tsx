import {TouchableOpacity, FlatList} from 'react-native';
import {BlueText, Container, ContainerFlatList} from './style';
import CryptoItem from '../../components/CryptoItem';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/index';

const CryptoList = () => {
  const {navigate} = useNavigation();
  const {
    selectedCrypto: {cryptos},
  } = useSelector((state: RootState) => state);

  // const crypto = useSelector(
  //   ({selectedCrypto: {cryptos}}: RootState) => cryptos,
  // );

  return (
    <Container>
      <Header />
      <ContainerFlatList>
        <FlatList
          data={cryptos}
          keyExtractor={({id}) => id}
          renderItem={({item}) => <CryptoItem crypto={item} />}
          ListFooterComponent={
            <TouchableOpacity onPress={() => navigate('AddCrypto')}>
              <BlueText>+ Add a Cryptocurrency</BlueText>
            </TouchableOpacity>
          }
        />
      </ContainerFlatList>
    </Container>
  );
};

export default CryptoList;
