import { TextInput, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import Button from '../components/Button';

const UserProfile = ({ navigation }) => {
  const [fullName, onChangeFullName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [RePassword, onChangeReEnterPassword] = React.useState('');

  const handleBack = () => {
    navigation.navigate("Settings");
  };
  const handlep = () => {
    navigation.navigate("Homescreen");
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
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={onChangeFullName}
            placeholder="Enter your full name"
            placeholderTextColor={'black'}
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={onChangeEmail}
            placeholder="Enter your email"
            placeholderTextColor={'black'}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={onChangeNumber}
            placeholder="Enter number"
            placeholderTextColor={'black'}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={onChangePassword}
            placeholder="Enter password"
            placeholderTextColor={'black'}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            value={RePassword}
            onChangeText={onChangeReEnterPassword}
            placeholder="Re enter password"
            placeholderTextColor={'black'}
            secureTextEntry={true}
          />
          <View style={styles.button}>
          <TouchableOpacity style={styles.buttonc} onPress={handlep} >
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
  button:{
    position:'absolute',
    bottom:-75,

  },
  input: {
    fontSize: 20,
    height: 45,
    width: 250,
    margin: 5,
    borderBottomWidth: 1,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    paddingTop: 50,
    margin: 10,
    paddingBottom: 5,
    alignSelf: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 55,
  },
  buttonc:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#404B7C',
    height:48,
    width:248,
    borderRadius:25,
  },
  textc:{
    fontSize:22,
    color:'white',
    fontWeight:'500',
  },
  editicon: {
    position: 'absolute',
    top: 100,
    right: 125,
  },
  topview: {
    flex: 0.85,
    backgroundColor: '#C1BADC',
    height: 200,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 80,
    borderColor: 'white',
    borderWidth: 3,
    position: 'absolute',
    top: 20,
    left: 130,
    justifyContent: 'center',
  },
  username: {
    fontSize: 25,
    top: 150,
    alignSelf: 'center',
  },
  email: {
    fontSize: 20,
    alignSelf: 'center',
    top: 150,
    color: 'grey',
  },
  body: {
    flex: 2,
  },
  insidebody: {
    marginTop: 110,
    alignSelf: 'center',
  }
});

export default UserProfile;
