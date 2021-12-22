import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function CustomButton({onPress, title, hasMarginBottom, theme}) {
  const isPrimary = theme === 'primary';
  return (
    <View style={[hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={[styles.wrapper, isPrimary && styles.primaryWrapper]}
        android_ripple={{
          color: isPrimary ? '#fff' : '#6200ee',
        }}>
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.secondaryText,
          ]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
}

CustomButton.defaultProps = {
  theme: 'primary',
};
const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 3,
    height: 48,

    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryWrapper: {
    backgroundColor: '#6200ee',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#6200ee',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  margin: {
    marginBottom: 8,
  },
});
