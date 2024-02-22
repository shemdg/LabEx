import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet, Image } from 'react-native';

export default class App extends Component {
  state = {
    switchValue: false
  }

  render() {
    const lightBlack = '#666666';
    const lightYellow = '#FFFF99';
    const containerStyle = {
      ...styles.container,
      backgroundColor: this.state.switchValue ? lightYellow : lightBlack,
    };

    const imageSource = this.state.switchValue ? require('./on.png') : require('./off.png');
    const textToShow = this.state.switchValue ? 'ON' : 'OFF';

    return (
      <View style={containerStyle}>
      <Text style={[styles.textStyle, { color: this.state.switchValue ? 'black' : 'white' }]}>AMC MP1</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={(value) => this.setState({ switchValue: value })}
        />
        <Image source={imageSource} style={styles.image} />
        <Text style={[styles.textStyle, { color: this.state.switchValue ? 'black' : 'white' }]}>{textToShow}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 10,
    marginBottom: 25,
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    marginTop: 25,
    marginBottom: 25,
    width: 150,
    height: 250,
  }
});
