import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => { // Corrected setClicked
  return (
    
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={25}
          color="#404B7C"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search Books, Authors & Genre"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true); // Corrected setClicked
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo 
            name="cross" 
            size={30} 
            color="black" 
            style={{ top:-17,
            right:20
           }} 
            onPress={() => {
              setSearchPhrase("");
              setClicked(false); // Corrected setClicked
            }}
          />
        )}
      </View>

    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        top:80,
      paddingHorizontal:20,
      position:'absolute',
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
    },
    searchBar__unclicked: {
      
      padding: 10,
      flexDirection: "row",
      width: "105%",
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
    },
    searchBar__clicked: {
      padding: 10,
      flexDirection: "row",
      width: "100%",
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
    },
    input: {
      fontSize: 20,
      marginLeft: 12,
      width: "90%",
    },
});

  
