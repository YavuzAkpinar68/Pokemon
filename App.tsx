import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, TextInput } from 'react-native';
import axios from 'axios';
import Card from './components/cardcomponents/card';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PokeCard from './components/cardcomponents/pokeCard';
import styles from './components/cardcomponents/style';

const Stack = createNativeStackNavigator()


 function App1() {
  const [data, setData] = useState([])
  const [isActive, setisActive] = useState<boolean>(true)
  const [keyword, setKeyword] = useState("")
  const response = axios.get("https://pokemon-db-json.herokuapp.com/")
  
  useEffect(() => {
    response.then(e =>{ 
    setisActive(false)
    setData(e.data)})
  }, [])
  let source = data.filter(a => a.name.includes(keyword)) ?? "";
  return (
    <View style={{backgroundColor:"teal"}}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={keyword}
        onChangeText={keyword => setKeyword(keyword.toLowerCase())}
        autoCorrect={false}
        autoCompleteType={"off"}
        autoCapitalize={"none"}
        />
      {isActive ? <ActivityIndicator />
      : <FlatList
          data={source}
          renderItem={({item}) => <Card item={item} />} 
        />}
    </View>
  );
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App1} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="PokeCard" component={PokeCard}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App


