import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView from 'react-native-maps';

export default function Home() {
	return(
		<View style={{flex: 1, alignItems: 'center'}}>
      <Text>Aqui</Text>
			 <MapView
        style={styles.map}
				initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
  map: {
      ...StyleSheet.absoluteFillObject,
      height: Dimensions.get("window").height,
  },
});