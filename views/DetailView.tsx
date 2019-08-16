import React from 'react';
import { Text, View, ActivityIndicator, Share, Linking } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { NavigationContainerProps } from 'react-navigation';

import AppHeader from '../components/AppHeader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const shareOptions = {
  title: 'Share via',
  message: 'some shit',
  url: 'https://google.com'
};

const base64Example = 'data:image/png;base64,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';

const DetailView: React.FC<NavigationContainerProps> = ({ navigation }) => {

  const shareImg = () => {
    Share.share({
      title: 'Hey',
      message: 'lmao rip',
      url: base64Example
    }, {
      excludedActivityTypes: []
    })
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
      <AppHeader color='#F2F2F2' title='Doggo'
        leftComponent={<Button icon={<Icon name='arrow-left' color='black' size={30} />} containerStyle={{ backgroundColor: 'transparent' }} 
        buttonStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.goBack() }/> }
      />
      
      <View style={{ width: '80%', height: 380, marginTop: 21, borderColor: '#CACACA', borderRadius: 10, borderWidth: 7 }}>
        <Image
          source={{ uri: 'https://images.dog.ceo/breeds/chow/n02112137_2850.jpg' }}
          style={{ width: '100%', height: 300, paddingBottom: 7 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={{ width: '100%' }}>
          <Text style={{ fontFamily: 'Raleway-ExtraLight', textAlign: 'left', paddingLeft: 7, marginTop: 10, marginBottom: 7 }}>Breed: Pinsher</Text>
          <View style={{ width: '100%', height: 0.6, backgroundColor: '#000000' }} />
          <Text style={{ fontFamily: 'Raleway-ExtraLight', textAlign: 'left', paddingLeft: 7, marginVertical: 7 }}>Filename: n02112137_2850.jpg</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', width: '100%', marginTop: 11 }}>
        <Button title='Share File' onPress={() => shareImg()} type='outline' titleStyle={{ fontFamily: 'Raleway',
          fontSize: 18, color: '#000000' }} containerStyle={{ width: '45%', marginLeft: '4%' }} buttonStyle={{ borderColor: '#000000' }} />
        <Button title='Download Image' onPress={() => console.log('descargate pues mardita')} type='outline' titleStyle={{ fontFamily: 'Raleway', fontSize: 18,
          color: '#000000' }} containerStyle={{ width: '45%', marginRight: '4%', marginLeft: '2%' }} buttonStyle={{ borderColor: '#000000' }} />
      </View>
      
    </View>
  );
}

export default DetailView;