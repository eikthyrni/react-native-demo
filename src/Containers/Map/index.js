import React, { useState, useRef } from 'react';
import { StyleSheet, View, PermissionsAndroid } from 'react-native';
import ScreenWrapper from '../../Components/ScreenWrapper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { INITIAL_REGION } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    height: '100%',
  }
})

const Map = () => {
  const [mapWidth, setMapWidth] = useState('99%');
  const [margin, setMargin] = useState(1);
  const mapRef = useRef(null);

  const handleMapReady = async () => {
    // Hack for fixing maps bug
    setMargin(0);
    setMapWidth('100%');

    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('Need permission to access location');
    }
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          showsMyLocationButton
          style={[styles.map, { width: mapWidth, marginBottom: margin }]}
          showsCompass={true}
          onMapReady={handleMapReady}
          initialRegion={INITIAL_REGION}
        />
      </View>
    </ScreenWrapper>
  )
}

export default Map;
