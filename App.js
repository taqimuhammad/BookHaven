import * as React from "react";
import {View,Text,StyleSheet} from "react-native";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";

const App = () => {
  return (
    <View style={styles.container}>
      <SignUp/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
