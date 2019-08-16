import React, { useState, useEffect } from 'react';
import { StatusBar, AsyncStorage } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationContainer, createDrawerNavigator } from 'react-navigation';
import * as Font from 'expo-font';
import store from './redux/store'
import { Provider, useDispatch } from 'react-redux'
import { SET_DARK_THEME } from './redux/actionTypes'

/* Views */
import MainView from './views/MainView';
import DetailView from './views/DetailView';
import SearchView from './views/SearchView';
import SideMenu from './components/SideMenu';

const ConsumerApp: React.FC = () => {
  //Dev:
  console.disableYellowBox = true;
  
  const [ready, setReady] = useState(false);

  let dogs = {};
  const dispatch = useDispatch();

  useEffect(() => {
    _retrieveState();
  }, [])

  const _startAsync = async () => {
    await Font.loadAsync({
      'Raleway': require('./assets/Raleway-Regular.ttf'),
      'Raleway-ExtraLight': require('./assets/Raleway-ExtraLight.ttf'),
      'Raleway-Bold': require('./assets/Raleway-Bold.ttf')
    })
  }

  const _retrieveState = async () => {
    const darkTheme = await AsyncStorage.getItem('DARK-THEME');
    await fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(response => {
        if(response.status === 'success') {
          dogs = response.message;
        }
      })
      .catch(err => console.log(err));

    if(!darkTheme) {
      await AsyncStorage.setItem('DARK-THEME', JSON.stringify({ state: false }));
      dispatch({ type: SET_DARK_THEME, payload: { darkTheme: false } });
    } else {
      dispatch({ type: SET_DARK_THEME, payload: { darkTheme: JSON.parse(darkTheme).state } });
    }
  }

  const SearchStack = createDrawerNavigator({
    Search: SearchView,
  }, {
    drawerPosition: 'right',
    drawerBackgroundColor: '#FFFFFF',
    overlayColor: '#C0C0C0',
    contentComponent: SideMenu
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

  if(ready) {
    return (
      <AppContainer/>
    );
  }

  else {
    _startAsync().then(() => setReady(true));
    return(null);
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
