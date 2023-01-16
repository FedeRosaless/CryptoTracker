import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.white};
  height: 100%;
`;

export const ContainerFlatList = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  margin-left: 23px;
  margin-right: 25px;
  height: auto;
  max-height: 90%;
`;

export const BlueText = styled.Text`
  margin-top: 50px;
  font-size: 18px;
  line-height: 24px;
  background-color: ${({theme}) => theme.colors.blue};
  color: ${({theme}) => theme.colors.blueGray};
  text-align: center;
  font-family: Inter;
`;
