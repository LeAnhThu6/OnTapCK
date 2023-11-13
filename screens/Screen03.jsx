import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";

const Screen03 = (props) => {
  const { navigate } = props.navigation;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const getData = async () => {
    await fetch("https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, [data]);

  const deleteItem = async (id) => {
    // delete data[id-1] and setData(data) dung fetch delete

    await fetch(
      `https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter/${id}`,
      {
        method: "DELETE",
      }
    );
  };
  const updateItem = async (id, name, description) => {
    // update data[id-1]
    await fetch(
      `https://654efe92358230d8f0ccf0fb.mockapi.io/Login/filter/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
        }),
      }
    );
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "blue",
        }}
      >
        Screen03
      </Text>
      <Text style={{ flexDirection: "column" }}>
        <TouchableOpacity
          onPress={() => setColorBg("green")}
          style={{
            width: 40,
            height: 30,
            marginRight: 30,
            backgroundColor: "green",
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 30,
            marginRight: 30,
            backgroundColor: "blue",
          }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 40,
            height: 30,
            backgroundColor: "yellow",
          }}
        ></TouchableOpacity>
      </Text>
      <TextInput
        onChangeText={(text) => setFilter(text)}
        placeholder="Find by name"
        multiline={true}
        style={{
          width: 300,
          height: 50,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 10,
          margin: 10,
        }}
      ></TextInput>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => setFilter("Work")}
          style={{
            backgroundColor: "white",
            margin: 10,
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "blue",
              margin: 10,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter("Learn")}
          style={{
            backgroundColor: "white",
            margin: 10,
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "blue",
              margin: 10,
            }}
          >
            Learn
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setFilter("Play")}
          style={{
            backgroundColor: "white",
            margin: 10,
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "blue",
              margin: 10,
            }}
          >
            Play
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data.filter((item) => {
          if (filter == "") return true;
          return item.name.includes(filter);
        })}
        renderItem={
          ({ item }) => (
            // item.id < 5 ? (
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                margin: 3,
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  width: 230,
                  margin: 3,
                  height: 120,
                }}
              >
                <TextInput
                  multiline={true}
                  style={{
                    fontSize: 30,
                    fontWeight: 500,
                    width: 235,
                    height: 100,
                  }}
                  onChangeText={(text) => setNewName(text)}
                  defaultValue={item.name}
                  editable={true}
                ></TextInput>
                <TextInput
                  multiline={true}
                  style={{
                    fontSize: 20,
                  }}
                  onChangeText={(text) => setNewDescription(text)}
                  defaultValue={item.description}
                  editable={true}
                ></TextInput>
              </View>

              <TouchableOpacity
                onPress={() => {
                  deleteItem(item.id);
                  getData();
                }}
                style={{
                  width: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FEE1E1",
                }}
              >
                <Text style={{ fontSize: 20 }}>Xóa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  updateItem(
                    item.id,
                    newName == "" ? item.name : newName,
                    newDescription == "" ? item.description : newDescription
                  );

                  getData();
                }}
                style={{
                  width: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FEF5E1",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <Text style={{ fontSize: 20 }}>Sửa</Text>
              </TouchableOpacity>
            </View>
          )
          // ) : (
          //   <View></View>
          // )
        }
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2CA65D",
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => {
          navigate("Screen02");
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen03;

const styles = StyleSheet.create({});
