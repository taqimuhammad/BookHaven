import {useEffect}from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Splash = ({navigation}) => {
  const handlenext = () => {
    navigation.navigate("Splash2")
    
  };

  const handleskip = () => {
    navigation.navigate("Splash3")
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            navigation.replace('Homescreen');
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
    return unsubscribe
}, [])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/p1.png')} // Replace with the path to your background image
        resizeMode='cover' 
        style={styles.backgroundImage}
      >
        <View style={styles.skipContainer}>
          <TouchableOpacity onPress={handleskip}>
            <Text style={styles.skipbuttonText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nextContainer}>
          <TouchableOpacity onPress={handlenext}>
            <Text style={styles.nextbuttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between', // pushes children to both ends
  },
  skipContainer: {
    alignSelf: 'flex-end', // aligns child to the right
    marginTop: 30, // or the value that fits well with your layout
    marginRight: 15, // or the value that fits well with your layout
  },
  
  skipbuttonText: {
    color: '#FFFFFF', // Black text color
    fontSize: 18, // Font size
    fontWeight: 'bold', // Bold text
  },

  nextContainer: {
    alignSelf: 'flex-end', // aligns child to the right
    marginBottom: 15, // or the value that fits well with your layout
    marginRight: 15, // or the value that fits well with your layout
  },
 
  
  nextbuttonText: {
    color: '#534976', // Black text color
    fontSize: 18, // Font size
    fontWeight: 'bold', // Bold text
  },
  
});

export default Splash;
