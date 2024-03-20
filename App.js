import { Text, SafeAreaView, View } from "react-native";
import GameScreen from "./src/screens/GameScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

export default function App() {
  return (
    <View>
      {/* <GameScreen/> */}
      {/* <SignInScreen/> */}
      <SignUpScreen />
    </View>
  );
}
