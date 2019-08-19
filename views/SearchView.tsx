import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainerProps, FlatList } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../components/AppHeader';
import ItemContainer from '../components/ItemContainer';
import LoadingView from './LoadingView';

const SearchView: React.FC<NavigationContainerProps> = ({ navigation }) => {
  const [ready, setReady] = useState(false);
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

    return endpoint;
  }

  useEffect(() => {
    setReady(false);
    fetchImages().then(imgs => {
      setImages(imgs);
      setReady(true);
    });
  }, [filter.breed, filter.subBreed]);

  const handleEndReached = () => {
    setReady(false);
    fetchImages().then(imgs => {
      setImages(images.concat(imgs));
      setReady(true);
    });
  }
  
  return (
    <View style={{ flex: 1 }}>
      {!ready && <LoadingView/>}
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