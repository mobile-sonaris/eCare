'use strict'
import React, {View, Image, Text, ScrollView, StyleSheet,} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F00',
        alignItems: 'center',
        justifyContent: 'center',  
    },
});

export default class extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This screen is Request screen</Text>
            </View>
        );
    }
}