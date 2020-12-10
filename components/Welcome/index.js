import React from "react";
import { StyleSheet,View, Text } from "react-native";


const Welcome = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
        color:  "red" ,
      }}
    >

      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text2}>We are happy to have you on board. Let's get to know each
        other better: how would you like to use this app?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    marginTop: -100,
    fontSize: 40,
    color: 'red',
  },
  text2: {

    fontSize: 25,
    color: 'red',
    backgroundColor: "#F194FF",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default Welcome;
