import {TouchableOpacity, FlatList} from 'react-native';
import {BlueText, Container, ContainerFlatList} from './style';
import CryptoItem from '../../components/cryptoItem';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getCrypto} from '../../store/reducer/RootReducer';
import {AppDispatch, RootState} from '../../store/index';

const CryptoList = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const crypto = useSelector(
    (state: RootState) => state.selectedCrypto.cryptos,
  );

  useEffect(() => {
    dispatch(getCrypto('bitcoin'));
  }, []);

  return (
    <Container>
      <Header />
      <ContainerFlatList>
        <FlatList
          data={crypto}
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
