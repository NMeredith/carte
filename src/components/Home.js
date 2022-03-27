import React, {useState} from 'react';
import {Layout, List, Text, TopNavigation, Icon, Divider, Button, Spinner} from '@ui-kitten/components';
import {StyleSheet, SafeAreaView, TextInput} from 'react-native';
import MovieListItem from "./MovieListItem";
import {connect} from 'react-redux';
import {mapStateToProps} from "../helpers/favActionHelpers";
import {getMovieByID, getMoviesByPopularity, getMoviesBySearch} from "../api/TheMovieDataBase";


const Home = ({navigation, favMovies}) => {
    const [listMovies, setListMovies] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(true);
    const [nextPage, setNextPage] = useState(1);
    const [isMoreResults, setIsMoreResults] = useState(false);
    const [movieName, setMovieName] = useState("");
    const [lastApiCall, setLastApiCall] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const SearchIcon = (props) => (
        <Icon {...props} name='search-outline' />
    );

    const requestMovie = async(apiToCall, ...arr) => {
        try {
            let response = await apiToCall(...arr);

            if (response !== undefined) {
                await setIsRefreshing(true);
                if (response.data.page < response.data.total_pages) {
                    await setIsMoreResults(true);
                    await setNextPage(response.data.page + 1);
                } else {
                    await setIsMoreResults(false);
                }

                await setListMovies(listMovies => [...listMovies, ...response.data.results]);
            }
            await setIsRefreshing(false);
        } catch (error) {
            console.log("test");
        }
    }

    const requestMovieByName = async() => {
        await requestMovie(getMoviesBySearch, {"page":nextPage}, {"query":movieName});
    }

    const requestPopularMovies = async() => {
        await requestMovie(getMoviesByPopularity, {"page":nextPage});
    }

    const loadMoreMovies = async() => {
        if (isMoreResults) {
            switch(lastApiCall) {
                case "name":
                    await requestMovieByName();
                    break;
                case "popular":
                    await requestPopularMovies();
                    break;
            }
        }
    }

    const resetAndRequestPopularMovies = async () => {
        setLastApiCall("popular");
        await setIsLoading(true);
        await setListMovies([]);
        await setNextPage(1);

        await requestPopularMovies();
        setIsLoading(false);
    }

    const resetAndRequestMovieByName = async () => {
        setLastApiCall("name");
        await setIsLoading(true);
        await setListMovies([]);
        await setNextPage(1);

        await requestMovieByName();
        setIsLoading(false);
    }

    const navigateToObjectDetails = async(movieDetails) => {
        navigation.navigate("ViewMovieDetail", {movieDetails});
    };

    const amIaFavObject = (objectID) => {
        return (favMovies.findIndex(i => i === objectID) !== -1);
    };

    const renderItem = ({item}) => {
        return (<MovieListItem movieDetails={item} onClick={navigateToObjectDetails} isFav={amIaFavObject(item.id)} />);
    }

    return (
        <SafeAreaView style={styles.container}>
            <TopNavigation title='Rechercher des films' alignment='center'/>
            <Layout>
                <Layout style={styles.searchContainer}>
                    <TextInput
                        placeholder="James Bond"
                        onChangeText={(text) => setMovieName(text)}
                        onSubmitEditing={resetAndRequestMovieByName}
                    />
                </Layout>
                <Button
                    accessoryLeft={SearchIcon}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',}}
                    name={'map-marker-alt'}
                    onPress={resetAndRequestMovieByName}
                >
                    Rechercher
                </Button>
            </Layout>
            <Button
                onPress={resetAndRequestPopularMovies}
            >
                Films populaires
            </Button>
            {isLoading ?
                <Spinner/>:
                <List
                    data={listMovies}
                    extraData={favMovies}
                    renderItem={renderItem}
                    onEndReached={loadMoreMovies}
                    onEndReachedThreshold={0.5}
                    refreshing={isRefreshing}
                />
            }
        </SafeAreaView>
    );
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        marginTop: 16,
    },
    searchContainer: {
        marginBottom: 16,
    },
    tinyIcon: {
        height:32,
        width:32,
        tintColor:'#32988c'
    },
});