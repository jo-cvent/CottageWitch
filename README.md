# CottageWitch

#### Video Demo: https://www.youtube.com/watch?v=WDmwDUmyJjw

## Description

CottageWitch is a project that aims to provide a relaxing and simple game where a witch flies over lilypads to earn points.

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

This file contains all images used throughout the game. Most were AI generated with Canva or found for free online. It also contains the font I used throughout to give the app a uniform feeling.

### Config

The config file contains colors from my color scheme for easy reference and uniformity, I imported on each of my screens.

### Game Screen:

Displays a background image and game elements (witch, lily pads) on a canvas.
Animates movement of game elements using React Native Reanimated.
Handles user tap gestures to change the witch's vertical velocity by reversing it multiplying it by -1.
Detects collisions between the witch and lily pads to update the score.

### Tea Screen:

Displays a stone cottage kitchen with petals falling into a pot and a cup of tea

### Home Screen:

Allows navigation between Game and Brewing tea

### Sign In Screen:

Dummy screen that can bring you to home page when you click Sign In, Forgot Password page that can also redirect you to home page, or Sign Up Screen

### Sign Up Screen:

Dummy screen that can bring you back to sign in screen

### Forgot Password Screen:

Navigation screen that can bring you to game

## References

I followed along with three YouTube videos to learn some React Native basics and animation:
React Native for Beginners with Mosh: https://www.youtube.com/watch?v=0-S5a0eXPoc
Build Flappy Bird with React Native: Skia & Reanimated Tutorial: https://www.youtube.com/watch?v=9F4aICEisVI&t=7187s
React Native Login Authentication Part 1: https://www.youtube.com/watch?v=ALnJLbjI7EY
