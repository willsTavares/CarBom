import React from 'react';
import { Text, View } from 'react-native';
import * as S from './styles'
import MechanicsCard from './MechanicsCard';


function Details({navigation}: {navigation: any}) {
  return (
    <S.Container>
      <S.Input placeholder="Pesquisar"/>
      <S.Title>Mêcanicas</S.Title>
      <MechanicsCard navigation={navigation.navigate('Working')}/>
      <MechanicsCard navigation={navigation.navigate('Working')}/>
      <MechanicsCard navigation={navigation.navigate('Working')}/>
      <MechanicsCard navigation={navigation.navigate('Working')}/>
      <MechanicsCard navigation={navigation.navigate('Working')}/>
    </S.Container>
  );
}

export default Details;
