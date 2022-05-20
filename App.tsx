import React from "react";
import { 
  View, 
  StyleSheet, 
  Dimensions, 
} from "react-native";
import MapView from 'react-native-maps';

export default function Home() {
//teste
	return(
		<View style={{flex: 1, alignItems: 'center'}}>
			 <MapView
        style={styles.map}
				initialRegion={{
          latitude: -9.648139,
          longitude: -35.717239,
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