import React from 'react';
import { Text, View, Image } from 'react-native';
import { TextInput, HStack, Stack, Button } from "@react-native-material/core";
import * as S from './styles'
import { NavigationContainer } from '@react-navigation/native';
import imageLogo from '../../../assets/ifix-logo.jpg';

function Home({navigation}: {navigation: any}) {
  return (
    <S.Container>
      <S.TextTitle>CAR BOM</S.TextTitle>
      <S.Input placeholder="Usuário" style={{ margin: 16 }} />
      <S.Input placeholder="Senha" style={{ margin: 16 }} />
      <Stack center spacing={12}>
      <HStack center m={8} spacing={12}>
        <S.ButtonSingUp>
          <S.TextWhite onPress={() => navigation.navigate('Working')}> CADASTRAR </S.TextWhite>
        </S.ButtonSingUp>
        <S.ButtonSingIn >
          <S.TextButtonSingIn onPress={() => navigation.navigate('Details')}> ENTRAR </S.TextButtonSingIn>
        </S.ButtonSingIn >
      </HStack>
        <S.ButtonForgottenPassword>
          <S.TextWhite onPress={() => navigation.navigate('Working')}> ESQUECEU A SENHA?</S.TextWhite>
        </S.ButtonForgottenPassword>
      </Stack>
    </S.Container>
  );
}

export default Home;
