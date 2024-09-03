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

# React Native Toggle Toast and Text Style Change App

This is a simple React Native app that demonstrates the use of a toggle button to display a toast notification and dynamically change the font size and color of a sample text.

## Features

- Display a toast message using `ToastAndroid`.
- Toggle the font size and font color of a text element when the button is pressed.

## Requirements

- Node.js
- React Native CLI or Expo CLI (depending on the setup you're using)
- Android Emulator or a physical Android device (as `ToastAndroid` is specific to Android)

## Running the App

To run the app on an Android emulator or a physical Android device:npx react-native run-android

## How It Works

	1.	State Management:
	•	fontSize: Controls the font size of the text.
	•	fontColor: Controls the font color of the text.
	•	toggle: A boolean that toggles the font size, color, and displays a toast message.
	2.	Toast Notification:
	•	When the “Toggle Toast” button is pressed, a toast message is shown using ToastAndroid (specific to Android).
	3.	Dynamic Styling:
	•	The font size and color of the text change based on the toggle state.

 ## Preview

 <img width="337" alt="Screenshot 2024-08-01 at 9 22 45 PM" src="https://github.com/user-attachments/assets/243a1964-4ab5-42c4-a91d-56eefbaaffbc">
<img width="336" alt="Screenshot 2024-08-01 at 9 20 58 PM" src="https://github.com/user-attachments/assets/fbfce6ed-705c-4f71-b951-d77aacac0ca6">

 
