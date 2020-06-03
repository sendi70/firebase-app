import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from "firebase"
import MyButton from './components/MyButton';
import ListItem from './components/ListItem'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dane: [],
            status: ""
        };
        this.stations = this.getFirebase().child("stations_big") // "stations" to nazwa tablicy w obiekcie jsona
        console.log(this.stations)
    }

    componentDidMount() {
        console.log(this.stations)
        var dane = []
        this.stations.on("value", (elements) => {
            // wykonaj foreach na tej kolekcji, wpisując potrzebne dane do tablicy w state

            elements.forEach((item) => {
                dane.push({ available: item.val().statusValue, lati: item.val().latitude, long: item.val().longitude, total: item.val().totalDocks, bikes: item.val().availableBikes, name: item.val().stAddress1 })
            })
            //state
            this.setState({
                dane: dane,
                status: "go"
            })

        })

    }
    getFirebase() {
        return firebase.database().ref()
    }

    logout() {
        firebase.auth()
            .signOut()
            .then(() => alert("logout"))
            .catch((error) => alert(error))
    }

    render() {
        //console.log(this.state.dane)
        return (
            <View style={styles.container}>
                <View style={styles.view}>
                    <MyButton name="MainPage" activ={true} func={() => console.log('xd')} />
                    <MyButton name="Logout" activ={true} func={this.logout} />
                </View>
                {
                    this.state.status == "go" ?
                        <View style={styles.view2}>
                            <FlatList
                                data={this.state.dane}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item }) => <ListItem item={item} nav={this.props.navigation} />} />
                        </View> :
                        <ActivityIndicator size="large" style={styles.view2}></ActivityIndicator>
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        flexDirection: "column",
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        flexDirection: "row",
    },
    view2: {
        flex: 9,
        backgroundColor: "#121212",
        alignContent: 'center',
    },
    input: {
        borderBottomColor: '#4f5b62',
        borderBottomWidth: 3,
        color: 'white',
        margin: 10
    },
    button: {
        backgroundColor: "#fdd835",

    }
})

export default List;
