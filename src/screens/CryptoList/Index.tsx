import {TouchableOpacity, FlatList} from 'react-native';
import {BlueText, Container, ContainerFlatList} from './style';
import CryptoItem from '../../components/cryptoItem/Index';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header/Index';

const crypto = [
  {
    id: '1',
    symbol: 'BCT',
    name: 'Bitcoin',
    img: require('../../assets/Bitcoin.png'),
    slug: 'bitcoin',
    market_data: {
      price_usd: 7215.68,
      percent_change_usd_last_24_hours: 1.82,
    },
  },
  {
    id: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    img: require('../../assets/Ethereum.png'),
    slug: 'ethereum',
    market_data: {
      price_usd: 146.83,
      percent_change_usd_last_24_hours: 1.46,
    },
  },
  {
    id: '3',
    symbol: 'XRP',
    name: 'XRP',
    slug: 'xrp',
    img: require('../../assets/XRP.png'),
    market_data: {
      price_usd: 0.220568,
      percent_change_usd_last_24_hours: -2.47,
    },
  },
];

type Nav = {
  navigate: (value: string) => void;
};

const CryptoList = () => {
  const {navigate} = useNavigation<Nav>();
  return (
    <Container>
      <Header />
      <ContainerFlatList>
        <FlatList
          data={crypto}
          keyExtractor={item => item.id}
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
