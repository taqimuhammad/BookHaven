import * as React from "react";
import { View, StyleSheet } from "react-native";
import AddBook from "./screens/AddBook";
import Library from "./screens/Library";


const App = () => {
  return (
    <View style={styles.container}>
      <Library />
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
