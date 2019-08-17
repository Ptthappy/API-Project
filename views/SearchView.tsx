import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Image, Button } from 'react-native-elements';
import { NavigationContainerProps, DrawerActions, FlatList } from 'react-navigation';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../components/AppHeader';
import ItemContainer from '../components/ItemContainer';

const SearchView: React.FC<NavigationContainerProps> = ({ navigation }) => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    let imgs;
    await fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(response => {
        if(response.status === 'success') {
          imgs = response.message;
        } else {
          console.log('no no creo');
          imgs = [];
        }
      })
      return imgs;
  }

  useEffect(() => {
    fetchImages().then(imgs => setImages(images.concat(imgs)));
  }, []);

  const handleEndReached = () => {
    console.log('End Reached');
    fetchImages().then(imgs => setImages(images.concat(imgs)));
  }
  
  return (
    <View style={{ flex: 1 }}>
      <AppHeader color='#F2F2F2' title='Search' 
        leftComponent={<Button icon={<Icon name='arrow-left' color='black' size={30} />} containerStyle={{ backgroundColor: 'transparent' }} 
        buttonStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.navigate('Main') }/> }
        rightComponent={<Button icon={<Icon name='menu' color='black' size={30} />} containerStyle={{ backgroundColor: 'transparent' }}
        buttonStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.openDrawer() }/> } 
      />

      <FlatList
        data={images}
        renderItem={(img) => <ItemContainer key={img.index} navigation={navigation} uri={img.item} /> }
        onEndReachedThreshold={1}
        onEndReached={handleEndReached}
      />
    </View>
  )
}

export default SearchView;