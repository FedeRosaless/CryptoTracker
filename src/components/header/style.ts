import styled from 'styled-components/native';

export const ImageStyle = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 100px;
`;

export const Head = styled.View`
  padding: 24px;
  height: 100px;
  background-color: ${({theme}) => theme.colors.header};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: 20px;
  font-weight: bold;
  padding-top: 15px;
`;
