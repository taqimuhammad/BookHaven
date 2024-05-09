import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const Settings = ({ navigation }) =>
 {
    const handleEditprofile = () => {
        navigation.navigate("EditProfile");
      };
      
    const handleSecurity = () => {
        navigation.navigate("");
      };
     
    const handleNotification = () => {
        navigation.navigate("Notification");
      };
    const handleBack = () => {
        navigation.navigate("Home");
      };
    const handleFAQ = () => {
        navigation.navigate("Faq");
      };
    const handleHelp = () => {
        navigation.navigate("HelpSupport");
      };  
    const handleTerms = () => {
        navigation.navigate("TermsPolicies");
      };  
      const handleReport  = () => {
        navigation.navigate("ReportProblem");
      }; 
      const handleDelete = () => {
        navigation.navigate("DeleteAccount");
      };
      const handlelogout = () => {
        navigation.navigate("Signout");
      }; 
return(
<View style={styles.container}>
    <ImageBackground
      source={require('../img/Setpic.png')} // Replace with the path to your background image
      resizeMode='cover' // or 
      style={styles.backgroundImage}
    >
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Settings</Text>
        </View>
        <View style={styles.EditprofileContainer}>
          <TouchableOpacity onPress={handleEditprofile} >
          <Text style={styles.EditprofileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.SecurityContainer}>
        <TouchableOpacity onPress={handleSecurity}>
          <Text style={styles.SecuritybuttonText}>Security</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.NotificationContainer}>
        <TouchableOpacity onPress={handleNotification}>
          <Text style={styles.NotificationbuttonText}>Notification</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.backContainer}>
           <TouchableOpacity onPress={handleBack} >
           <Icon name="arrow-back" size={34} color="black" />
           </TouchableOpacity>
         </View>
        
        <View style={styles.FAQContainer}>
        <TouchableOpacity onPress={handleFAQ}>
          <Text style={styles.FAQbuttonText}>FAQ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.HelpContainer}>
        <TouchableOpacity onPress={handleHelp}>
          <Text style={styles.HelpbuttonText}>Help&Support</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.TermsContainer}>
        <TouchableOpacity onPress={handleTerms}>
          <Text style={styles.TermsbuttonText}>Terms&Policies</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Report}>
        <TouchableOpacity onPress={handleReport}>
          <Text style={styles.ReportText}>Reports a Problem</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Delete}>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.DeleteText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logout}>
        <TouchableOpacity onPress={handlelogout}>
          <Text style={styles.logoutText}>logout</Text>
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
      top: 34,
      left:115,

    },
    nameText: {
      color: '#000000', 
      fontSize: 34, 
      fontWeight: 'bold',
    },
  
    EditprofileContainer: {
      position: 'absolute',
      top: 148,
      left:85,
    },
    EditprofileText: {
      color: '#000000', 
      fontSize: 20, 
      fontWeight: 'bold',
    },
    
    SecurityContainer: {
      position: 'absolute',
      top: 187,
      left:85, 
    },
    
    SecuritybuttonText: {
      color: '#000000', 
      fontSize: 20, 
      fontWeight: 'bold', 
    },
    Report: {
      position: 'absolute',
      top: 540,
      left:85, 
    },
    
    ReportText: {
      color: '#000000', 
      fontSize: 20, 
      fontWeight: 'bold', 
    },
    Delete: {
      position: 'absolute',
      top: 573,
      left:85, 
    },
    
    DeleteText: {
      color: '#000000', 
      fontSize: 20, 
      fontWeight: 'bold', 
    },
    logout: {
      position: 'absolute',
      top: 607,
      left:85, 
    },
    
    logoutText: {
      color: '#000000', 
      fontSize: 20, 
      fontWeight: 'bold', 
    },
    
    NotificationContainer: {
      position: 'absolute',
      top: 221,
      left:85, 
    },
    
    NotificationbuttonText: {
      color: '#000000', 
      fontSize: 20, 
      fontWeight: 'bold', 
    },
    
    
    backContainer: {
    position: 'absolute',
      top: 45,
      left:20, 
  },

    
   
  FAQContainer: {
    position: 'absolute',
    top: 340,
    left:85, 
  },
  
  FAQbuttonText: {
    color: '#000000', 
    fontSize: 20, 
    fontWeight: 'bold', 
  },
    
    HelpContainer: {
      position: 'absolute',
      top: 370,
      left:85, 
    },
    
    HelpbuttonText: {
      color: '#000000', 
      fontSize: 20, 
      fontWeight: 'bold', 
    },
    
    TermsContainer: {
      position: 'absolute',
      top: 406,
      left:85, 
    },
    
    TermsbuttonText: {
      color: '#000000', 
      fontSize: 20, 
      fontWeight: 'bold', 
    }
  });


export default Settings;










// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { TouchableOpacity, StatusBar } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const Settings = ({ navigation }) =>
//  {
//     const handleBack = () => {
//         navigation.navigate("Homescreen");
//       };
  
// return(
// <View style={styles.container}>

//       <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
//       <Text style={styles.title}>Settings</Text> 

//       <View style={styles.EditprofileContainer}>
//           <TouchableOpacity onPress={handleBack} >
//           <Icon name="arrow-back" size={34} color="black" />
//           </TouchableOpacity>
//         </View>
// </View>

// );
// };
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#FFFFFF', 
//     },
  
//     EditprofileContainer: {
//         position: 'alignself',
//         top: -330,
//         right: 185,
//     },

//     title: {
//       fontSize: 34,
//       color: 'black',
//       fontWeight: 'bold',
//       position: 'absolute',
//       top: 4,
//     },
   
//   });


// export default Settings;


