import { TouchableOpacity,StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const ProfileText = ({ title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
          <Text style={styles.text}>{ title }</Text>
          <AntDesign name="right" size={21} color="black" style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileText

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',
        height:40,
        width:250,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
    },
    text:{
        fontSize:20,
        width:250,
    },
    icon:{
        position:'absolute',
        alignSelf:'flex-end',
        marginLeft:50,
    }
})