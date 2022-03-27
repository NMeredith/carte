import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../assets/Constants";

const CustomHeaderButton = ({children, style, ...props}) => {
    return (
        <TouchableOpacity {...props}
                            activeOpacity={0.6} 
                            underlayColor={COLORS.main} 
                            style={{style, ...styles.button}}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        borderRadius: 4,
        marginHorizontal: 10,
    }

});

export default CustomHeaderButton;