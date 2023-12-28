import * as React from 'react';
import {TouchableOpacity,StyleSheet, Text, View} from 'react-native';

const Button = ({ title}) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} activeOpacity={0.8} >
        <Text style={styles.text}>{ title }</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignSelf:'center',
      justifyContent:'center',
      display:'flex',
    },
    button:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#404B7C',
      height:48,
      width:248,
      borderRadius:25,
    },
    text:{
      fontSize:22,
      color:'white',
      fontWeight:'500',
    }
});

export default Button;
