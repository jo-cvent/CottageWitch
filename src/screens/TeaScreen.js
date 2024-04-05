import { useEffect } from "react";
import {
  Canvas,
  useImage,
  Image,
  Text,
  useFont,
} from "@shopify/react-native-skia";
import { useWindowDimensions, View } from "react-native";
import CustomButton from "../components/CustomButton.js";
import {
  useSharedValue,
  withTiming,
  Easing,
  withSequence,
  withRepeat,
} from "react-native-reanimated";

import colors from "../config/colors.js";
import { useNavigation } from "@react-navigation/native";

const TeaScreen = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const font = useFont(
    require("../assets/fonts/american-typewriter-bold.ttf"),
    26
  );
  const bg = useImage(require("../assets/tea.png"));
  const petals = useImage(require("../assets/petals.png"));
  const pot = useImage(require("../assets/pot.png"));
  const y = useSharedValue(0);

  useEffect(() => {
    y.value = withRepeat(
      withSequence(
        withTiming(height / 2, { duration: 8000, easing: Easing.linear }),
        withTiming(height, { duration: 0 })
      ),
      0
    );
  }, []);

  return (
    <>
      <Canvas style={{ width, height }}>
        <Image image={bg} width={width} height={height} fit={"cover"} />
        <Image image={petals} width={140} height={150} x={width - 410} y={y} />
        <Image
          image={pot}
          width={130}
          height={130}
          x={width - 405}
          y={height / 2 + 50}
        />
        <Text
          color={colors.tertiary}
          x={150}
          y={280}
          text={`Tea is magic`}
          font={font}
        ></Text>
      </Canvas>
    </>
  );
};
export default TeaScreen;
