import * as React from "react";
import {ScrollView,View,StyleSheet} from "react-native";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import UserDetail from "./screens/UserDetail";
import Button from "./components/Button";
import AddBook from "./screens/AddBook";

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
