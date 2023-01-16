import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CryptoList from './src/screens/CryptoList';
import AddCrypto from './src/screens/AddCrypto';
import {NavigationContainer} from '@react-navigation/native';
import theme from './src/theme';
import {ThemeProvider} from 'styled-components';

const Stack = createNativeStackNavigator();

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CryptoTraker Pro"
          component={CryptoList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddCrypto"
          component={AddCrypto}
          options={{
            title: 'Back to list',
            headerBackTitle: 'Back to list',
            headerTitleStyle: {
              color: theme.colors.blueGray,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);
export default App;
