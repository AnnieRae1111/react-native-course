import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
          //take all elements inside colors array add them to new array , plus the new randomly generated color
        }}
      />
      {/* <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} /> */}
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          //item = a randomly generated color
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
        /* call the function in place of the where the value would go in the inline style */
      />
    </View>
  );
};

// helper function to generate random colors
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  //generates random number between 0 and 255
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
