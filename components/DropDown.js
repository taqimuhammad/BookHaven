import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const status =[
  {start: 'Available', code: 'A'},
  {start: 'Unavailable', code: 'U'}
];

const DropDown = () => {
    const [selectedStatus,setStatus] = React.useState('Select Status');
    const [isClicked,setIsClicked] = React.useState(false);
    const [data,setData] = React.useState(status);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={ () => { setIsClicked(!isClicked) }}>
        <Text style={{fontSize:20}}> {selectedStatus} </Text>
        { isClicked ? <FontAwesome name="angle-up" size={26} color="black" /> : <FontAwesome name="angle-down" size={26} color="black" /> }
      </TouchableOpacity>
      {isClicked ?  
        <View style={styles.area}> 
          <FlatList 
            data={data} 
            renderItem={({item, index}) => {
              return(
                <TouchableOpacity style={styles.list} onPress={()=>{
                  setStatus(item.start);
                  setIsClicked(false);
                }}> 
                  <Text style={{fontSize:20}}>{item.start}</Text>
                </TouchableOpacity>
            );
          }}/>
        </View>  : null }
    </View>
  )
}

export default DropDown;

const styles = StyleSheet.create({
    container:{
      marginTop:10,
    },
    dropdown:{
      width:300,
      height:45,
      borderRadius:10,
      borderWidth:1,
      alignSelf:'center',
      borderColor:'black',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingLeft:15,
      paddingRight:15,
    },
    area:{
      width:300,
      height:80,
      borderRadius:10,
      borderColor:'black',
      elevation:5,
      alignSelf:'center',
    },
    list:{
      width:250,
      height:40,
      borderBottomWidth:0.2,
      borderBottomColor:'#8e8e8e',
      alignSelf:'center',
      justifyContent:'center',
    },
});