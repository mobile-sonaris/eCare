'use strict';

import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native'

import Introduction from './components/Introduction';
import Register from './components/Register'
import Sign from './components/Sign'
import Request from './components/Request'
import TabView from './components/TabView'
import NavigationDrawer from './components/NavigationDrawer'


import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? "red" :"black"}}>{this.props.title}</Text>
        );
    }
}

class Right extends React.Component {
    render(){
        return <Text style={{
        width: 80,
        height: 37,
        position: "absolute",
        bottom: 4,
        right: 2,
        padding: 8,
    }}>Right</Text>
    }
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:"transparent",justifyContent: "center",
        alignItems: "center",}

});

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

export default class Entry extends React.Component {
    render() {
        return <Router createReducer={reducerCreate}>
            <Scene key="modal" component={Modal} >
                <Scene key="root" hideNavBar={true}>
                    <Scene key="introduction" component={Introduction} title="Launch" initial={true} />
                </Scene>
                <Scene key="sign" component={Sign} hideNavBar={true}>
                    <Scene key="request" component={Request} title="Request a Visit"/>
                </Scene>
                <Scene key="register" component={Register}/>
            </Scene>
        </Router>;
    }
}
