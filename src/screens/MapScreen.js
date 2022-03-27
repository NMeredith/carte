import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { COLORS } from "../assets/Constants";
import CustomHeaderButton from "../components/CustomHeaderButton";
import ScreenView from "../components/ScreenView";

const MapScreen = ({navigation, route}) => {
    const {readOnly, location, title='Ici'} = route.params ?? {};
    const [latLong, setLangLong] = React.useState(location);

    const onPick = ({ nativeEvent}) => {
        if (!readOnly) setLangLong(nativeEvent.coordinate);
    }

    React.useEffect(() => {
        navigation.setParams(latLong)
    }, [latLong]);

    const region = {
        latitude: latLong?.latitude ?? 49.10117,
        longitude: latLong?.longitude ?? 6.14133,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
      
    return (
        <ScreenView>
            <MapView style={styles.map} initialRegion={region} onPress={onPick}>
                {latLong &&
                    <Marker
                        coordinate={latLong}
                        title={title}
                    />
                }
            </MapView>
        </ScreenView>
    )
}

const ReturnLocationButton = (props) => {
    const {value} = props;
    const navigation = useNavigation();
    const press = () => navigation.navigate('add', {location: value})
    return (
        <CustomHeaderButton {...props} title='Ajouter Lieu' 
                            onPress={press} >
            <Text style={styles.buttonHeader}>
                Save
            </Text>
        </CustomHeaderButton>
       
    )
}


export const MapOptions = ({ route, navigation }) => {
    console.log(route)
    const {readOnly, title='Choisir un lieu'} = route?.params ?? {};
    return {
        ...(
            readOnly ? 
            {} : 
            {headerRight: (props) => (
                <ReturnLocationButton 
                    {...props} 
                    value={route?.params}
                />
            )}
        ),
        headerTitle: title
  }
}


const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    buttonHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 6,
        color: Platform.OS  === 'android' ? COLORS.color3 : COLORS.main,
    }
});


export default MapScreen;