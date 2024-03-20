import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import CustomInput from "../components/CustomInput";
import colors from "../config/colors";
import CustomButton from "../components/CustomButton";

export default function SignInScreen() {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSignInPressed = () => {
    console.log("Sign in pressed");
  };
  return (
    <View style={styles.root}>
      <Image
        source={require("../assets/LogoWithText.png")}
        style={styles.logo}
      />
      <View style={styles.container}>
        <CustomInput
          placeholder="username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text={"Sign In"} onPress={onSignInPressed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: "40%",
    maxWidth: 300,
    maxHeight: 200,
    position: "absolute",
  },
  container: {
    paddingTop: 350,
    width: "80%",
    alignItems: "center",
  },
});
