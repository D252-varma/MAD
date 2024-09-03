
# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# React Native Scientific Calculator

This project is a simple scientific calculator built using React Native. The calculator supports basic arithmetic operations as well as some scientific functions like sine, cosine, tangent, and logarithm.

## Features

- Supports basic arithmetic operations: addition, subtraction, multiplication, and division.
- Includes scientific functions such as sine, cosine, tangent, and logarithm.
- Buttons for parentheses for more complex expressions.
- Includes a clear button (`Clr`), delete button (`DEL`), and an evaluation button (`=`).
- Displays the current expression at the top of the screen and updates as the user inputs values.

## Requirements

- Node.js
- React Native CLI or Expo CLI (depending on the setup you're using)
- Android/iOS emulator or a physical Android/iOS device for testing

## Running the App

To run the app on an Android/iOS emulator or a physical device:
npx react-native run-android

## Install the required dependencies:

Math.js: Install the mathjs package for evaluating mathematical expressions.
	•	Run the following command:npm install mathjs


## How It Works

	1.	State Management:
	•	expression: Stores the current mathematical expression input by the user.
	2.	Button Handling:
	•	The calculator includes buttons for digits, operators, parentheses, scientific functions (sin, cos, tan, log), clear, delete, and evaluate.
	3.	Expression Evaluation:
	•	The mathjs library is used to evaluate the mathematical expression when the = button is pressed.
	•	If an error occurs during evaluation (e.g., invalid expression), the display shows Error.
	4.	Custom Button Rendering:
	•	The renderButton function is used to dynamically generate the buttons for the calculator with proper styling.
