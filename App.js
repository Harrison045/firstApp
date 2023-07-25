import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import profile from "./assets/profile.png";
function App() {
  return (
    <View style={style.container}>
      <Image source={profile} style={style.image} />
      <View style={style.detailContainer}>
        <Text style={style.label}>Name</Text>
        <Text style={[style.label ,style.info]}>Tony Start</Text>
      </View>
      <View style={style.detailContainer}>
        <Text style={style.label}>Email</Text>
        <Text style={[style.label ,style.info]}>me@gmail.com</Text>
      </View>
      <View style={style.detailContainer}>
        <Text style={style.label}>Gender</Text>
        <Text style={[style.label ,style.info]}>She Male</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:5,
  },
  image: {
    marginTop:100,
    width: 150,
    height: 150,
    marginBottom: 30,
    alignSelf:"center",
    borderRadius:75
  },
  detailContainer:{
    flexDirection:"row",
    marginVertical:3
  },
  label:{
    borderColor:"black",
    borderWidth:1,
    fontSize:20,
    flex:3,
    paddingHorizontal: 5
  },
  info:{
    flex:7
  }
});

export default App;
