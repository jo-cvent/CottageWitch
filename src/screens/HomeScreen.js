import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageBackground,
  StyleSheet,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const bg = require("../assets/cottage.png");
  const navigation = useNavigation();
  const onGather = () => {
    navigation.navigate("Game");
  };
  const onTea = () => {
    navigation.navigate("Tea");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.background} />
      <View style={styles.buttonContainer}>
        <CustomButton
          text={"Gather Lilypads"}
          type={"tertiary"}
          onPress={onGather}
        />
        <CustomButton text={"Brew Tea"} type={"tertiary"} onPress={onTea} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 500,
    left: "10%",
    width: "50%",
    alignItems: "center",
  },
});
