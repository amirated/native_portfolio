import React, { Component } from "react";
import { Image, Text, View, Button, Picker } from "react-native";
import { styles } from "../utils/styles";
import SomeCustomComponent from "./SomeCustomComponent";

class App extends Component {
  _onButtonPress() {
    //do nothing
  }

  render() {
    return (
      <View>
        <SomeCustomComponent />
      </View>
    );
  }
}

export default App;
