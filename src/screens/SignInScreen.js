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
  const icon = require("../assets/google-icon.png");

  const onSignInPressed = () => {
    console.log("Sign in pressed");
  };

  const onSignInWithGoogle = () => {
    console.log("Sign in google pressed");
  };

  const onForgotPassword = () => {
    console.log("Forgot password");
  };

  const onSignup = () => {
    console.log("signup");
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
        <CustomButton
          text={"Sign In"}
          onPress={onSignInPressed}
          type={"primary"}
        />
        <CustomButton
          text={" Sign In With Google"}
          icon={icon}
          onPress={onSignInWithGoogle}
          type={"primary"}
        />
        <CustomButton
          text={"Forgot Password?"}
          onPress={onForgotPassword}
          type={"secondary"}
        />
        <CustomButton
          text={"Don't have an account? Sign up!"}
          onPress={onSignup}
          type={"secondary"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: "40%",
    maxWidth: 300,
    maxHeight: 200,
    position: "absolute",
    marginTop: 100,
  },
  container: {
    width: "80%",
    alignItems: "center",
    marginTop: 350,
  },
});
