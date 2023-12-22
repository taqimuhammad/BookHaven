import React, { useState } from 'react'; // Corrected import
import { TouchableOpacity, StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../components/searchbar';
const HomePage = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

  const notificationbar = () => {
    navigation.navigate("notification");
  };
  
  const menubar = () => {
    navigation.navigate("menuscreen")
  };
  
  const messagebar = () => {
    navigation.navigate("msg_sc")
  };


  return (
    <View style={styles.container}>
        <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked} // Pass setClicked as a prop
      />
      <Text style={styles.title}>Home</Text>

      <View style={styles.notificationContainer}>
        <TouchableOpacity onPress={notificationbar}>
          <Icon name="notifications" size={34} color="#404B7C" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.menubarContainer}>
        <TouchableOpacity onPress={menubar}>
          <Icon name="menu" size={36} color="#404B7C" />
        </TouchableOpacity>
      </View>

      <View style={styles.messagebarContainer}>
        <TouchableOpacity onPress={messagebar}>
          <Icon name="messenger" size={30} color="#404B7C" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Set the background color for the home page
  },

  menubarContainer: {
    position: 'alignself',
    top: -334,
    right: 140,
  },
  
  messagebarContainer: {
    position: 'alignself',
    top: -366,
    left: 155,
  },
  
  notificationContainer: {
    position: 'alignself',
    top: -300,
    left: 115,
  },

  title: {
    fontSize: 34,
    color: 'black',
    fontWeight: 'bold',
    position: 'absolute',
    top: 12,
  },
  // Add more styles for other components on the home page if needed
});

export default HomePage;
