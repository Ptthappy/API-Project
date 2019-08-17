import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { NavigationContainerProps } from 'react-navigation';

import AppHeader from '../components/AppHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailView: React.FC<NavigationContainerProps> = ({ navigation }) => {
  const uri = navigation.getParam('uri');
  const breed = navigation.getParam('breed');
  const subBreed = navigation.getParam('subBreed');
  const filename = navigation.getParam('filename');

  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      <AppHeader color='#F2F2F2' title='Doggo'
        leftComponent={<Button icon={<Icon name='arrow-left' color='black' size={30} />} containerStyle={{ backgroundColor: 'transparent' }} 
        buttonStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.goBack() }/> }
      />
      
      <View style={{ width: '80%', height: 380, marginTop: 21, borderColor: '#CACACA', borderRadius: 10, borderWidth: 7 }}>
        <Image
          source={{ uri: uri }}
          style={{ width: '100%', height: 300, paddingBottom: 7 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={{ width: '100%' }}>
          <Text style={{ fontFamily: 'Raleway-ExtraLight', textAlign: 'left', paddingLeft: 7, marginTop: 10, marginBottom: 7 }}>Breed: {breed}</Text>
          <View style={{ width: '100%', height: 0.6, backgroundColor: '#000000' }} />
          <Text style={{ fontFamily: 'Raleway-ExtraLight', textAlign: 'left', paddingLeft: 7, marginVertical: 7 }}>Sub Breed: {subBreed}</Text>
          <View style={{ width: '100%', height: 0.6, backgroundColor: '#000000' }} />
          <Text style={{ fontFamily: 'Raleway-ExtraLight', textAlign: 'left', paddingLeft: 7, marginVertical: 7 }}>Filename: {filename}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', width: '100%', marginTop: 11 }}>
        <Button title='Share File' onPress={() => console.log('XDDDDDD')} type='outline' titleStyle={{ fontFamily: 'Raleway',
          fontSize: 18, color: '#000000' }} containerStyle={{ width: '45%', marginLeft: '4%' }} buttonStyle={{ borderColor: '#000000' }} />
        <Button title='Download Image' onPress={() => console.log('descargate pues mardita')} type='outline' titleStyle={{ fontFamily: 'Raleway', fontSize: 18,
          color: '#000000' }} containerStyle={{ width: '45%', marginRight: '4%', marginLeft: '2%' }} buttonStyle={{ borderColor: '#000000' }} />
      </View>
      
    </View>
  );
}

export default DetailView;