import { StatusBar } from 'expo-status-bar';
import { LogBox, YellowBox } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
LogBox.ignoreAllLogs()
console.disableYellowBox = true;
LogBox.ignoreLogs(['Warning:Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.']);
YellowBox.ignoreWarnings(["Setting a timer"])
console.ignoredYellowBox = ['Setting a timer'];

const userInitialState = {
  user: {
    email: "",
    photoUrl: "",
    name: ""
  },
  isLoggedIn: false
}


function reducer(state = userInitialState, action) {
  console.log(action)
  switch (action.type) {
    case "LOGIN":
      return {
        user: {
          email: action.user.email,
          photoUrl: action.user.photoUrl,
          name: action.user.name
        },
        isLoggedIn: true
      };
    case "LOGOUT":
      return {
        userInitialState
      }
    default:
      return state
  }
}


export default function App() {
  const store = createStore(reducer);
  // store.dispatch({type:"SET"})
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }

}