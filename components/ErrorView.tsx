import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ErrorView: React.FC = () => {
  return (
    <View style={{ backgroundColor: '#CACACA', width: '100%', height: 150, flexDirection: 'row' }}>
      <View style={{ height: '100%', width: '40%', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name='cogs' size={100} style={{ color: '#8A8A8A' }} />
      </View>
      <View style={{ height: '100%', width: '60%', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'Raleway', fontSize: 20, padding: 12, color: '#8A8A8A' }}>Check your Internet Connection and try again</Text>
      </View>
    </View>
  );
}

export default ErrorView;