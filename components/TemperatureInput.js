import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

export default class TemperatureInput extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text){
    this.props.onValueChange(text);
  }

  render() {
    let label = this.props.label;
    let value = this.props.value;

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{label}</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.text}
          value={value}
          onChangeText={text => this.handleChange(text)}/>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    width: "100%",
  },
  paragraph: {
    marginTop: 24,
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#34495e',
  },
  text:{
    fontSize: 24,
    padding: 5,
    textAlign: 'right',
    width: "80%",
  }
});
