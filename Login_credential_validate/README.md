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
## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## Username and ID Validation App

This React Native app allows users to enter a username and a 4-digit user ID, and then validates the inputs. If the username contains non-alphabet characters or the user ID is not a valid 4-digit number, an error message will be displayed.

## Features

	•	Input Fields:
	•	Username input (alphabets only)
	•	User ID input (4-digit number only)
	•	Validation:
	•	Both fields are required
	•	Username must contain only alphabetic characters (A-Z or a-z)
	•	User ID must be exactly 4 digits long
	•	Alert Messages:
	•	Success message for valid inputs
	•	Error messages for invalid inputs

## Start the app on an Android or iOS device:

	•	For Android:npx react-native run-android

## Code Explanation

App.js

	•	The App component contains two TextInput fields:
	•	One for the username
	•	One for the user ID
	•	A validateInputs function checks if the inputs are non-empty and conform to the specified patterns:
	•	Username must contain only alphabets (A-Z, a-z).
	•	User ID must be exactly 4 digits long.
	•	Alerts are displayed depending on the input validity.
