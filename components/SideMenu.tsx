import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { useSelector } from 'react-redux';

const SideMenu: React.FC = () => {
  const breedNames = useSelector(state => state.breeds);
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <View style={{ alignItems: 'flex-start', backgroundColor: '#666' }}>
        <Image
          source={require('../assets/dogs/main.jpg')}
          style={{ height: 80, width: 80, borderRadius: 1000, marginTop: 35, marginLeft: 20, marginBottom: 12 }}
        />
        <Text style={{ fontFamily: 'Raleway-Bold', fontSize: 17, marginLeft: 20, marginBottom: 3, color: '#ffffff' }}>Dogerino Viewer</Text>
        <Text style={{ fontFamily: 'Raleway', fontSize: 14, marginLeft: 20, marginBottom: 12, color: 'rgba(255,255,255,.65)' }}>Find your Breed!</Text>
      </View>

      <View style={{ backgroundColor: '#EEE', width: '100%', height: 30, alignItems: 'flex-start', justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'Raleway-Bold', fontSize: 15, marginLeft: 20, color: '#202020', paddingTop: 2 }}>Breed</Text>
      </View>

      {breedNames.map((dog, i) => 
        <TouchableOpacity key={i} style={{ width: '100%', backgroundColor: '#FFF', height: 50, justifyContent: 'center', borderBottomWidth: 0.5, 
          borderColor: '#CCCCCC' }} onPress={() => console.log('ola bb') }>
          <Text style={{ fontFamily: 'Raleway-ExtraLight', fontSize: 16, paddingLeft: 15 }}>{dog.breed}</Text>
        </TouchableOpacity>
        )}
    </ScrollView>
  );
}

export default SideMenu;