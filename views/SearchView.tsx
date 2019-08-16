import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Image, Button } from 'react-native-elements';
import { NavigationContainerProps, DrawerActions } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../components/AppHeader';
import ItemContainer from '../components/ItemContainer';

const SearchView: React.FC<NavigationContainerProps> = ({ navigation }) => {
  const [filter, setFilter] = useState(navigation.getParam('prefilter', null));
  const breedNames = navigation.getParam('breeds', []);

  console.log(filter);

  return (
    <View style={{ flex: 1 }}>
      <AppHeader color='#F2F2F2' title='Search' 
        leftComponent={<Button icon={<Icon name='arrow-left' color='black' size={30} />} containerStyle={{ backgroundColor: 'transparent' }} 
        buttonStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.navigate('Main') }/> }
        rightComponent={<Button icon={<Icon name='menu' color='black' size={30} />} containerStyle={{ backgroundColor: 'transparent' }}
        buttonStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.openDrawer() }/> } 
      />

      <ScrollView contentContainerStyle={{ flexDirection: 'column' }}>
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
        <ItemContainer leftItem={{ imgSource: '../assets/dogs/test1.jpg', breed: 'pinsher', imgName: 'test1.jpg' }}
          rightItem={{ imgSource: '../assets/dogs/test2.jpg', breed: 'pinsher', imgName: 'test2.jpg' }} navigation={navigation} />
      </ScrollView>
    </View>
  )
}

export default SearchView;