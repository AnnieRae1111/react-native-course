import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

//deine your reducer function outside of the component
const reducer = (state, action) => {
  //state === {red:number, green:number, blue:number}
  //action === {type 'change_red' || 'change_green' ||'change_blue, payload:15 || -15}
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    //don't do anything just return the existing state object
    //never going to change the state values directly

    //... make a new ojbect with the existing properties and copy and paste into new object and add the new action.amount
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};
//always need to make sure you are returning something from the reducer/ from each switch case or it will give an undefined error

const SquareScreenTwo = () => {
  //using a reducer for this instead
  //see SquareScreen original file for backup of how to do it with out a reducer

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state; //destructuring from the stat object in the reducer above
  //argument one is a function, argument two is the inital state
  //dispatch runs the reducer
  //dispatch(actionObject)

  const COLOR_INCREMENT = 15;
  //true constant value that is not a prop
  //sign to other engineers that this is a special variable

  //helper function to make sure the color doesn't go above 255 and below 0

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_red', paylouad: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${blue},${green})`,
          //will initally be black color as useState for all is set to 0
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreenTwo;
