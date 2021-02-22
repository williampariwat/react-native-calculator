import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Calculator from '../components/Calculator';
import { Navigation } from '../types';
import { View } from 'react-native';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <View style={{ flex: 1 }}>
    {/*@ts-ignore*/}
    <Calculator style={{ flex: 1 }} />
    {/*@ts-ignore*/}
    <Button mode='outlined' onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </View>
);

export default memo(Dashboard);
