import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, Platform, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from '../assets/Constants';
import CustomHeaderButton from "../components/CustomHeaderButton";
import DisplayPlace from "../components/DisplayPlace";
import ScreenView from "../components/ScreenView";
import { retrievePlaces } from '../store/actions';
import { REDUX_MODULE_NAME } from "../store/constants";

const ListPlacesScreen = ({}) => {
    const places = useSelector(state => state?.[REDUX_MODULE_NAME]?.places);
    const dispatch = useDispatch();

    React.useEffect(() => {
		dispatch(retrievePlaces())
	}, []);

    return (
        <ScreenView>
            {places.length === 0 ?
                <Text>Your places list is empty</Text>
                :
                <FlatList data={places} 
                          renderItem={(props) => <DisplayPlace {...props}/>} 
                          style={{flex: 1, width: '100%'}}
                          keyExtractor={e => e.id}/>
            }
        </ScreenView>
    )
}

const AddPlaceButton = (props) => (
    <CustomHeaderButton {...props} title='Add place'>
        <Ionicons name='add-circle-outline' size={30} 
                  color={Platform.OS  === 'android' ? COLORS.color3 : COLORS.main}
        />
    </CustomHeaderButton>
    
)


export const ListPlacesOptions = ({ route, navigation }) => {
    return {
        headerRight: (props) => (
            <AddPlaceButton {...props} 
                            onPress={() => navigation.navigate({name: 'add'})} />
        ),
        
        headerTitle: 'My Places'
  }
}

export default ListPlacesScreen;