import { HStack } from '@react-native-material/core';
import React from 'react';
import { Text, View } from 'react-native';
import * as S from './styles'

function MechanicsCard({navigation}: {navigation: any}) {
  return (
    <>    
      <S.ButtonDescription onPress={navigation}>
        <S.TextWhite>Julinho da Mecânica</S.TextWhite>
        <HStack spacing={2}>
          <S.TextWhite>R. FIAP </S.TextWhite>
          <S.TextWhite>8.4 KM</S.TextWhite>
        </HStack>
      </S.ButtonDescription>
    </>
  );
}

export default MechanicsCard;
