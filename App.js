import * as React from "react";
import {View,StyleSheet} from "react-native";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import UserDetail from "./screens/UserDetail";
import AddBook from "./screens/AddBook";
import DropDown from "./components/DropDown";

const App = () => {
  return (
    <View style={styles.container}>
       <AddBook />
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
