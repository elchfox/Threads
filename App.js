import React from 'react';
import {I18nManager, StatusBar} from 'react-native';
import { Home, Thread } from './screens';
import StoreProvider from "./stores";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
I18nManager.allowRTL(false)

const Stack = createStackNavigator();

function App() {

  const backgroundStyle = {
    backgroundColor: "#eee"
  };
 

  return (
    <StoreProvider>
      <SafeAreaProvider>

    <SafeAreaView style={backgroundStyle} />
      <StatusBar barStyle={"#eee"} />
    <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName={'Home'}>

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Thread" component={Thread} />

            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
    </StoreProvider>
  );
};



export default App;
