import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 24.8934511,
    longitude: 67.0044493,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [markerPosition, setMarkerPosition] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const userLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      setMarkerPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      console.log('Current Location:', location.coords.latitude, location.coords.longitude); // Log current location
    } catch (error) {
      console.error('Error getting user location: ', error);
    }
  };

  const searchLocation = async () => {
    if (!searchInput) return;
    try {
      let geocode = await Location.geocodeAsync(searchInput);
      if (geocode && geocode.length > 0) {
        // Get the first result
        let { latitude, longitude } = geocode[0];
        setMapRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setMarkerPosition({ latitude, longitude });

        console.log('Searched Location:', latitude, longitude); // Log searched location
      } else {
        console.log('No results found for the provided address');
      }
    } catch (error) {
      console.error('Error searching location: ', error);
    }
  };

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
    console.log('Marker position:', latitude, longitude); // Log marker position
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <Icon name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Location"
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
        />
        <Button
          title="Search"
          onPress={searchLocation}
          color="#404B7C"
        />
      </View>

      <MapView
        style={styles.map}
        region={mapRegion}
        onPress={handleMapPress} // Handle map press event
      >
        {markerPosition && (
          <Marker coordinate={markerPosition} title="Selected Location" />
        )}
      </MapView>

      <Button
        title="SET CURRENT LOCATION"
        onPress={userLocation}
        color="#404B7C"
        style={styles.button1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#fff', // Background color of the container
  },
  map: {
    flex: 1,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
   
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    height: 40,
    paddingLeft: 30, // Add padding to accommodate the icon
  },
  searchIcon: {
    position: 'absolute',
    left: 10,
  },
});
