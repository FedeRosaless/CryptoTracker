import {
  NamesContainer,
  Container,
  Name,
  Symbol,
  Separator,
  Logo,
  ImageValue,
  Value,
  Percent,
  ValueContainer,
  LogoContainer,
  ArrowContainer,
} from './style';

import React, {FC} from 'react';
import decreaseArrow from '../../assets/decreaseArrow.png';
import IncrementArrow from '../../assets/increaseArrow.png';
import {Crypto} from '../../interfaces/Index';
import {View} from 'react-native';

interface Props {
  crypto: Crypto;
}

const CryptoItem: FC<Props> = ({
  crypto: {id, name, symbol, img, market_data},
}) => (
  
  <>
  <Container>
    <LogoContainer>
      <Logo source={img} />
      <NamesContainer>
        <Name>{name}</Name>
        <Symbol>{symbol}</Symbol>
      </NamesContainer>
    </LogoContainer>

    <ValueContainer>
      <Value>${market_data?.price_usd}</Value>
      <ArrowContainer>
        <ImageValue
          source={
            market_data?.percent_change_usd_last_24_hours < 0
              ? decreaseArrow
              : IncrementArrow
          }
        />
        <Percent percent={market_data?.percent_change_usd_last_24_hours < 0}>
          {Math.abs(market_data?.percent_change_usd_last_24_hours as number)}%
        </Percent>
      </ArrowContainer>
    </ValueContainer>
  </Container>
  <Separator />
 </>
);

export default CryptoItem;
