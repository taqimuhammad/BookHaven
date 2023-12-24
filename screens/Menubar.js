import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Menuscreen = ({ navigation }) =>
 {
    const handleBack = () => {
        navigation.navigate("Homescreen");
      };
      
    const handlechat = () => {
        navigation.navigate("Chat");
      };
     
    const handlecommunity = () => {
        navigation.navigate("Community");
      };
    const handlesettings = () => {
        navigation.navigate("Settings");
      };
    const handlesignout = () => {
        navigation.navigate("Signout");
      };
    const handlewallet = () => {
        navigation.navigate("Wallet");
      };  
    const handlewishlist = () => {
        navigation.navigate("Wishlist");
      };   
return(
<View style={styles.container}>
    <ImageBackground
      source={require('../img/Sidebar.png')} // Replace with the path to your background image
      resizeMode='cover' // or 
      style={styles.backgroundImage}
    >
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>JohnSnow</Text>
        </View>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={handleBack} >
          <Text style={styles.backbuttonText}>Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chatContainer}>
        <TouchableOpacity onPress={handlechat}>
          <Text style={styles.chatbuttonText}>Chat</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.communityContainer}>
        <TouchableOpacity onPress={handlecommunity}>
          <Text style={styles.communitybuttonText}>Community</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.settingsContainer}>
        <TouchableOpacity onPress={handlesettings}>
          <Text style={styles.settingsbuttonText}>Settings</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.signoutContainer}>
        <TouchableOpacity onPress={handlesignout}>
          <Text style={styles.signoutbuttonText}>Signout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.walletContainer}>
        <TouchableOpacity onPress={handlewallet}>
          <Text style={styles.walletbuttonText}>Wallet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wishlistContainer}>
        <TouchableOpacity onPress={handlewishlist}>
          <Text style={styles.wishlistbuttonText}>Wishlist</Text>
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
    justifyContent: 'space-between', 
  },

    nameContainer: {
      position: 'absolute',
      top: 130,
      left:100,

    },
    nameText: {
      color: 'white', 
      fontSize: 26, 
      fontWeight: 'bold',
    },
  
    backButtonContainer: {
      position: 'absolute',
      top: 232.2,
      left:64,
    },
    backbuttonText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold',
    },
    
    chatContainer: {
      position: 'absolute',
      top: 405,
      left:64, 
    },
    
    chatbuttonText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    },
    
    communityContainer: {
      position: 'absolute',
      top: 362,
      left:64, 
    },
    
    communitybuttonText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    },
    
    
  settingsContainer: {
    position: 'absolute',
      top: 447,
      left:64, 
  },
  
  settingsbuttonText: {
    color: 'white', 
    fontSize: 22, 
    fontWeight: 'bold', 
  },

    
   
  signoutContainer: {
    position: 'absolute',
    top: 554,
    left:64, 
  },
  
  signoutbuttonText: {
    color: 'white', 
    fontSize: 26, 
    fontWeight: 'bold', 
  },
    
    walletContainer: {
      position: 'absolute',
      top: 275,
      left:64, 
    },
    
    walletbuttonText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    },
    
    wishlistContainer: {
      position: 'absolute',
      top: 320,
      left:64, 
    },
    
    wishlistbuttonText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    }
  });


export default Menuscreen;