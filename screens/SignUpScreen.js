import * as React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Sign Up Screen</Text>
      <Button onPress={() => navigation.navigate("MyTodo")}>
        Go to MyTodo
      </Button>
    </View>
  );
}
