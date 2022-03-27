import React from 'react';
import { StyleSheet, Text } from "react-native";

const FontText = ({style, children, props}) => (
    <Text style={{...styles.text, ...style}} {...props}>
        {children}
    </Text>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'comfortaa',
    }
});

export default FontText;