import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";


const Card = ({item}) => {
  const {navigate} = useNavigation()

  return(
    <TouchableOpacity onPress={() => navigate('PokeCard', {data: item})} style={styles.outer_view_container}>
      <View style={styles.image_view_container}>
        <Image 
          style={styles.image_container}
          source={{uri:item.image}} />
      </View>
      <View style={styles.view_text_container}>
        <View style={styles.name_view_container}>
          <Text style={styles.name_container}>{item.name}</Text>
        </View>
        <View style={styles.description_view_container}>
          <Text>{item.description}</Text>
          <Text>{item.species}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default Card