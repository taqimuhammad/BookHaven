import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import React from 'react';

const Library = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Library</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 30,
    paddingTop: 50,
    margin: 10,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
});

export default Library;

