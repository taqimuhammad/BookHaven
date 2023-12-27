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
     
    const handleLocation = () => {
        navigation.navigate("Location");
      };
    const handlesettings = () => {
        navigation.navigate("Settings");
      };
    const handleLogout = () => {
        navigation.navigate("Signout");
      };
    const handlewallet = () => {
        navigation.navigate("Wallet");
      };  
    const handlewishlist = () => {
        navigation.navigate("Wishlist");
      };  
      const handleorder  = () => {
        navigation.navigate("");
      }; 
      const handlepayment = () => {
        navigation.navigate("");
      };
      const handletracking = () => {
        navigation.navigate("");
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

        <View style={styles.LocationContainer}>
        <TouchableOpacity onPress={handleLocation}>
          <Text style={styles.LocationbuttonText}>Location</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.settingsContainer}>
        <TouchableOpacity onPress={handlesettings}>
          <Text style={styles.settingsbuttonText}>Settings</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.LogoutContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.LogoutbuttonText}>Logout</Text>
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
      <View style={styles.order}>
        <TouchableOpacity onPress={handleorder}>
          <Text style={styles.orderText}>Orders</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.payment}>
        <TouchableOpacity onPress={handlepayment}>
          <Text style={styles.paymentText}>Payment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tracking}>
        <TouchableOpacity onPress={handletracking}>
          <Text style={styles.trackingText}>Tracking</Text>
        </TouchableOpacity>
      </View>
    

    </ImageBackground>
</View>

);
};
const styles = StyleSheet.create({
  container: {
    position:"relative",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between', 
  },

    nameContainer: {
      position: 'absolute',
      top: 130,
      left:55,

    },
    nameText: {
      color: 'white', 
      fontSize: 26, 
      fontWeight: 'bold',
    },
  //home
    backButtonContainer: {
      position: 'absolute',
      top: 204,
      left:50,
    },
    backbuttonText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold',
    },
    
    chatContainer: {
      position: 'absolute',
      top: 358,
      left:50, 
    },
    
    chatbuttonText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    },
    order: {
      position: 'absolute',
      top: 396,
      left:50, 
    },
    
    orderText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    },
    payment: {
      position: 'absolute',
      top: 435,
      left:50, 
    },
    
    paymentText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    },
    tracking: {
      position: 'absolute',
      top: 471,
      left:50, 
    },
    
    trackingText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    },
    
    LocationContainer: {
      position: 'absolute',
      top: 320,
      left:50, 
    },
    
    LocationbuttonText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    },
    
    
  settingsContainer: {
    position: 'absolute',
      top: 508,
      left:50, 
  },
  
  settingsbuttonText: {
    color: 'white', 
    fontSize: 22, 
    fontWeight: 'bold', 
  },

    
   
  LogoutContainer: {
    position: 'absolute',
    top: 600,
    left:50, 
  },
  
  LogoutbuttonText: {
    color: 'white', 
    fontSize: 22, 
    fontWeight: 'bold', 
  },
    
    walletContainer: {
      position: 'absolute',
      top: 244,
      left:50, 
    },
    
    walletbuttonText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    },
    
    wishlistContainer: {
      position: 'absolute',
      top: 282,
      left:50, 
    },
    
    wishlistbuttonText: {
      color: 'white', 
      fontSize: 22, 
      fontWeight: 'bold', 
    }
  });


export default Menuscreen;