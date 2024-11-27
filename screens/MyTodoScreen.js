
import * as React from "react";
import { Text, View, TextInput } from "react-native";
import {
  createStaticNavigation,
  useNavigation
} from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function MyTodoScreen() {
  const navigation = useNavigation();
  const [todoItem, setTodoItem] = React.useState("")

  const [todoList, setTodoList] = React.useState([])

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>My Todo Screen</Text>
      <View
        style={{
          backgroundColor: "lightgray",
          flexDirection: "row",
          marginTop: 40
        }}
      >
        <TextInput
          placeholder="Enter task"
          value={todoItem}
          onChangeText={setTodoItem}
          style={{ flex: 1, padding: 5 }}
        />

        <Button
          onPress={() => {
            if (todoItem !== "")
              setTodoList([...todoList, todoItem]);
            
            setTodoItem("")
          } }
          style={{ width: 150 }}
        >
          ADD
        </Button>
      </View>

      <View style={{ padding: 10 }}>
        <Text> {todoList.length == 0 ? "List is Empty" : `Total ${todoList.length} items`} </Text>
        {todoList.length > 0 && todoList.map((item,index) => <Text key={index} > {item} </Text>)}
      </View>
    </View>
  );
}
