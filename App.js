import React from 'react';
import Navigation from './Navigation';
import { View,StyleSheet } from 'react-native';


export default function App() {
  return(
    <View style={styles.container}>
<Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   }
});