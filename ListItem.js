import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from './MyButton';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log("asndaksaj")
    }
    map() {
        this.props.navigation.navigate("Map", { long: this.props.item.long, lati: this.props.item.lati })
    }

    render() {
        console.log(this.props.item)
        var d = this.props.item.total - this.props.item.bikes
        var n = this.props.item.total - d
        return (
            <View style={styles.container}>
                <Text style={styles.text, { backgroundColor: "#fdd835", width: "auto", margin: 5, padding: 4, borderRadius: 8 }}>{this.props.item.name} </Text>
                <View style={styles.view}>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text style={styles.text}>latitude: {this.props.item.lati}</Text>
                        <Text style={styles.text}>longitude: {this.props.item.long}</Text>
                        <Text style={styles.text}>razem stacji: {this.props.item.total}</Text>
                    </View>
                    <View style={{ flex: 0.7, flexDirection: "column", backgroundColor: "blue", margin: 5 }}>
                        <View style={{ flex: 1 }}><Text>{this.props.item.available == "In Service" ? "NIEDOSTĘPNE" : "DOSTĘPNE"}</Text></View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: d, backgroundColor: "green" }}><Text>D</Text></View>
                            <View style={{ flex: n, backgroundColor: "red" }}><Text>N</Text></View>
                        </View>
                    </View>
                </View>
                <MyButton name="Go to map" activ={true} func={() => this.props.nav.navigate("Map", { long: this.props.item.long, lati: this.props.item.lati, name: this.props.item.name })} />
            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        flexDirection: "column",
        margin: 10,
        alignItems: "flex-start"
    },
    view: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row'
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

    },
    text: {
        color: "white",
        flex: 1
    }
})
export default ListItem;
