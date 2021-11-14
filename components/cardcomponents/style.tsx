import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

  outer_view_container:{
    backgroundColor:"teal",
    flex:1,
    flexDirection:"row",
    borderWidth:0.5,
    paddingTop:20
  },
  image_view_container:{
    flex:2,
    padding:5,
    paddingTop:40,
    paddingRight:12,
    backgroundColor:"teal"
  },
  view_text_container:{
    flex:5,
    padding:10,
    backgroundColor:"teal"
  },
  name_view_container:{
    padding:10,
    backgroundColor:"khaki",
    borderWidth:1,
    borderRadius:15
  },
  description_view_container:{
    padding:10,
    alignItems:"baseline",
    borderWidth:1,
    backgroundColor:"white",
    borderRadius:15
  },
  image_container:{
    height: Dimensions.get("screen").height /7,
    width: Dimensions.get("screen").width/3.5,
    borderRadius:360,
    backgroundColor:"aqua",
    borderWidth:1,
    borderColor:"black"
  },
  name_container:{
    fontSize:25
  }
})
export default styles