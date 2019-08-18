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

  const filter = { breed: navigation.getParam('breed'), subBreed: navigation.getParam('subBreed') }

  const fetchImages = async () => {
    let imgs;
    const endpoint = getEndpoint();
    await fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        if(response.status === 'success') {
          imgs = response.message;
        } else {
          console.log('no no creo');
          console.log(endpoint);
          console.log(response.status);
          imgs = [];
        }
      })
      return imgs;
  }

  const getEndpoint = () => {
    let endpoint = 'https://dog.ceo/api/';
    if(typeof filter.breed !== 'undefined') {
      endpoint += 'breed/' + filter.breed + '/';

      if(typeof filter.subBreed !== 'undefined')
        endpoint += filter.subBreed + '/';
      
      endpoint += 'images/random/10'
    } else {
      endpoint = 'https://dog.ceo/api/breeds/image/random/10'
    }
    // https://dog.ceo/api/image/random/10
    // https://dog.ceo/api/breeds/image/random

    return endpoint;
  }

  useEffect(() => {
    console.log('Update Feed:');
    console.log(filter);
    setImages(null);
    fetchImages().then(imgs => setImages(images.concat(imgs)));
  }, [filter.breed, filter.subBreed]);

  const handleEndReached = () => {
    console.log('End Reached');
    fetchImages().then(imgs => setImages(images.concat(imgs)));
  }
  
  return (
    <View style={{ flex: 1 }}>
      <AppHeader color='#F2F2F2' title='Search' 
        leftComponent={<Button icon={<Icon name='arrow-left' color='black' size={30} />} containerStyle={{ backgroundColor: 'transparent' }} 
        buttonStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.navigate('Main') }/> }
        rightComponent={<Button icon={<Icon name='filter' color='black' size={30} />} containerStyle={{ backgroundColor: 'transparent' }}
        buttonStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.navigate('Filter') }/> } 
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