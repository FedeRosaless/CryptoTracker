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

import React from 'react';
import decreaseArrow from '../../assets/decreaseArrow.png';
import IncrementArrow from '../../assets/increaseArrow.png';
import {Crypto} from '../../interfaces';

interface Props {
  crypto: Crypto;
}

const numberFormatter = Intl.NumberFormat('en-US');

const CryptoItem = ({crypto: {name, symbol, id, market_data}}: Props) => (
  <>
    <Container>
      <LogoContainer>
        <Logo source={{uri: `https://messari.io/asset-images/${id}/128.png`}} />
        <NamesContainer>
          <Name>{name}</Name>
          <Symbol>{symbol}</Symbol>
        </NamesContainer>
      </LogoContainer>

      <ValueContainer>
        <Value>
          ${numberFormatter.format(market_data?.price_usd.toFixed(2))}
        </Value>
        <ArrowContainer>
          <ImageValue
            source={
              market_data?.percent_change_usd_last_24_hours < 0
                ? decreaseArrow
                : IncrementArrow
            }
          />
          <Percent percent={market_data?.percent_change_usd_last_24_hours < 0}>
            {Math.abs(market_data?.percent_change_usd_last_24_hours).toFixed(2)}
          </Percent>
        </ArrowContainer>
      </ValueContainer>
    </Container>
    <Separator />
  </>
);

export default CryptoItem;
