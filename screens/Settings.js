import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const Settings = ({ navigation }) => {
  const sheetRef = useRef(null);

  const handleSignOut = () => {
    signOut(auth)
    .then(()=>{
      navigation.replace('Login');
    }).
    catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // alert(errorMessage);
    });
  };

  const handleEditprofile = () => {
    navigation.navigate("EditProfile");
  };

  const handleSecurity = () => {
    navigation.navigate("UserProfile");
  };

  const handleNotification = () => {
    navigation.navigate("Notification");
  };
  const handleBack = () => {
    navigation.navigate("Homescreen");
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
  const handleReport = () => {
    navigation.navigate("ReportProblem");
  };
  const handleDelete = () => {
    navigation.navigate("DeleteAccount");
  };
  const handlelogout = () => {
    navigation.navigate("Signout");
  };
  return (
    <View style={styles.container}>
      {/* <View style={styles.backContainer}>
           <TouchableOpacity onPress={handleBack} >
           <Icon name="arrow-back" size={34} color="black" />
           </TouchableOpacity>
         </View> */}

      <Text style={styles.heading}>Account</Text>
      <View style={styles.view1}>
        <View style={styles.insideview1}>
          <FontAwesome5 name="user-circle" size={24} color="black" style={styles.icon} />
          <TouchableOpacity onPress={handleEditprofile} >
            <Text style={styles.insidetext}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.insideview1}>
          <FontAwesome5 name="shield-alt" size={24} color="black" style={styles.icon} />
          <TouchableOpacity onPress={handleSecurity}>
            <Text style={styles.insidetext}>Security</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.insideview1}>
          <FontAwesome5 name="bell" size={24} color="black" style={styles.icon} />
          <TouchableOpacity onPress={handleNotification}>
            <Text style={styles.insidetext}>Notifications</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.heading}>Support & About</Text>
      <View style={styles.view2}>
        <View style={styles.insideview2}>
          <FontAwesome5 name="question-circle" size={24} color="black" style={styles.icon} />
          <TouchableOpacity onPress={handleFAQ}>
            <Text style={styles.insidetext}>FAQs</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.insideview2}>
          <Feather name="info" size={24} color="black" style={styles.icon} />
          <TouchableOpacity onPress={handleHelp}>
            <Text style={styles.insidetext}>Help & Support</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.insideview2}>
          <FontAwesome5 name="file-alt" size={24} color="black" style={styles.icon} />
          <TouchableOpacity onPress={handleTerms}>
            <Text style={styles.insidetext}>Terms & Policies</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.heading}>Actions</Text>
      <View style={styles.view3}>

        <View style={styles.insideview3}>
          <FontAwesome5 name="flag" size={24} color="black" style={styles.icon} />
          <TouchableOpacity onPress={handleReport}>
            <Text style={styles.insidetext}>Report Problem</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.insideview3}>
          <Feather name="users" size={24} color="black" style={styles.icon} />
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.insidetext}>Delete Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.insideview3}>
          <Feather name="log-out" size={24} color="black" style={styles.icon} />
          <TouchableOpacity onPress={() => sheetRef.current?.open()}>
            <Text style={styles.insidetext}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomSheet ref={sheetRef} height={'35%'} >

        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonc} onPress={handleSignOut} >
            <Text style={styles.textc}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button2}>
          <TouchableOpacity style={styles.buttonc2} onPress={() => sheetRef.current?.close()} >
            <Text style={styles.textc2}>Cancel</Text>
          </TouchableOpacity>
        </View>

      </BottomSheet>

    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonc: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#404B7C',
    marginTop:20,
    height: 48,
    width: 248,
    borderRadius: 25,
  },
  textc: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },
  button: {
    alignSelf: 'center',
  },
  buttonc2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#404B7C',
    marginTop:20,
    height: 48,
    width: 248,
    borderWidth:2,
    borderRadius: 25,
  },
  textc2: {
    fontSize: 22,
    color: '#404B7C',
    fontWeight: '500',
  },
  button2: {
    alignSelf: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 60,
    paddingTop: 40,
    paddingBottom: 5,
  },
  icon: {
    paddingRight: 10,
  },
  view1: {
    paddingTop: 10,
    alignSelf: 'center',
    backgroundColor: "#F3EFFF",
    height: "20%",
    width: "80%",
    alignItems: 'center',
    borderRadius: 30,
  },
  view2: {
    paddingTop: 10,
    alignSelf: 'center',
    backgroundColor: "#F3EFFF",
    height: "20%",
    width: "80%",
    alignItems: 'center',
    borderRadius: 30,
  },
  view3: {
    paddingTop: 10,
    alignSelf: 'center',
    backgroundColor: "#F3EFFF",
    height: "20%",
    width: "80%",
    alignItems: 'center',
    borderRadius: 30,
  },
  insideview1: {
    padding: 5,
    flexDirection: 'row',
    height: "30%",
    width: "90%",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  insideview2: {
    flexDirection: 'row',
    padding: 5,
    height: "30%",
    width: "90%",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  insideview3: {
    flexDirection: 'row',
    padding: 5,
    height: "30%",
    width: "90%",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  insidetext: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default Settings;