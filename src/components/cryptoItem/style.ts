import styled from 'styled-components/native';
import {PercentProps} from './types';

export const Container = styled.View`
  padding-top: 28px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: ${({theme}) => theme.colors.black};
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  margin-top: 11px;
  background-color: ${({theme}) => theme.colors.dividerGray};
`;

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
export const NamesContainer = styled.View`
  padding-left: 5px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: 17px;
  font-weight: 500;
`;

export const Symbol = styled.Text`
  color: ${({theme}) => theme.colors.gray};
  font-size: 15px;
`;

export const Logo = styled.Image`
  width: 48px;
  height: 48px;
`;

export const ValueContainer = styled.View`
  display: flex;
`;

export const Value = styled.Text`
  font-size: 19px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.black};
  text-align: right;
`;
export const ArrowContainer = styled.View`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

export const ImageValue = styled.Image`
  width: 10px;
  height: 10px;
  margin-right: 4px;
  padding-top: 2px;
`;

export const Percent = styled.Text<PercentProps>`
  font-size: 16px;
  color: ${({percent}) =>
    percent ? ({theme}) => theme.colors.red : ({theme}) => theme.colors.green};
`;
