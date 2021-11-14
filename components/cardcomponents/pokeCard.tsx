import React from "react";
import { Image, SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";

const PokeCard = (props) => {
  const data = props.route.params.data
  return(
   <SafeAreaView style={{backgroundColor:"aliceblue"}}>
     <ScrollView>
       <View style={styles.imageView}>
         <Image 
         style={styles.imageContainer}
         source={{uri:data.image}}></Image>
       </View>
       <View style={styles.generalView}>
         <View style={styles.headerView}>
           <Text style={styles.header}>General Info</Text>
         </View>
         <Text style={styles.text}>
           Name: {data.name} </Text>
         <Text style={styles.text}>
           Types: {data.types[0]}, {data.types[1]}</Text>
         <Text style={styles.text}>
           Heigth: {data.height}</Text>
         <Text style={styles.text}>
           Weigth: {data.weight}</Text>
        </View>
        <View style={styles.trainingView}>
          <View style={styles.headerView}>
            <Text style={styles.header}>Training</Text>
          </View>
          <Text style={styles.text}>
            Evyield: {data.training.evYield}</Text>
          <Text style={styles.text}>
            Catch Rate: {data.training.catchRate.value} , {data.training.catchRate.text}</Text>
          <Text style={styles.text}>
            Base Friendship: {data.training.baseFriendship.value} , {data.training.baseFriendship.text}</Text>
          <Text style={styles.text}>
            Base Exp: {data.training.baseExp}</Text>
          <Text style={styles.text}>
            Growth Rate: {data.training.growthRate}</Text>
        </View>
        <View style={styles.breedingsView}>
          <View style={styles.headerView}>
            <Text style={styles.header}>Breedings</Text>
          </View>
          <Text style={styles.text}>
            Egg Groups: {data.breedings.eggGroups[0]}, {data.breedings.eggGroups[0]}</Text>
          <Text style={styles.text}>
            Gender: male  {data.breedings.gender.male}, female {data.breedings.gender.female}</Text>
          <Text style={styles.text}>
            Egg Cycles: {data.breedings.eggCycles.value} , {data.breedings.eggCycles.text}</Text>
        </View>
        <View style={styles.baseStatsView}>
          <View style={styles.headerView}>
            <Text style={styles.header}>Base Stats</Text>
          </View>
          <Text style={styles.text}>
            Hp level 1: {data.baseStats.hp[0]}, Hp level 2 : {data.baseStats.hp[1]}, 
            Hp level 3: {data.baseStats.hp[2]}</Text>
          <Text style={styles.text}>
            Attack level 1: {data.baseStats.attack[0]}, Attack level 2 : {data.baseStats.attack[1]}, 
            Attack level 3: {data.baseStats.attack[2]}</Text>
          <Text style={styles.text}>
            Defence level 1: {data.baseStats.defence[0]}, Defence level 2 : {data.baseStats.defence[1]}, 
            Defence level 3: {data.baseStats.defence[2]}</Text>
          <Text style={styles.text}>
            Speed level 1: {data.baseStats.speed[0]}, Speed level 2 : {data.baseStats.speed[1]}, 
            Speed level 3: {data.baseStats.speed[2]}</Text>
        </View>
     </ScrollView>
   </SafeAreaView>
  )
}
export default PokeCard

const styles = StyleSheet.create({
  
  imageView:{
    alignItems:"center",
    borderRadius:15,
    
  },
  imageContainer:{
    height: Dimensions.get("screen").height /8,
    width: Dimensions.get("screen").width /4,
    
  },
  generalView:{
    justifyContent:"space-between",
    padding:10,
    backgroundColor:"azure",
    borderWidth:1,
    borderRadius:15,
    margin:10
  },
  trainingView:{
    padding:10,
    justifyContent:"space-between",
    backgroundColor:"bisque",
    borderWidth:1,
    borderRadius:15,
    margin:10
  },
  breedingsView:{
    padding:10,
    justifyContent:"space-between",
    backgroundColor:"lightgreen",
    borderWidth:1,
    borderRadius:15,
    margin:10
  },
  baseStatsView:{
    padding:10,
    justifyContent:"flex-end",
    backgroundColor:"salmon",
    borderWidth:1,
    borderRadius:15,
    margin:10
  },
  headerView:{
    borderBottomWidth:1
  },
  header:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center"
  },
  text:{
    fontSize:18,
    fontWeight:"900",
    padding:10,
    textDecorationLine:"underline"
  }
})