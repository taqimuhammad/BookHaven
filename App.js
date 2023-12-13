import * as React from "react";
import { View, StyleSheet } from "react-native";
import AddBook from "./screens/AddBook";
import Library from "./screens/Library";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import UserDetail from "./screens/UserDetail";

const App = () => {
  return (
    <View style={styles.container}>
      <UserDetail />
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
