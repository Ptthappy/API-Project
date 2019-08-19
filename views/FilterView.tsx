import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Image, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainerProps } from 'react-navigation';

const FilterView: React.FC<NavigationContainerProps> = ({ navigation }) => {
  const [showBreeds, setShowBreeds] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const breedNames = useSelector(state => state.breeds);

  return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', backgroundColor: '#666' }}>
          <Button icon={<Icon name='arrow-left' color='black' size={32} style={{ color: '#FFF' }} />} buttonStyle={{ alignSelf: 'flex-start', marginTop: 24, marginLeft: 8 ,backgroundColor: 'transparent' }} 
            containerStyle={{ alignSelf: 'flex-start' }} onPress={() => navigation.navigate('Search')}/>
          <Image
            source={require('../assets/dogs/main.jpg')}
            style={{ height: 80, width: 80, borderRadius: 1000, marginTop: 0, marginBottom: 12 }}
          />
          <Text style={{ fontFamily: 'Raleway-Bold', fontSize: 17, marginBottom: 3, color: '#ffffff' }}>Dogerino Viewer</Text>
          <Text style={{ fontFamily: 'Raleway', fontSize: 14, marginBottom: 12, color: 'rgba(255,255,255,.65)' }}>Find your Breed!</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} >
          <Button title='Clear Filter' type='outline' onPress={() => navigation.navigate('Search', { breed: undefined, subBreed: undefined })} titleStyle={{ fontFamily: 'Raleway-Bold', fontSize: 15, color: '#000' }}
            buttonStyle={{ height: 50, borderColor: '#000', borderRadius: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0 }} />

          <Button title='Breeds' type='outline' onPress={() => setShowBreeds(!showBreeds)} titleStyle={{ fontFamily: 'Raleway-Bold', fontSize: 15, color: '#000' }}
            buttonStyle={{ height: 50, borderColor: '#000', borderRadius: 0, borderLeftWidth: 0, borderRightWidth: 0 }} />
          
          {showBreeds && breedNames.map((dog, i) => 
            <TouchableOpacity key={i} style={{ width: '100%', backgroundColor: '#FFF', height: 50, justifyContent: 'center' }}
              onPress={() => navigation.navigate('Search', { breed: dog.breed, subBreed: undefined })}>
              <Text style={{ fontFamily: 'Raleway-ExtraLight', fontSize: 16, paddingLeft: 15 }}>{dog.breed}</Text>
            </TouchableOpacity>
          )}

          <Button title='Sub Breeds' type='outline' onPress={() => setShowSub(!showSub)} titleStyle={{ fontFamily: 'Raleway-Bold', fontSize: 15, color: '#000' }}
            buttonStyle={{ height: 50, borderColor: '#000', borderWidth: 0, borderBottomWidth: 0.363636, marginBottom: 0.363636 }} />

          {showSub && breedNames.map((dog, i) => {
            if(dog.subBreeds.length > 0) {
              return <View key={i}>
                <View style={{ backgroundColor: '#EEE', width: '100%', height: 30, alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={{ fontFamily: 'Raleway-Bold', fontSize: 15, marginLeft: 20, color: '#202020', paddingTop: 2 }}>{dog.breed}</Text>
                </View>
                {dog.subBreeds.map((sub, j) =>
                  <TouchableOpacity key={j} style={{ width: '100%', backgroundColor: '#FFF', height: 50, justifyContent: 'center' }}
                    onPress={() => navigation.navigate('Search', { breed: dog.breed, subBreed: sub.breed })}>
                    <Text style={{ fontFamily: 'Raleway-ExtraLight', fontSize: 16, paddingLeft: 15 }}>{sub.breed}</Text>
                  </TouchableOpacity>
                )}
              </View>
            } else return null;
          })}
        </ScrollView>
      </View>
  );
}

export default FilterView;