import { TextInput, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { updatePassword, updateEmail ,getASecureRandomPassword} from "firebase/auth";

const UserProfile = ({ navigation }) => {
  const [fullName, onChangeFullName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [RePassword, onChangeReEnterPassword] = useState(null);

  const handleBack = () => {
    navigation.navigate("Settings");
  };
  
  // const handleupdateemail = async () => {
  //   updateEmail(auth.currentUser,email)
  //   .then(() => {
  //     onChangeEmail(auth.currentUser.email);
  //     console.log("Email updated");
  //   }).catch((error) => {
  //     alert(error);
  //   });
  // };

  // const handleupdatepassword = async () => {
  //   const newPassword = getASecureRandomPassword();
  //   updatePassword(auth.currentUser, newPassword)
  //   .then(() => {
  //     password = newPassword;
  //     RePassword = newPassword;
  //     console.log("Password Updated");
  //   }).catch((error) => {
  //     alert(error);
  //   });
  // };

  const handleupdateprofile = async () => {
    const docRef = doc(db, "Users" , auth.currentUser.uid);
    await updateDoc(docRef,{
      Fullname:fullName,
      Email:email,
      Number:number,
      Password:RePassword,
      Repassword:RePassword,
    })
    .then(()=>{
      alert("Profile Updated");
    })
    navigation.navigate("Settings");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <Text style={styles.heading}>Edit Profile</Text>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={handleBack} >
            <Icon name="arrow-back" size={34} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={require('../img/profile.jpg')} style={styles.image} />
          <TouchableOpacity style={styles.editicon} activeOpacity={0.9}>
            <Feather name="edit" size={20} color="#404B7C" />
          </TouchableOpacity>
          <Text style={styles.username}>John Smith</Text>
          <Text style={styles.email}>@jsmith23</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.insidebody}>
         <Feather name="edit" size={20} color="black" style={styles.icon1}/> 
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={onChangeFullName}
            placeholder="Name"
            placeholderTextColor={'black'}
            keyboardType="default"
          />
          <Feather name="edit" size={20} color="black" style={styles.icon2}/>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={onChangeEmail}
            placeholder="Email"
            placeholderTextColor={'black'}
            keyboardType="email-address"
          />
          <Feather name="edit" size={20} color="black" style={styles.icon3}/>
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={onChangeNumber}
            placeholder="Phone number"
            placeholderTextColor={'black'}
            keyboardType="numeric"
          />
          <Feather name="edit" size={20} color="black" style={styles.icon4}/>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={onChangePassword}
            placeholder="Current password"
            placeholderTextColor={'black'}
            secureTextEntry={true}
          />
          <Feather name="edit" size={20} color="black" style={styles.icon5}/>
          <TextInput
            style={styles.input}
            value={RePassword}
            onChangeText={onChangeReEnterPassword}
            placeholder="New password"
            placeholderTextColor={'black'}
            secureTextEntry={true}
          />
          <View style={styles.button}>
            <TouchableOpacity style={styles.buttonc} onPress={()=>{
                    // handleupdateemail();
                    // handleupdatepassword();
                    handleupdateprofile();
                }} >
              <Text style={styles.textc}>Update Profile</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -120,

  },
  input: {
    fontSize: 20,
    height: 50,
    width: 250,
    margin: 10,
    borderBottomWidth: 1,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    paddingTop: 20,
    margin: 10,
    paddingBottom: 5,
    alignSelf: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 30,
  },
  buttonc: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#404B7C',
    height: 48,
    width: 248,
    borderRadius: 25,
  },
  textc: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },
  editicon: {
    position: 'absolute',
    top: 100,
    right: 125,
  },
  topview: {
    flex: 0.60,
    backgroundColor: '#C1BADC',
    height: 200,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 80,
    borderColor: 'white',
    borderWidth: 3,
    alignSelf: 'center',
    top: 20,
  },
  username: {
    fontSize: 25,
    top: 20,
    alignSelf: 'center',
  },
  email: {
    fontSize: 20,
    alignSelf: 'center',
    top: 20,
    color: 'grey',
  },
  body: {
    flex: 2,
  },
  insidebody: {
    marginTop: 110,
    alignSelf: 'center',
  },
  icon1: {
    position:"absolute",
    left:-25,
    top:26,
  },
  icon2: {
    position:"absolute",
    left:-25,
    top:96,
  },
  icon3: {
    position:"absolute",
    left:-25,
    top:166,
  },
  icon4: {
    position:"absolute",
    left:-25,
    top:236,
  },
  icon5: {
    position:"absolute",
    left:-25,
    top:306,
  },
});

export default UserProfile;
