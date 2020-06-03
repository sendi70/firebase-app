import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase'
import MyButton from './components/MyButton'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'register'
        };
    }

    login = async () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.name, this.state.pass)
            .then(() => this.navigation.navigate('s1'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    register = async () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.name, this.state.pass)
            .then(() => this.props.navigation.navigate('s1'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    change = async () => {
        this.state.status === "register" ?
            this.setState({ status: "login" }) :
            this.setState({ status: "register" })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view2}>
                    <Text style={{ color: 'white', margin: 10 }}>Email</Text>
                    <TextInput onChangeText={(text) => this.setState({ name: text })} style={styles.input} />
                    <Text style={{ color: 'white', margin: 10 }}>Password</Text>
                    <TextInput onChangeText={(text) => this.setState({ pass: text })} style={styles.input} />
                    <View>
                        {this.state.status === "register" ?
                            <View>
                                <MyButton name="Register" activ={true} func={this.register} style={{}} />
                                <MyButton name="Masz już konto? Zaloguj się!" activ={true} func={this.change} style={{}} />
                                <Text>{this.state.errorMessage}</Text>
                            </View>
                            :
                            <View>
                                <MyButton name="Login" activ={true} func={this.login} style={{}} />
                                <MyButton name="Nie masz konta? Zarejstruj się!" activ={true} func={this.change} style={{}} />
                                <Text>{this.state.errorMessage}</Text>
                            </View>
                        }
                    </View>
                </View>
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
        backgroundColor: "#fdd835",
        alignItems: "center",
        justifyContent: "center",

    },
    view2: {
        flex: 0.33,
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
export default Login;
