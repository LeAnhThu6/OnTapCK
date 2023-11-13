import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Screen02 = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const addNew = async () => {
    const newC = { name, description };
    //put data to https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter with
    //method POST
    await fetch("https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newC),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson", responseJson);
      })
      .catch((error) => {
        console.log("error", error);
      });

    //navigate to Screen03
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          height: 50,
          top: 30,
          left: 30,
          position: "absolute",
          fontSize: 30,
          fontWeight: 500,
        }}
        onPress={() => {
          goBack();
        }}
      >
        Back
      </Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        placeholder="Enter name"
        style={{
          borderWidth: 1,
          borderColor: "red",
          width: 200,
          height: 50,
          borderRadius: 10,
          padding: 10,
          margin: 10,
        }}
      ></TextInput>
      <TextInput
        onChangeText={(text) => setDescription(text)}
        placeholder="Enter"
        style={{
          borderWidth: 1,
          borderColor: "red",
          width: 200,
          height: 50,
          borderRadius: 10,
          padding: 10,
          margin: 10,
        }}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          addNew(), navigate("Screen03");
        }}
      >
        <Text
          style={{
            borderWidth: 1,
            borderColor: "red",
            width: 200,
            height: 50,
            borderRadius: 10,
            padding: 10,
            margin: 10,
            textAlign: "center",
            backgroundColor: "red",
            color: "white",
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen02;

const styles = StyleSheet.create({});
