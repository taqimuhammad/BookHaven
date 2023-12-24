import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const data = [
    {key:'1', value:'Fiction'},
    {key:'2', value:'Narrative'},
    {key:'3', value:'Mystery'},
    {key:'4', value:'Fantasy'},
    {key:'5', value:'Novel'},
    {key:'6', value:'Romance Novel'},
    {key:'7', value:'Non-fiction'},
    {key:'8', value:'Thriller'},
    {key:'9', value:'Horror'},
    {key:'10', value:'History'},
    {key:'11', value:'Philosophy'},
    {key:'12', value:'Satire'},
    {key:'13', value:'Fairy Tale'},
    {key:'14', value:'Adventure Fiction'},
    {key:'15', value:'Autobiography'},
    {key:'16', value:'Comedy'},
];

const MultiSelect = () => {
    const [selected,setSelected] = React.useState([]);

    return (
        <View style={styles.container}>
            <MultipleSelectList
            setSelected={(val) => setSelected(val)}
            data={data} 


            />
        </View>
    );
}

const styles = StyleSheet.create({
    // container:{
    //     width:300,
    //     height:45,
    //     margin:20,
    // }

});

export default MultiSelect;
