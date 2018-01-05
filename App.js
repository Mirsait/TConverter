import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TemperatureInput from './components/TemperatureInput';
import {convertTemperature} from './utils/functions';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {temperature: '0', scale:'C'};

    this.onChangeCelsius = this.onChangeCelsius.bind(this);
    this.onChangeKelvin = this.onChangeKelvin.bind(this);
    this.onChangeFahrenheit = this.onChangeFahrenheit.bind(this);
    this.onChangeReaumur = this.onChangeReaumur.bind(this);
  }

  onChangeCelsius(value) {
    this.setState({temperature: value, scale:'C'});
  }
  onChangeKelvin(value) {
    this.setState({temperature: value, scale:'K'});
  }
  onChangeFahrenheit(value) {
    this.setState({temperature: value, scale:'F'});
  }
  onChangeReaumur(value) {
    this.setState({temperature: value, scale:'R'});
  }

  render() {
    let temperature = this.state.temperature;
    let scale = this.state.scale;
    let temperatures = convertTemperature(temperature, scale);
    
    console.log(temperatures);

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Temperature Converter</Text>
        <Text style={styles.header}>{scale}</Text>

        <TemperatureInput
          label='Celsius'
          value={temperatures.Celsius}
          onValueChange={this.onChangeCelsius}
        />

        <TemperatureInput
          label='Kelvin'
          value={temperatures.Kelvin}
          onValueChange={this.onChangeKelvin}
        />

        <TemperatureInput
          label='Fahrenheit'
          value={temperatures.Fahrenheit}
          onValueChange={this.onChangeFahrenheit}
        />

        <TemperatureInput
          label='Reaumur'
          value={temperatures.Reaumur}
          onValueChange={this.onChangeReaumur}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue'
  },

});
