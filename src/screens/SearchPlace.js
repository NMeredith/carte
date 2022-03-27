import React, { useState } from 'react';
import { TouchableOpacity, Text, View, SafeAreaView } from 'react-native';
import PlacesSearchBar from '../../components/placesSearchBar';

import styles from './dashboard-styles';

export default function SearchPlace(props) {

    const [origin, setOrigin] = useState();

    const [destination, setDestination] = useState();

    const [locationDestination, setLocationDestination] = useState();

    const onChangeOrigin = (places) => {
        setOrigin(places)
    }

    const onChangeDestination = (places) => {
        setDestination(places)
    }

    const onChangeLocationDestination = (places) => {
        setLocationDestination(places)
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.searchContainer}>

                <Text style={styles.searchText}>Use Current Location</Text>

                <View style={styles.searchBarContainer}>

                    <PlacesSearchBar placeholder="Search Here for Destination" onChange={onChangeLocationDestination} />

                </View>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('map', { locationDestination: locationDestination })}>

                        <Text style={styles.buttonText}>Go!</Text>

                    </TouchableOpacity>

                </View>

            </View>

            <View style={styles.searchContainer}>

                <Text style={styles.searchText}>Enter Two Points</Text>

                <View style={styles.searchBarContainer}>

                    <PlacesSearchBar placeholder="Enter Origin Here" onChange={onChangeOrigin} />

                    <PlacesSearchBar placeholder="Enter Destination Here" onChange={onChangeDestination} />

                </View>

                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('map', { origin: origin, destination: destination })}>

                        <Text style={styles.buttonText}>Go!</Text>

                    </TouchableOpacity>

                </View>

            </View>

        </SafeAreaView>
    );
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
