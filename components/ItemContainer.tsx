import React from 'react';
import { View, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { Image } from 'react-native-elements';
import { NavigationScreenProp, NavigationParams } from 'react-navigation';

interface ItemContainerProps {
  uri: string,
  navigation: NavigationScreenProp<{}, NavigationParams>
}

const ItemContainer: React.FC<ItemContainerProps> = ({ uri, navigation }) => {
  const getBreed = () => {
    const _uri = uri.substring(0, uri.lastIndexOf('/'));
    const entireBreed = _uri.substring(_uri.lastIndexOf('/') + 1)
    if(entireBreed.indexOf('-') === -1)
      return entireBreed;
    else
      return entireBreed.substring(0, entireBreed.indexOf('-'));
  }

  const getSubBreed = () => {
    const _uri = uri.substring(0, uri.lastIndexOf('/'));
    const entireBreed = _uri.substring(_uri.lastIndexOf('/') + 1);
    if(entireBreed.indexOf('-') !== -1)
      return entireBreed.substring(entireBreed.indexOf('-') + 1);
    else
      return 'N/A';
  }

  const getFilename = () => {
    return uri.substring(uri.lastIndexOf('/') + 1); 
  } 

  return (
    <TouchableOpacity style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#202020', width: '100%', height: 125, backgroundColor: '#FAFAFA',
      alignItems: 'flex-start' }} onPress={() => navigation.dangerouslyGetParent().navigate('Detail', { uri: uri, breed: getBreed(), subBreed: getSubBreed(), filename: getFilename() })}>
        <Image
          source={{ uri: uri }}
          style={{ width: 100, height: 100, borderRadius: 1000, marginLeft: 30, marginTop: 12, borderWidth: 1, borderColor: '#000000' }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={{ marginLeft: 30, marginTop: 33 }}>
          <Text style={{ fontFamily: 'Raleway-ExtraLight', fontSize: 15, marginBottom: 2 }}>Breed: {getBreed()}</Text>
          <Text style={{ fontFamily: 'Raleway-ExtraLight', fontSize: 15, marginBottom: 2 }}>Sub Breed: {getSubBreed()}</Text>
          <Text style={{ fontFamily: 'Raleway-ExtraLight', fontSize: 15 }}>Filename: {getFilename()}</Text>
        </View>
    </TouchableOpacity>
  );
}

//Imagen, Raza y nombre de la imagen
//Adicional: Se puede: Descargar la foto, compartir la foto
export default ItemContainer;