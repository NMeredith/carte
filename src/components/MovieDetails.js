import React, {useEffect, useState} from 'react';
import {Divider, Layout, List, Text, TopNavigation} from '@ui-kitten/components';
import {SafeAreaView, StyleSheet, View, Image, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {displaySaveObject, mapStateToProps} from "../helpers/favActionHelpers";
import {getMovieCreditsByID} from "../api/TheMovieDataBase";

const MovieDetails = ({favMovies, dispatch, route}) => {
    const [credits, setCredits] = useState({});

    useEffect( () => {
        (async() => {
            let movieCredits = await getMovieCreditsByID({"movie_id": route.params.movieDetails.id});
            await setCredits(movieCredits.data.cast);
        })()
    }, [route])

    const renderItem = ({item}) => {
        return (<Text>{item.name}</Text>);
    }

    const renderCredits = ({item}) => {
        return (
            <Layout>
                <Text>Nom : {item.name}</Text>
                <Text>Personnage joué : {item.character}</Text>
            </Layout>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Layout style={{margin:5, flex:1}}>
                    <Layout>
                        <TopNavigation title={route.params.movieDetails.title} alignment='center'/>
                    </Layout>
                    <Layout>
                        <Layout>
                            <Layout style={{margin:5}}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: `https://image.tmdb.org/t/p/w500/${route.params.movieDetails.poster_path}`,
                                    }}
                                />
                            </Layout>
                            <Layout style={{margin:5}}>
                                {displaySaveObject(route.params.movieDetails.id, dispatch, favMovies)}
                            </Layout>
                            <Layout style={{margin:5}}>
                                <Layout>
                                    <Text category='h2'>
                                        Sorti le :
                                    </Text>
                                    <Text category='h6'>
                                        {route.params.movieDetails.release_date}
                                    </Text>
                                </Layout>
                                <Layout>
                                    <Text category='h2'>
                                        Durée :
                                    </Text>
                                    <Text category='h6'>
                                        {route.params.movieDetails.runtime} minutes
                                    </Text>
                                </Layout>
                                <Layout>
                                    <Text category='h2'>
                                        Résumé :
                                    </Text>
                                    <Text>
                                        {route.params.movieDetails.overview}
                                    </Text>
                                </Layout>
                            </Layout>
                        </Layout>
                    </Layout>
                    <Layout>
                        <Text category='h2'>
                            Genre{route.params.movieDetails.genres.length >= 1 ? 's':''} :
                        </Text>
                        <Layout>
                            <View>
                                <List
                                    data={route.params.movieDetails.genres}
                                    renderItem={renderItem}
                                />
                            </View>
                        </Layout>
                    </Layout>
                    <Layout>
                        <Text category='h2'>
                            Crédits :
                        </Text>
                        <Layout>
                            <View>
                                <List
                                    data={credits}
                                    renderItem={renderCredits}
                                    ItemSeparatorComponent={Divider}
                                />
                            </View>
                        </Layout>
                    </Layout>
                </Layout>
            </ScrollView>
        </SafeAreaView>
    );
};

export default connect(mapStateToProps)(MovieDetails);

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
    tinyLogo: {
        height:128,
        width:128,
    },
});