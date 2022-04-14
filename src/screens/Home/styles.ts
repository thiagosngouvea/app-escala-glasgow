import { Feather, Octicons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: ${RFValue(113)};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`

export const HeaderModal = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: ${RFValue(60)};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`

export const Select = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${RFValue(50)};
  border-radius: ${RFValue(5)};
  background-color: ${({ theme }) => theme.colors.attention};
`
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(50)};
  border-radius: ${RFValue(5)};
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(10)};
`
export const ButtonSelect = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  padding: 18px 16px;
`
export const Option = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`
export const IconModal = styled(Octicons)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.attention};
`
export const ContainerModal = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(120)};
  background-color: ${({ theme }) => theme.colors.shape};
  justify-content: center;
  align-items: center;
  margin-top: ${RFValue(10)};
`
export const TitleModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`
export const TextModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`

export const GlasgowOptions = styled.TouchableOpacity`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary_light : theme.colors.shape};
`

export const NameOptions = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text_dark};
`
export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
`
export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  padding: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`
