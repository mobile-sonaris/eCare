'use strict'

import React, {View, Text, Image, StyleSheet, Dimensions, Animated, TouchableHighlight, ScrollView,} from 'react-native';
import SignButton from 'react-native-button';
import ForgotButton from 'react-native-button'

import {
    MKTextField,
} from 'react-native-material-kit';

import {Actions} from 'react-native-router-flux';
var {
    height: deviceHeight,
    width: deviceWidth,
} = Dimensions.get("window");

var styles = StyleSheet.create({
    container: {
        position: "absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 1,
        width: deviceWidth,
    },
    startButton: {
        backgroundColor: 'rgba(36, 92, 188, 1.0)',
        height: deviceHeight/10,
        justifyContent: 'center',
        width: deviceWidth,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        alignSelf: 'center',  
    },
    textfield: {
        marginTop: deviceHeight/60,
        height: deviceHeight/15,  
    },
    content: {
        marginTop: deviceHeight/5,
        marginLeft: deviceWidth/11,
        marginRight: deviceWidth/11,
        backgroundColor: 'transparent',
    },
    signButton: {
        marginTop: deviceHeight/20,
        height: deviceHeight/13,
        borderRadius: 7,
        backgroundColor: 'rgba(36, 92, 188, 1.0)',
        justifyContent: 'center',
    },
    forgotButton: {
        marginTop: deviceHeight/30,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
});

const EmailField = MKTextField.textfield()
    .withPlaceholder('Email Address')
    .withStyle(styles.textfield)
    .build();

const PasswordField = MKTextField.textfield()
    .withPlaceholder('Password')
    .withPassword(true)
    .withStyle(styles.textfield)
    .build();

export default class extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            offset: new Animated.Value(0)
        };
    }
    
    componentDidMount() {
        Animated.timing(this.state.offset, {
            duration: 1000,
            toValue: 0,   
        }).start();
    }
    
    closeModal() {
        Animated.timing(this.state.offset, {
            duration: 1000,
            toValue: deviceHeight + deviceHeight,
        }).start(Actions.pop);
    }
    
    render(){
        return (
            <Animated.View style={[styles.container, {backgroundColor:"transparent"},
                                  {transform: [{translateY: this.state.offset}]}]}>
                <Image source={require('./img/sign_bg.png')} style={styles.image}>
                    <View style={styles.content}>
                        <EmailField/>
                        <PasswordField/>
                        <SignButton containerStyle={styles.signButton} style={{color: 'white'}} onPress={Actions.request}>
                            Sign In
                        </SignButton>
                        <ForgotButton containerStyle={styles.forgotButton} style={{color: 'rgba(36, 92, 188, 1.0)'}}>
                            Forgot your password?
                        </ForgotButton>
                    </View>
                </Image>
                <TouchableHighlight style={styles.startButton} onPress={Actions.register} underlayColor={'rgba(36, 92, 188, 0.8)'}><View><Text style={styles.buttonText}>I DONT HAVE AN ACCOUNT</Text></View></TouchableHighlight>
            </Animated.View>
        );
    }
}