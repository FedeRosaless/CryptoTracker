import {Head, ImageStyle, Title} from './style';
import React from 'react';
import ProfilePhoto from '../../assets/hazel-aksoy-UcTI5ge05so-unsplash.jpg'
const Header = () => (
  <Head>
    <Title>CryptoTracker Pro</Title>
    <ImageStyle
      source={ProfilePhoto}
    />
  </Head>
);

export default Header;