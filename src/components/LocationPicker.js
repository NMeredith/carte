import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import React from "react";
import { ActivityIndicator, Alert, Button, StyleSheet, View } from "react-native";
import { COLORS } from '../assets/Constants';
import FontText from './FontText';
import LocationPreview from './LocationPreview';

const LocationPicker = ({applyLocation}) => {
    const navigation = useNavigation();
    const route = useRoute();
    const [status, requestPermission] = Location.useForegroundPermissions()
    const [waiting, setWaiting] = React.useState(false);

    const [location, setLocation] = React.useState(null);

    React.useEffect(() => {
        if (route?.params?.location) {
            setLocation(route?.params?.location);
            applyLocation(route?.params?.location)
        }
    }, [route?.params?.location]);

    const getLocation = async () => {
        if (!status?.granted) {
            const result = await requestPermission();
            if (!result?.granted) Alert.alert(
                "No access to location",
                "To get location data, you should grant permissions to location",
                [

                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
              return;
        }
        setWaiting(true);
        let location = await Location.getCurrentPositionAsync({});
        setWaiting(false);
        setLocation(location?.coords);
        applyLocation(location?.coords)
    }

    const getOnMap = () => {
        navigation.navigate('map')
    }

    return (
        <View style={styles.mainContainer}>
            <LocationPreview style={styles.previewContainer} location={location} onPress={getOnMap}>
                {waiting ?
                    <ActivityIndicator size="small" color={COLORS.main}/> : 
                    <FontText>No location selected</FontText>
                }
            </LocationPreview>
            <View style={styles.buttonsContainer}>
                <Button title={'Get location'} 
                        onPress={getLocation} 
                        style={styles.button} 
                        disabled={waiting}
                        color={COLORS.main}/>
                <Button title={'Select on the map'} 
                        onPress={getOnMap} 
                        style={styles.button}
                        disabled={waiting}
                        color={COLORS.main}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        margin: 10,
        borderWidth: 2,
        borderColor: COLORS.accent,
        borderStyle: 'solid',
        padding: 10,
        borderRadius: 4,
        alignItems: 'center'

    },
    previewContainer: {
        height: 200,
        justifyContent: 'center'
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'stretch'
    }
});

export default LocationPicker