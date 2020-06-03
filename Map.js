import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: this.props.navigation.state.params.lati,
          longitude: this.props.navigation.state.params.long,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: this.props.navigation.state.params.lati,
            longitude: this.props.navigation.state.params.long,
          }}
          title={this.props.navigation.state.params.name}
          description={"opis"}
        />
      </MapView>
    );
  }
}

export default Map;
