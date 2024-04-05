# CottageWitch

#### Video Demo: https://www.youtube.com/watch?v=WDmwDUmyJjw

## Description

CottageWitch is a project that aims to provide a relaxing and simple app including a game where a witch flies over lilypads to earn points and a screen that shows magical tea brewing where you are supposed to take some deep breaths.

This was created using React Native and Expo Go.

## Installation

1. Clone the repository: `git clone https://github.com/Jo-cvent/CottageWitch`
2. Install the dependencies: `npm install`
3. Make sure you have React Native and its dependencies set up in your development environment.
4. Install the required libraries: `npm install @shopify/react-native-skia react-native-gesture-handler react-native-reanimated react-navigation`
   • React Native Skia: Provides Canvas, Image, Group, Text components, and font handling.
   • React Native Reanimated: Manages shared values, animations, and reactions to state changes.
   • React Native Gesture Handler: Handles tap gestures for interaction.

## Usage

1. Step 1: Start the project on simulator with `npx expo start`
2. Step 2: Click Sign In
3. Step 3: Click Gather Lilypads
4. Step 4: Click on the screen to change the direction of the witch and increase your score
5. Step 5: Click return home
6. Step 6: Click brew tea, watch the animation and take deep breaths

## Files Explanation

### Navigation

This sets up Navigation between the different screens and the screens can then import the navigator to reference each other

### Components

The Custom Button and Custom Input were created as reusable components across the Sign In/Sign Up/Home and Game Screens. The different styles of button allows differentation e.g. between Forgot Password and Sign In button on Sign in Screen.

### Assets

This file contains all images used throughout the game. Most were AI generated with Canva or found for free online. It also contains the american-typewriter font used throughout to give the app a uniform feeling.

### Config

The config file contains colors from my color scheme for easy reference and uniformity, I imported on each of my screens.

### Game Screen:

- Displays a background image and game elements (witch, lily pads) on a canvas.
- Animates movement of game elements using React Native Reanimated and shared values.
- The witch's y value starts mid screen and slowly increases to simulate witch flying downard until the user taps on the screen. The screen is wrapped in Gesture Handler from react-native-gesture-handler so anywhere on the screen can be tapped. When the screen is tapped, they icon is transformed (image rotated) to appear as though the witch is flying upwards and velocity changes so the witch moves upwards. When tapped again these actions both reverse. This is done by changing the witch's shared velocity value by a factor of negative 1.
- The lilypads both use a useEffect, withSequence, withTiming and withRepeact from react animated library. They start at different x and y positions and their x values are updated to go to the left off screen and restart from right off screen. The zero in withRepeact function signifies repeating indefinitely.
- the useAnimated Reaction hooks detect collisions between the witch and lily pads to update the score based on when the witch's y values overlap with the lilypads' y values and x values
- Home screen button allows navigation back to home at bottom of screen using navigator

### Tea Screen:

- Displays a stone cottage kitchen with petals falling into a pot and a cup of tea. Using similar functionality to the lilypads in the Game Screen. The tea petals are set to fall from the top of the screen to mid screen, hiding slightly behind a pot image and then restart from the beginning with withTiming, withSequence and withRepeact from react animated library.

### Home Screen:

- Allows navigation between Game and Brewing Tea using Custom Buttons.

### Sign In Screen:

- Dummy screen that can bring you to home page when you click Sign In, Forgot Password page that can also redirect you to home page, or Sign Up Screen using Custom Buttons and Custom Inputs. Authentication is not set up so although the username and password values are set States there is console log statement and navigation no matter what username and password.

### Sign Up Screen:

- Dummy screen that can bring you back to sign in screen.

### Forgot Password Screen:

- Navigation screen that can bring you to game.

## References

I followed along with three YouTube videos to learn some React Native basics and animation:
React Native for Beginners with Mosh: https://www.youtube.com/watch?v=0-S5a0eXPoc
Build Flappy Bird with React Native: Skia & Reanimated Tutorial: https://www.youtube.com/watch?v=9F4aICEisVI&t=7187s
React Native Login Authentication Part 1: https://www.youtube.com/watch?v=ALnJLbjI7EY
