import React, {useEffect, useState} from 'react';
import {Button, Card, Layout, Text} from '@ui-kitten/components';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {getMovieByID} from "../api/TheMovieDataBase";

const MovieListItem = ({movieDetails, onClick, isFav = false}) => {
    const [moreDetails, setMoreDetails] = useState({});

    useEffect( () => {
        (async() => {
            let moreMovieDetails = await getMovieByID({"movie_id": movieDetails.id});
            setMoreDetails(moreMovieDetails.data);
        })()
    }, [movieDetails])

    const Footer = (props) => (
        <View>
            <View {...props} style={[props.style, styles.footerContainer]}>
            </View>
            <View>
                <Text category='h6'>
                    Sortie le : {moreDetails.release_date}
                </Text>
            </View>
        </View>
    );

    const Header = (props) => (
        <View {...props}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: `https://image.tmdb.org/t/p/w500/${moreDetails.poster_path}`,
                }}
            />
            <Text category='h2'>
                {moreDetails.title}
            </Text>
        </View>
    );

    return (
        <Card style={styles.card} header={Header} footer={Footer} onPress={() => (onClick(moreDetails))}>
            <View style={styles.container}>
                <View style={styles.informationContainer}>
                    <View style={styles.title}>
                        <Text category='h6'>
                            {moreDetails.tagline}
                        </Text>
                    </View>
                </View>
            </View>
        </Card>
    );
};

export default MovieListItem;

const styles = StyleSheet.create({
    informationContainer: {
        flex: 1,
        marginLeft: 0,
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
    statsContainer: {
        flexDirection: 'row',
        marginTop: 12,
    },
    statContainer: {
        flexDirection: 'row',
        marginRight: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    data: {
        fontSize: 16,
    },
    cuisine: {
        fontStyle: 'italic',
    },
    stat: {
        marginLeft: 4,
    },
    card: {
        flex: 1,
        margin: 2,
    },
    tinyLogo: {
        height:64,
        width:64,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footerControl: {
        marginHorizontal: 2,
    },
});