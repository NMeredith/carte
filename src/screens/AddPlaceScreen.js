import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { COLORS } from '../assets/Constants';
import globalStyles from '../assets/styles';
import CustomHeaderButton from "../components/CustomHeaderButton";
import FontText from '../components/FontText';
import LocationPicker from '../components/LocationPicker';
import { addPlace } from '../store/actions';

const AddPlaceScreen = ({navigation}) => {
    const [title, setTitle] = React.useState('');
    const [location , applyLocation] = React.useState(null);
    React.useEffect(() => {
        navigation.setParams({
            name:title,
            lat: location?.latitude,
            lng: location?.longitude,
        })
    }, [title, location]);

    return (
        <ScrollView style={globalStyles.margin8}>
           <View style={styles.titleContainer}>
                <FontText style={{...globalStyles.font24, ...globalStyles.bold, ...styles.text}}>Title</FontText>
                <View style={styles.editTitleView}>
                    <TextInput id='title' 
                                title={'Title'}
                                onChangeText={setTitle}
                                value={title}
                                style={{
                                    ...globalStyles.font24,
                                    ...globalStyles.paddingHorizontal5
                                }}
                                returnKeyType={'next'}
                                placeholder="Enter title"/>
                </View>
           </View>
           <LocationPicker applyLocation={applyLocation} />
        </ScrollView>
    )
}

const SavePlaceButton = ({onPress, value, ...props}) => {
    const dispatch = useDispatch();

    const isDisabled = React.useMemo(() => {
        console.log(value)
        return [value?.name, value?.lat, value?.lng].some(e => !e);
    }, [value]);

    const press = () => {
        if (!isDisabled){
            dispatch(addPlace(value));
            setTimeout(() => onPress(), 150)
        }
    }
    const color = isDisabled ? 'lightgray': (Platform.OS  === 'android' ? COLORS.color3 : COLORS.main)
    return (
        <CustomHeaderButton {...props} title='Save place' onPress={press} disabled={isDisabled}>
            <Ionicons name='save-outline' 
                      size={30} 
                      color={color}/>
        </CustomHeaderButton>
    )
}

export const AddPlaceOptions = ({ route, navigation }) => {
    return {
        headerRight: (props) => (
            <SavePlaceButton {...props} 
                             value={route?.params}
                             onPress={() => navigation.navigate({name: 'list'})} />
        ),
        headerTitle: 'Ajouter un lieu'
  }
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20

    },
    text: {
        color: COLORS.accent
    },
    editTitleView: {
        flex: 1,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.main,
    },
    
})

export default AddPlaceScreen;