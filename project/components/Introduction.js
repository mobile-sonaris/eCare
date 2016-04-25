'use strict'

import React, {View, StyleSheet, Text,Image, Dimensions,TouchableHighlight,} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

var {
    height: deviceHeight,
    width: deviceWidth,
} = Dimensions.get("window");

const styles = StyleSheet.create({
    wrapper: {
        
    },
    slide: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    image: {
        flex: 1,
        width: deviceWidth,
    },
    startButton: {
        backgroundColor: 'rgba(36, 92, 188, 1.0)',
        height: deviceHeight/10,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        alignSelf: 'center',
    },

});

class Launch extends React.Component {
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false} loop={false} showsPagination={false}>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('./img/1.png')}>
                    </Image>
                    <TouchableHighlight style={styles.startButton} onPress={Actions.register} underlayColor={'rgba(36, 92, 188, 0.8)'}><View><Text style={styles.buttonText}>GET STARTED</Text></View></TouchableHighlight>
                </View>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('./img/2.png')}>
                    </Image>
                    <TouchableHighlight style={styles.startButton} onPress={Actions.register} underlayColor={'rgba(36, 92, 188, 0.8)'}><View><Text style={styles.buttonText}>GET STARTED</Text></View></TouchableHighlight>
                </View>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('./img/3.png')}>
                    </Image>
                    <TouchableHighlight style={styles.startButton} onPress={Actions.register} underlayColor={'rgba(36, 92, 188, 0.8)'}><View><Text style={styles.buttonText}>GET STARTED</Text></View></TouchableHighlight>
                </View>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('./img/4.png')}>
                    </Image>
                    <TouchableHighlight style={styles.startButton} onPress={Actions.register} underlayColor={'rgba(36, 92, 188, 0.8)'}><View><Text style={styles.buttonText}>GET STARTED</Text></View></TouchableHighlight>
                </View>
            </Swiper>
        );
    };
}

module.exports = Launch;