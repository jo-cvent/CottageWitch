import { useEffect, useState } from "react";
import { Canvas, useImage, Image, Group, Text, matchFont} from "@shopify/react-native-skia";
import { useWindowDimensions, Platform} from "react-native";
import {useSharedValue, runOnJS, useAnimatedReaction, withTiming, Easing, withSequence, withRepeat, useFrameCallback, useDerivedValue} from 'react-native-reanimated';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';

const GameScreen = () => {
 const { width, height } = useWindowDimensions();
 const [score, setScore] = useState(0);
 const fontFamily = Platform.select({ ios: "American Typewriter", default: "serif" });
 const fontStyle = {
   fontFamily,
   fontSize: 26,
   fontWeight: "bold",
 };
  const font = matchFont(fontStyle);
  const bg = useImage(require("../assets/forest-background.png"));
  const witch = useImage(require("../assets/witch.png"));
  const lilypad = useImage(require("../assets/lilypad.png"));
  const lilypad2 = useImage(require("../assets/lilypad2.png"));
  const x =  useSharedValue(width);
  const x2 =  useSharedValue(width+200);
  const witchY = useSharedValue(height/2);
  const witchYVelocity = useSharedValue(100);
  const witchTransform = useDerivedValue(() => {
    return [{rotate: -witchYVelocity.value}];
  });
  const witchOrigin = useDerivedValue(() => {
    return {x: width/4 + 32, y: witchY.value + 24};
  });

  // called on every frame render
useFrameCallback(({ timeSincePreviousFrame : dt }) => { 
    if (!dt) { return; } 
    witchY.value += (witchYVelocity.value + dt)/100 });

useEffect(() => { x.value = 
  withRepeat(
  withSequence(
  // go to the left of the screen
  withTiming(-250, {duration:5000, easing: Easing.linear}),
  // start back at the right
  withTiming(width, {duration:0 }),
  ), 
  //repeats indefinitely with 0 
  0); 
  x2.value = 
  withRepeat(
  withSequence(
  // go to the left of the screen
  withTiming(-50, {duration:5000, easing: Easing.linear}),
  // start back at the right
  withTiming(width, {duration:0 }),
  ), 
  //repeats indefinitely with 0 
  0); 
 
}, []);

useAnimatedReaction(
    () => witchY.value, 
     (currentValue, previousValue) => {
      const xValue = x2.value;
    if (currentValue != previousValue && 
      previousValue && 
      // check first lily pad collision
      witchY.value >= (height - 270) &&
      witchY.value <= (height - 170) &&
      xValue <= 108 &&
      xValue >= 100){
      runOnJS(setScore)(score + 1);
    }
  }
  );

useAnimatedReaction(
    () => witchY.value, 
     (currentValue, previousValue) => {
      const xValue = x.value;
    if (currentValue != previousValue && 
      previousValue && 
      // check second first lily pad collision
      witchY.value >= (height - 370) &&
      witchY.value <= (height - 270) &&
      xValue <= 108 &&
      xValue >= 100){
      runOnJS(setScore)(score + 1);
    }
  }
  );



const gesture = Gesture.Tap().onStart(()=>{
  (witchYVelocity.value *= -1);
});

  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <GestureDetector gesture={gesture} >
    <Canvas style={{ width, height }} 
    >
      <Image image={bg} width={width} height={height} fit={'cover'}/>
      <Image image={lilypad} width={50} height={50} x={x} y={height-320}/>
      <Image image={lilypad2} width={50} height={50} x={x2} y={height-220}/>
      <Group transform={witchTransform} origin={witchOrigin} >
      <Image image={witch} width={111} height={114} x={width/4} y={witchY}/>
      </Group>
      <Text color={"#88B6F2"} x={50} y={100} text={`Score:${score.toString()}`} font={font}></Text>
    </Canvas>
    </GestureDetector>
    </GestureHandlerRootView>
  );
};
 

export default GameScreen;