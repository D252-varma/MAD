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

## Preview

<img width="332" alt="Screenshot 2024-08-27 at 5 36 40 PM" src="https://github.com/user-attachments/assets/96c6417d-cec0-4a0c-a953-8b22e082884b">
<img width="337" alt="Screenshot 2024-08-27 at 5 38 27 PM" src="https://github.com/user-attachments/assets/19705301-13fb-4d29-b4db-26b885362c3d">
<img width="335" alt="Screenshot 2024-08-27 at 5 37 46 PM" src="https://github.com/user-attachments/assets/6a1beca5-6e65-4350-a977-5624f5c847d0">
<img width="336" alt="Screenshot 2024-08-27 at 5 37 15 PM" src="https://github.com/user-attachments/assets/ba06edcc-70bb-43e0-bd64-bb7cb1b1a50b">
<img width="330" alt="Screenshot 2024-08-27 at 5 35 39 PM" src="https://github.com/user-attachments/assets/af6abf5a-f59e-43e1-8726-00d92dbe98ff">
