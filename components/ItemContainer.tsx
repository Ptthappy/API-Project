import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { NavigationScreenProp, NavigationParams } from 'react-navigation';

interface ItemContainerProps {
  leftItem: Image
  rightItem?: Image,
  navigation: NavigationScreenProp<{}, NavigationParams>
}

const ItemContainer: React.FC<ItemContainerProps> = ({ leftItem, rightItem, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#000000' }}>
      <TouchableOpacity style={{ width: '50%', height: 150, backgroundColor: '#FAFAFA', alignItems: 'center', justifyContent: 'center',
        borderRightWidth: 0.5, borderColor: '#000000' }}
        onPress={() => navigation.dangerouslyGetParent().navigate('Detail')}>
        <Image
          source={{ uri: 'https://images.dog.ceo/breeds/chow/n02112137_2850.jpg' }}
          style={{ width: 125, height: 125, borderRadius: 1000, marginLeft: 15 }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ width: '50%', height: 150, backgroundColor: '#FAFAFA', alignItems: 'center', justifyContent: 'center',
        borderLeftWidth: 0.5, borderColor: '#000000' }}
        onPress={() => navigation.dangerouslyGetParent().navigate('Detail')}>
        <Image
          source={{ uri: 'https://images.dog.ceo/breeds/chow/n02112137_2850.jpg' }}
          style={{ width: 125, height: 125, borderRadius: 1000, marginRight: 15 }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </TouchableOpacity>
    </View>
  );
}

//Imagen, Raza y nombre de la imagen
//Adicional: Se puede: Descargar la foto, compartir la foto
export default ItemContainer;