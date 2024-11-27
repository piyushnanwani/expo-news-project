import * as React from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import {
  useNavigation
} from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={{ flex: 1, padding: 20, paddingHorizontal: 30 }}>
      <Text>Login Screen</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter password"
      />

      <Button onPress={() => navigation.navigate("MyTodo")}>Login </Button>

      <Pressable
        onPress={() => navigation.navigate("SignUp")}
        style={{ padding: 20 }}
      >
        <Text style={{ color: "blue", textAlign: "center" }}>
          {" "}
          Create an Account
        </Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});