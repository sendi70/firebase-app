import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={styles.button} onPress={this.props.func}>
                <View>
                    <Text style={{ fontSize: 18, color: '#121212' }}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
MyButton.propTypes = {
    name: PropTypes.string.isRequired,
    activ: PropTypes.bool.isRequired,
    func: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    button: {
        color: '#121212',
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 8,
        backgroundColor: "#fdd835",
        padding: 9
    },

})
export default MyButton;
