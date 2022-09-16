import { Stack } from '@react-native-material/core';
import React from 'react';
import { Text, View } from 'react-native';
import * as S from './styles'

function Working({navigation}: {navigation: any}) {
  return (
    <S.Container>
      <S.TextTitle>Poxa, parece que ainda não terminamos essa tela para você</S.TextTitle>
      <S.TextTitle>Volte mais tarde</S.TextTitle>
      <Stack center spacing={12}>
      <S.ButtonGoBack >
          <S.TextGoBack onPress={() => navigation.goBack()}> Voltar </S.TextGoBack>
      </S.ButtonGoBack >
      </Stack> 
    </S.Container>
  );
}

export default Working;
