import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS } from "../assets/Constants";
import FontText from './FontText';

const BG_COLORS = [COLORS.color1, COLORS.color3, COLORS.accent, COLORS.color2]
const DisplayPlace = ({ item, index, separators }) => {
    const navigation = useNavigation();
    const onPress = () => navigation.navigate('details', {id: item.id, title: item.title});
    const colorIndex = index % BG_COLORS.length;
    return( 
        <TouchableOpacity style={{...styles.container, backgroundColor: BG_COLORS?.[colorIndex] ?? BG_COLORS[0]}} 
                          onPress={onPress}>
            <View style={styles.textContainer}>
                <FontText style={styles.textStyle}>{item.title}</FontText>
                <FontText style={styles.textStyleSmall}>{item.address}</FontText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-start",
        flex: 1,
        marginHorizontal: 0,
        marginVertical: 5,
        padding: 5,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.main,
        // opac
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.textColorDark,
    },
    textStyleSmall: {
        fontSize: 14,
        fontWeight: '300',
        color: COLORS.textColorDark,
    }, 
});

export default DisplayPlace;