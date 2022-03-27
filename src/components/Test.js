import React from 'react';
import { View, StyleSheet } from 'react-native';

const Test = () => {
    return (
        <View style={styles.mainView}>
            <View style={{
                flex: 2,
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 2,
                    backgroundColor: 'dodgerblue',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'gold'
                    }} />
                    <View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'gold'
                    }} />
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'gold'
                    }} />
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: 'red',
                    justifyContent: 'flex-end'
                }}>
                    <View style={{ flex: 4 }} />
                    <View style={{ flex: 1, backgroundColor: 'gold' }} />
                </View>
            </View>

            <View style={{
                flex: 1,
                flexDirection: 'row'
            }}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'skyblue'
                }} />
                <View style={{
                    flex: 1,
                    backgroundColor: 'skyblue'
                }}>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'skyblue'
                    }} />
                    <View style={{
                        flex: 1,
                        backgroundColor: 'gold'
                    }} />
                    <View style={{
                        flex: 1,
                        backgroundColor: 'skyblue'
                    }} />
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: 'skyblue'
                }} />
            </View>

        </View>
    );
}

export default Test;

const styles = StyleSheet.create({
    mainView: { flex: 1 },
    bottomThirdViews: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
});