import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TrocaDeTelas from './TrocaDeTela';
import { StatusBar } from 'expo-status-bar';



export default function App() {
  return (
    <NavigationContainer>
      <TrocaDeTelas/>
      <StatusBar/>
    </NavigationContainer>
  );
}
