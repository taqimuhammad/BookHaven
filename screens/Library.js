import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import * as  React from 'react';
import Card from '../components/Card';

const Library = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>My Library</Text>
      <Card />
      <Card />
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
    fontSize:30,
    paddingTop:30,
    paddingBottom:10,
    margin: 10,
    fontWeight: 'bold',
    textAlign:'center',
  },
});

export default Library;

