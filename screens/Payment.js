import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import img1 from '../img/img4.png'; 

const Payment = ({ navigation }) =>
 {
    
      const handlePress = () => {
        navigation.navigate('Paymentstripe'); 
      };
return(
<View style={styles.container}>
   
      
        <View style={styles.card}>
                <Text style={styles.text}>Invoice # </Text>
                <Text style={styles.ttext}> hrs ago</Text> 
                <Text style={styles.btext}>YOU RECEIVED A PAYMENT INVOICE</Text>
                <Text style={styles.bbtext}>Amount :</Text>
                <Text style={styles.ctext}>Order Status : </Text>
                <Text style={styles.dtext}>Order Details </Text>


                <View style={styles.detailview}>                
                <View>
                <Image
                 source={img1} // defaultSource={require('./path/to/placeholder-image.jpg')} Corrected source
                 style={{ margin:10, width: 100, height: 150 }} />
                 </View>
                 <View style={styles.bookinfo}>
                 <Text style={styles.ftext}>Title: </Text>
                 <Text style={styles.ftext}>Author: </Text>
                 <Text style={styles.ftext}>Price: </Text>
                 <Text style={styles.ftext}>For: Sale</Text>
                 </View>
                </View>
                

                <View>
            <TouchableOpacity style={styles.buttonc} onPress={handlePress} >
                   <Text style={styles.buttontext}>Confirm Payment</Text>
                    </TouchableOpacity>
            </View>
            </View>
        

</View>

);
}
export default Payment;

const styles = StyleSheet.create({
    container: {
      position:"absolute",
    flex: 1,   
      backgroundColor: '#FFFFFF', 
    },
    card:{
      position:"absolute",
      marginTop:60,
      height:480,
      left:10,
      width:340,
      borderRadius:20,
      borderWidth:2,
      borderColor: '#000',
     },

 detailview: {
    margin:10,
    borderRadius:10,
    backgroundColor:"#C1BADC",
    height:190,
    borderWidth:1.5,
    borderColor: 'black',
     
  },
  bookinfo:{
    position:"absolute",
    top:20,
    left:115,
    gap:15,
    
  },
  
  text:{
    fontSize:24,
    margin:20,
    fontWeight: 'bold', 
    textDecorationLine: 'underline'
    

  },
  ttext:{
  left:235,
  top:-42,
  },

  btext:{
    color:'red',
    bottom:15,
    left:10,
     fontSize:18,
   

  },
  bbtext:{
    top:15,
    left:10,
     fontSize:20,
   

  },
  ctext:{
    top:15,
    left:10,
     fontSize:20,

  },
  dtext:{
    marginTop:50,
    left:10,
    fontSize:20,
  },
  ftext:{
    fontWeight: 'bold',
    left:5,
    fontSize:16,
  },   

    
    buttontext:{
      fontSize:22,
        color:'white',
        fontWeight:'500',
    },
    buttonc:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#404B7C',
      height:48,
      width:248,
      left:45,
      top:60,
      borderRadius:25,
    },
    
   
    
  });


