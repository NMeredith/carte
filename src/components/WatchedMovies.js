import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import MovieListItem from './MovieListItem';
import {Layout, List, Spinner} from "@ui-kitten/components";
import {mapStateToProps} from "../helpers/favActionHelpers";
import {getMovieByID} from "../api/TheMovieDataBase";

const WatchedMovies = ({ navigation, favMovies }) => {
    const [favMoviesList, setFavMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigateToObjectDetails = async(movieDetails) => {
        navigation.navigate("ViewMovieDetail", {movieDetails});
    };

    const amIaFavMovie = (MovieID) => {
        return (favMovies.findIndex(i => i === MovieID) !== -1);
    };

    useEffect(() => {
        (async () => {
            await refreshObjects();
        })();
    }, [favMovies]);

    const requestMovieByID = async(id) => {
        try {
            let response = await getMovieByID({"movie_id": id});
            if (response.data !== undefined)
                await setFavMoviesList(favMoviesList => [...favMoviesList, response.data]);
        } catch(error) {
            console.log(error.message);
        }
    }

    const refreshObjects = async () => {
        await setIsLoading(true);
        await setFavMoviesList([]);
        try {
            for (const id of favMovies) {
                await requestMovieByID(id);
            };
        } catch (error) {
            console.log(error.message);
        }
        await setIsLoading(false);
    };

    const renderItem = ({item}) => {
        return (<MovieListItem movieDetails={item} onClick={navigateToObjectDetails} isFav={amIaFavMovie(item.id)}/>);
    }

    return (
        <Layout style={styles.container}>
            {isLoading ?
                <Spinner/>:
            <List
                data={favMoviesList}
                extraData={favMovies}
                renderItem={renderItem}
            />
            }
        </Layout>
    );
};


export default connect(mapStateToProps)(WatchedMovies);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        marginTop: 16,
    },
});