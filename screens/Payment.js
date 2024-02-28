import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import img1 from '../img/img4.png'; 

const Payment = ({ navigation }) =>
 {
    const handleBack = () => {
        navigation.navigate("Homescreen");
      };
      const handlePress = () => {
        navigation.navigate('Homescreen'); 
      };
return(
<View style={styles.container}>
      <View style={styles.titlec}>
      <Text style={styles.title}>Payment</Text> 
      </View>
      <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={handleBack} >
          <Icon name="arrow-back" size={34} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
                <Text style={styles.text}>Invoice # </Text>
                <Text style={styles.ttext}> hrs ago</Text> 
                <Text style={styles.btext}>You received a payment invoice of</Text>
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
      marginTop:130,
      height:400,
      left:30,
      width:300,
      borderRadius:20,
      borderWidth:2,
      borderColor: '#000',
     },

 detailview: {
    margin:10,
    borderRadius:10,
    backgroundColor:"#C1BADC",
    height:170,
      borderWidth:0,
      borderColor: '#fff',
     
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
    top:-15,
    left:10,
     fontSize:18,
   

  },
  bbtext:{
    top:-15,
    left:10,
     fontSize:18,
   

  },
  ctext:{
    top:-15,
    left:10,
     fontSize:18,

  },
  dtext:{
    marginTop:10,
    left:10,
    fontSize:20,
  },
  ftext:{
    fontWeight: 'bold',
    left:5,
    fontSize:16,
  },   

    backButtonContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
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
      left:28,
      top:19,
      borderRadius:25,
    },
    
    titlec:{
      position:"absolute",
      top:35,
      left:120,
    },

    title: {
      fontSize: 34,
      color: 'black',
      fontWeight: 'bold',
  
    },
    
  });


