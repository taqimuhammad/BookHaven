import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import * as  React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Library = () => {
  const image = require('../img/img1.jpg');
  const image2 = require('../img/img2.jpg');
  const image3 = require('../img/img3.png');

  return (
    <View style={styles.container}>
      <View style={styles.headingview}>
        <Text style={styles.heading}>My Library</Text>
      </View>
      <View style={styles.scrollview}>
        <ScrollView>
          <Card
            name="The Cursed Child"
            author="By: J.K Rowling"
            img={image}
            text="Exchange"
            color="#404b7c"
            text2="Available"
            color2="#3fd48d" />

          <Card
            name="The Great Gatsby"
            author="By: F. Scott Fitzgerald"
            img={image2}
            text="For Sale"
            color="#404b7c"
            text2="Unavailable"
            color2="#d43f51" />

          <Card
            name="Matilda"
            author="By: Roald Dahl "
            img={image3}
            text="Borrow"
            color="#404b7c"
            text2="Available"
            color2="#3fd48d" />

          <Card
            name="The Great Gatsby"
            author="By: F. Scott Fitzgerald"
            img={image2}
            text="For Sale"
            color="#404b7c"
            text2="Unavailable"
            color2="#d43f51" />

          <Card
            name="Matilda"
            author="By: Roald Dahl "
            img={image3}
            text="Borrow"
            color="#404b7c"
            text2="Available"
            color2="#3fd48d" />

        </ScrollView>
      </View>
      <View style={styles.buttonview}>
        <View style={styles.button}>
          <Button title="Add Books" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  scrollview: {
    flex: 3,
  },
  headingview: {
    flex: 0.5,
  },
  heading: {
    fontSize: 30,
    paddingTop: 30,
    paddingBottom: 10,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonview: {
    flex: 0.5,
  },
  button: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
  }
});

export default Library;

