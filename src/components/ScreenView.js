import React from "react";
import { StyleSheet, View } from "react-native";
const ScreenView = ({children, style={}}) => {
    return (
        <View style={{...styles.main, ...style}}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ScreenView;