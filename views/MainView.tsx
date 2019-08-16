import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Image, Button } from 'react-native-elements';
import { NavigationContainerProps } from 'react-navigation';
import { useSelector } from 'react-redux';

import AppHeader from '../components/AppHeader'

const MainView: React.FC<NavigationContainerProps> = ({ navigation }) => {
  const dogs = require('../utils/dogs.json');
  const breedNames = [];

  const darkTheme = useSelector(state => state.darkTheme);
  console.log(darkTheme);  //            AJA YA ESTO DE REDUX FUNCIONA WHATS NEXT

  const getSubBreeds = (subs: string[]) => {
    let out = [];
    for (let sub in subs) {
      out.push({ breed: subs[sub].charAt(0).toUpperCase() + subs[sub].substring(1), lowercaseName: subs[sub] })
    }
    return out;
  }
  
  for(let dog in dogs) {
    // dog.charAt(0).toUpperCase() + dog.substring(1);
    breedNames.push({ breed: dog.charAt(0).toUpperCase() + dog.substring(1), lowercaseBreed: dog, subBreeds: getSubBreeds(dogs[dog]) });
  }

  return (
    <View style={{ flex: 1 }}>
      <AppHeader color='#F2F2F2' title='Dogerino Viewer'/>
      <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/dogs/main.jpg')}
          style={{ width: 275, height: 275, borderRadius: 1000, marginTop: 28 }}
        />
        <Text style={{ fontFamily: 'Raleway-Bold', fontSize: 28, marginBottom: 7, marginTop: 21 }}>Dog Viewer</Text>

        <Text style={{ fontFamily: 'Raleway', fontSize: 15, paddingHorizontal: 42, textAlign: 'center' }}>A confortable, fast and easy to use application. 
          Containing the Internet's biggest collection of open source dog pictures, you can find lot of dog's pictures from whatever breed you want.</Text>

        <Button title='Search Now!' type='outline' containerStyle={{ width: '80%', height: 50, marginTop: 21 }} buttonStyle={{ height: 50, borderColor: 'black' }}
          titleStyle={{ fontFamily: 'Raleway', fontSize: 18, textAlign: 'center', color: 'black' }} onPress={() => navigation.navigate('Search', { breeds: breedNames })} />
        
        <Text style={{ fontFamily: 'Raleway-Bold', fontSize: 26, marginBottom: 7, marginTop: 21 }}>Every breed available for you</Text>
        {/* Dogerino Viewer te permite buscar por cualquier raza */}
        <Text style={{ fontFamily: 'Raleway', fontSize: 15, paddingHorizontal: 42, textAlign: 'center', paddingBottom: 20 }}>Dogerino Viewer let you search for any breed,
          no matter what it is!</Text>

        {breedNames.map((dog, i) => 
          <TouchableOpacity key={i} style={{ width: '100%', backgroundColor: '#F2F2F2', height: 60, justifyContent: 'center', borderBottomWidth: 1, 
            borderTopWidth: i === 0 ? 1 : 0, borderColor: '#CCCCCC' }} onPress={() => navigation.navigate('Search', { breeds: breedNames, prefilter: dog.lowercaseBreed }) }>
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