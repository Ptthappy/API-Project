import React, { useState, useEffect } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import { createStackNavigator, createAppContainer, NavigationContainer, createDrawerNavigator } from 'react-navigation';
import * as Font from 'expo-font';
import store from './redux/store'
import { Provider, useDispatch } from 'react-redux'
import { SET_DARK_THEME, SET_BREEDS } from './redux/actionTypes'

/* Views */
import MainView from './views/MainView';
import DetailView from './views/DetailView';
import SearchView from './views/SearchView';
import FilterView from './views/FilterView';

const ConsumerApp: React.FC = () => {
  //Dev:
  console.disableYellowBox = true;
  
  const [ready, setReady] = useState(false);

  let dogs = {};
  let breedNames = [];

  const dispatch = useDispatch();

  useEffect(() => {
    _retrieveState();
  }, [])

  const getSubBreeds = (subs: string[]) => {
    let out = [];
    for (let sub in subs) {
      out.push({ breed: subs[sub] })
    }
    return out;
  }

  const _startAsync = async () => {
    await fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(response => {
        if(response.status === 'success') {
          dogs = response.message;
          for(let dog in dogs) {
            breedNames.push({ breed: dog, subBreeds: getSubBreeds(dogs[dog]) });
          }
          dispatch({ type: SET_BREEDS, payload: { breeds: breedNames } })
        }
      }).catch(err => console.log(err));

    await Font.loadAsync({
      'Raleway': require('./assets/Raleway-Regular.ttf'),
      'Raleway-ExtraLight': require('./assets/Raleway-ExtraLight.ttf'),
      'Raleway-Bold': require('./assets/Raleway-Bold.ttf')
    })
  }

  const _retrieveState = async () => {
    const darkTheme = await AsyncStorage.getItem('DARK-THEME');
    
    if(!darkTheme) {
      await AsyncStorage.setItem('DARK-THEME', JSON.stringify({ state: false }));
      dispatch({ type: SET_DARK_THEME, payload: { darkTheme: false } });
    } else {
      dispatch({ type: SET_DARK_THEME, payload: { darkTheme: JSON.parse(darkTheme).state } });
    }
  }

  const SearchStack = createStackNavigator({
    Search: SearchView,
    Filter: FilterView
  }, {
    headerMode: 'none',
    initialRouteName: 'Search'
  })

  const SearchContainer = createAppContainer(SearchStack);

  const AppStack: NavigationContainer = createStackNavigator({
    Main: MainView,
    Detail: DetailView,
    Search: SearchContainer
  }, {
    headerMode: 'none',
    initialRouteName: 'Main'
  });

  const AppContainer: NavigationContainer = createAppContainer(AppStack);

  if(!ready) {
    return(
      <AppLoading
        startAsync={_startAsync}
        onError={console.warn}
        onFinish={() => setReady(true)}
      />
    );
  } else {
    return (
      <AppContainer/>
    );
  }
}

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content'/>
      <ConsumerApp/>
    </Provider>
  );
}

export default App;
