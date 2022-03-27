import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from '../assets/Constants';
import CustomHeaderButton from '../components/CustomHeaderButton';
import FontText from "../components/FontText";
import LocationPreview from "../components/LocationPreview";
import ScreenView from "../components/ScreenView";
import { remove } from '../store/actions';
import { REDUX_MODULE_NAME } from "../store/constants";

const PlaceDetails = ({navigation, route}) => {
    const id = route.params.id;
    const elem = useSelector(state => (state?.[REDUX_MODULE_NAME]?.places ?? []).find(el => el.id === id));
    if (!elem) return (
            <ScreenView>
                <FontText>Removed</FontText>
            </ScreenView>
        );
    const location = {latitude: elem?.lat, longitude: elem?.lng};
    const getOnMap = () => {
        navigation.navigate('map', {readOnly: true, location, title: elem?.title})
    }
    return (
        <ScreenView style={styles.page}>
            <View style={styles.locationContainer}>
                <FontText>{elem.address}</FontText>
                <LocationPreview 
                    style={styles.previewContainer} 
                    location={location} 
                    onPress={getOnMap}
                >
                    <FontText>No location selected</FontText>
                </LocationPreview>
            </View>
        </ScreenView>
    )
}

export const RemovePlaceButton = ({onPress, id,...props}) => {
    const dispatch = useDispatch();
    const press = () => {
        dispatch(remove(id));
        setTimeout(() => onPress(), 150)
    }
    return (
        <CustomHeaderButton {...props} title='Delete place' onPress={press}>
            <Ionicons name='trash-bin'
                      size={30} 
                      color={Platform.OS  === 'android' ? COLORS.color3 : COLORS.main}/>
        </CustomHeaderButton>
    )
}

export const DetailsOptions = ({ route, navigation }) => {
    const id = route?.params?.id;
    const title = route?.params?.title;

    return {
        headerRight: (props) => (
            <RemovePlaceButton {...props} id={id} onPress={() => navigation.navigate({name: 'list'})}/>
        ),
        
        headerTitle: title
  }
}


const styles = StyleSheet.create({
    page: {
        justifyContent: 'flex-start',
    },
    previewContainer: {
        height: 200,
        margin: 10,
        width: 100,
        justifyContent: 'center'
    },
    locationContainer: {
        elevation: 20,
        shadowColor: COLORS.main,
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.2,
        backgroundColor: COLORS.color3,
        shadowRadius: 5,
        paddingHorizontal: 2,
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: COLORS.main
    }
});

export default PlaceDetails;