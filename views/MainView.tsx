import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Image, Button } from 'react-native-elements';
import { NavigationContainerProps } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';
import { SET_FILTER } from '../redux/actionTypes';

import AppHeader from '../components/AppHeader';

const MainView: React.FC<NavigationContainerProps> = ({ navigation }) => {
  const breedNames = useSelector(state => state.breeds);
  const darkTheme = useSelector(state => state.darkTheme);
  
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <AppHeader color='#F2F2F2' title='Dogerino Viewer'/>
      <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../assets/dogs/main.jpg')}
          style={{ width: 275, height: 275, borderRadius: 1000, marginTop: 28 }}
        />
        <Text style={{ fontFamily: 'Raleway-Bold', fontSize: 28, marginBottom: 7, marginTop: 21 }}>Dog Viewer</Text>

        <Text style={{ fontFamily: 'Raleway', fontSize: 15, paddingHorizontal: 42, textAlign: 'center' }}>A confortable, fast and easy to use application. 
          Containing the Internet's biggest collection of open source dog pictures, you can find lot of dog's pictures from whatever breed you want.</Text>

        <Button title='Search Now!' type='outline' containerStyle={{ width: '80%', height: 50, marginTop: 21 }} buttonStyle={{ height: 50, borderColor: 'black' }}
          titleStyle={{ fontFamily: 'Raleway', fontSize: 18, textAlign: 'center', color: 'black' }} onPress={() => navigation.navigate('Search')} />
        
        <Text style={{ fontFamily: 'Raleway-Bold', fontSize: 26, marginBottom: 7, marginTop: 21 }}>Every breed available for you</Text>
        {/* Dogerino Viewer te permite buscar por cualquier raza */}
        <Text style={{ fontFamily: 'Raleway', fontSize: 15, paddingHorizontal: 42, textAlign: 'center', paddingBottom: 20 }}>Dogerino Viewer let you search for any breed,
          no matter what it is!</Text>

        {breedNames.map((dog, i) => 
          <TouchableOpacity key={i} style={{ width: '100%', backgroundColor: '#F2F2F2', height: 60, justifyContent: 'center', borderBottomWidth: 1, 
            borderTopWidth: i === 0 ? 1 : 0, borderColor: '#CCCCCC' }} onPress={() => {
              dispatch({ type: SET_FILTER, payload: { filter: dog.lowercaseBreed } });
              navigation.navigate('Search');
            } }>
            <Text style={{ fontFamily: 'Raleway', fontSize: 20, paddingLeft: 15 }}>{dog.breed}</Text>
          </TouchableOpacity>
        )}

        <Button title='Search Now!' type='outline' containerStyle={{ width: '80%', height: 50, marginVertical: 21 }} buttonStyle={{ height: 50, borderColor: 'black' }}
          titleStyle={{ fontFamily: 'Raleway', fontSize: 18, textAlign: 'center', color: 'black' }} onPress={() => navigation.navigate('Search')} />
      </ScrollView>
    </View>
  )
}

export default MainView;