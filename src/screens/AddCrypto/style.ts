import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
`;

export const CryptoInput = styled.TextInput`
  border: 2px solid
    ${({theme, theme_focus}) =>
      theme_focus ? theme.colors.yellow : theme.colors.gray};
  width: 90%;
  height: 60px;
  display: flex;
  top: 29%;
  margin: 5%;
  border-radius: 6px;
  padding-left: 10px;
  font-size: 17px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const AddText = styled.Text`
  font-size: 26px;
  color: ${({theme}) => theme.colors.darkGray};
  display: flex;
  top: 28.5%;
  left: 6%;
  line-height: 30px;
  font-weight: 700;
  font-family: Inter;
  letter-spacing: 0px;
`;

export const BackText = styled.Text`
  font-size: 17px;
  line-height: 24px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.blueGray};
  padding-left: 16px;
  margin-top: 14px;
  font-family: Inter;
`;

export const OpenModalText = styled.Text`
  margin-top: 50px;
  font-size: 17px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.white};
  text-align: center;
  font-family: Inter;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  background-color: ${({theme}) => theme.colors.yellow};
  text-align: center;
  text-align-vertical: center;
  border-radius: 4px;
  padding-bottom: 13px;
  padding-top: 13px;
  left: 13px;
  display: flex;
`;

export const Touchable = styled.TouchableOpacity`
  padding-left: 160px;
  padding-right: 91px;
  margin-top: 5px;
  left: 14%;
  top: 28%;
`;
