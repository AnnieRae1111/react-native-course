import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1' },
    { Age: 20 },
    { name: 'Friend #2' },
    { Age: 27 },
    { name: 'Friend #3' },
    { Age: 29 },
    { name: 'Friend #4' },
    { Age: 35 },
    { name: 'Friend #5' },
    { Age: 42 },
    { name: 'Friend #6' },
    { Age: 20 },
    { name: 'Friend #7' },
    { Age: 59 },
    { name: 'Friend #8' },
    { Age: 20 },
    { name: 'Friend #9' },
    { Age: 20 },
  ];

  return (
    <FlatList
      // horizontal
      //horizontal = tells the items to scroll horizontally
      showsHorizontalScrollIndicator={false}
      //removes the scroll bar
      keyExtractor={(friend) => {
        friend.name;
      }}
      // can also assign a key directly to each piece of data
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.Age}
          </Text>
        );
        // element === {item: {name:'Friend #1}, index:0}
        //pull off the item property by using destructuring instead of using the full object element
        // item === {name:{ 'Friend #1'}}
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
