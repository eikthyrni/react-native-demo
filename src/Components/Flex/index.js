import React from 'react';
import { View } from 'react-native';

const centeredFlexStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
}

export const Box = ({ children, style }) => (
  <View style={[{ width: '100%' }, style]}>{children}</View>
)

export const Flex = ({ children, style }) => (
  <View style={[centeredFlexStyles, style]}>{children}</View>
)
