import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SetupProfile from '../components/SetupProfile';

export default function WelcomeScreen() {
  return (
    <View style={styles.block}>
      <Text style={styles.title}>환영합니다!</Text>
      <Text style={styles.description}>프로필을 설정하세요</Text>
      <SetupProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
  },
  description: {
    marginTop: 16,
    fontSize: 21,
    color: '#757575',
  },
});
