import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import * as  React from 'react';
import Card from '../components/Card';

const Library = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Library</Text>
      <Card />

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

