import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Card from './components/cardcomponents/card';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PokeCard from './components/cardcomponents/pokeCard';

const Stack = createNativeStackNavigator()


 function App1() {
  const [data, setData] = useState()
  const [isActive, setisActive] = useState<boolean>(true)
  useEffect(() => {setisActive(false)}, [data])
  useEffect(() => {
    axios.get("https://pokemon-db-json.herokuapp.com/").then(e => setData(e.data))
  }, [])
  
  return (
    <View>
      {isActive ? <ActivityIndicator />
      : <FlatList
          data={data}
          renderItem={({item}) => <Card item={item} />} 
        />}
    </View>
  );
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App1} ></Stack.Screen>
        <Stack.Screen name="PokeCard" component={PokeCard}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App


