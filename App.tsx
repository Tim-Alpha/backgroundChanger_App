/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(this: any): JSX.Element {
  const [randomBg, setRandomBg] = useState('#ffffff');
  const [randomBg1, setRandomBg1] = useState('blue');
  const [randomBg2, setRandomBg2] = useState('pink');
  const [randomBg3, setRandomBg3] = useState('green');
  const [randomBg4, setRandomBg4] = useState('green');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      let newColor = Math.floor(Math.random() * 16);
      color += hexRange[newColor];
      // console.log(newColor);
    }
    return color;
  };
  const newColor = () => {
    setRandomBg(generateColor());
    setRandomBg1(generateColor());
    setRandomBg2(generateColor());
    setRandomBg3(generateColor());
    setRandomBg4(generateColor());
  };

  return (
    <>
      <StatusBar backgroundColor={randomBg} />
      <View style={[styles.container, {backgroundColor: randomBg}]}>
        <View style={[styles.circle, {backgroundColor: randomBg1}]} />
        <View style={[styles.rectangle, {backgroundColor: randomBg2}]} />
        <TouchableOpacity onPress={newColor}>
          <View style={[styles.actionBtn, {backgroundColor: randomBg4}]}>
            <Text style={styles.actionText}>Press Me</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.triangle, {borderBottomColor: randomBg3}]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B40',
    padding: 10,
  },
  actionText: {
    fontSize: 24,
    color: '#fff',
    textTransform: 'uppercase',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  rectangle: {
    width: 100 * 2,
    height: 100,
    backgroundColor: 'red',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
});

export default App;
