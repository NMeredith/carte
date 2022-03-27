import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform } from 'react-native';
import { COLORS } from '../assets/Constants';
import AddPlaceScreen, { AddPlaceOptions } from '../screens/AddPlaceScreen';
import ListPlacesScreen, { ListPlacesOptions } from '../screens/ListPlacesScreen';
import MapScreen, { MapOptions } from '../screens/MapScreen';
import PlaceDetails, { DetailsOptions } from '../screens/PlaceDetails';

const basicNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS  === 'android' ? COLORS.main : 'white',
    },
    headerTintColor: Platform.OS  === 'android' ? COLORS.color3 : COLORS.main,
    headerTitleStyle: {
      color: Platform.OS  === 'android' ? COLORS.color3 : COLORS.main,
      fontFamily: 'comfortaa',
      fontSize: 26,
      marginBottom: 4,
    },
    headerBackTitleStyle: {
      color: Platform.OS  === 'android' ? COLORS.color3 : COLORS.main,
      fontFamily: 'comfortaa',
      fontSize: 18
    },
}
  
const Stack = createStackNavigator();


export const MainNavigator = ({}) => {
    return (
        <Stack.Navigator screenOptions={basicNavigationOptions} >
          <Stack.Screen name="list" 
                        component={ListPlacesScreen} 
                        options={ListPlacesOptions} />
          <Stack.Screen name="map" 
		  				screenOptions={{presentation: 'modal'}}
						options={MapOptions}
                        component={MapScreen} />
          <Stack.Screen name="details" 
		  				options={DetailsOptions}
                        screenOptions={{presentation: 'modal'}}
                        component={PlaceDetails} />
          <Stack.Screen name="add" 
                        screenOptions={{presentation: 'modal'}}
                        component={AddPlaceScreen} 
                        options={AddPlaceOptions}/>
        </Stack.Navigator>
    );
}