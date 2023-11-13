import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect } from "react";

const Screen01 = (props) => {
  const { navigation } = props;
  const { navigate, goBack } = navigation;

  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [data, setData] = React.useState([]);
  const login = () => {
    const user = data.find(
      (item) => item.name === name && item.password === password
    );
    if (user) {
      navigate("Screen02");
    } else {
      Alert.alert("Login failed");
    }
  };

  useEffect(() => {
    fetch("https://654efe92358230d8f0ccf0fb.mockapi.io/Login/Login")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
        style={{ width: 300, height: 60 }}
        placeholderTextColor={"#000000"}
      ></TextInput>
      <TextInput
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        style={{ width: 300, height: 60 }}
        placeholderTextColor={"#000000"}
      ></TextInput>
      <TouchableOpacity
        style={{
          height: 100,
          width: 150,
          backgroundColor: "#00ff00",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => login()}
      >
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen01;

const styles = StyleSheet.create({});
