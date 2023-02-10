import {TouchableOpacity, FlatList} from 'react-native';
import {BlueText, Container, ContainerFlatList} from './style';
import CryptoItem from '../../components/CryptoItem';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../store';
import {updateCrypto} from '../../store/actions';

const CryptoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {navigate} = useNavigation();
  const {
    selectedCrypto: {cryptos},
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(updateCrypto(cryptos.map(c => c.name)));
    }, 4000);
    return () => clearInterval(time);
  });

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
