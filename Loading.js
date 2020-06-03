import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCVA217f-AG0_xQo7FWpZHbEI-9XJh5R00",
    authDomain: "bobula4ic2.firebaseapp.com",
    databaseURL: "https://bobula4ic2.firebaseio.com",
    projectId: "bobula4ic2",
    storageBucket: "bobula4ic2.appspot.com",
    messagingSenderId: "301666864638",
    appId: "1:301666864638:web:380fe29424e1f9efb284af",
    measurementId: "G-X9SYK7E5WK"
};
firebase.initializeApp(config);
class Loading extends Component {


    constructor(props) {

        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.props.navigation.navigate('List')
            }
            else {
                this.props.navigation.navigate('Login')
            }


        })
    }

    render() {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.props.navigation.navigate('List')
            }
            else {
                this.props.navigation.navigate('Login')
            }


        })
        return (
            <ActivityIndicator size="large"></ActivityIndicator>
        );
    }
}

export default Loading;
