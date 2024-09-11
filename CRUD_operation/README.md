## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```
## For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```
## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## User Management App

A React Native application that manages user data, including registering, updating, viewing, and deleting users. The app also utilizes React Navigation for navigating between different screens.

## Features

	•	Home Screen: A starting point for the app.
	•	Register User: Allows users to register new users into the system.
	•	Update User: Enables editing and updating user details.
	•	View User: Displays details of a specific user.
	•	View All Users: Lists all registered users.
	•	Delete User: Deletes a selected user from the system.

## Technologies Used

	•	React Native
	•	React Navigation (Stack Navigation)
	•	SQLite (optional) for persistent data storage.

## Run the app:
For Android: npx react-native run-android

## Project Structure
.
├── App.js                  # Main app entry point with Stack Navigator
├── pages/                  # Directory containing all user-related screens
│   ├── HomeScreen.js        # Home screen of the app
│   ├── RegisterUser.js      # Screen to register new users
│   ├── UpdateUser.js        # Screen to update existing user details
│   ├── ViewUser.js          # Screen to view details of a specific user
│   ├── ViewAllUser.js       # Screen to view all users
│   ├── DeleteUser.js        # Screen to delete a user
└── ...

## Demo images
<img width="350" alt="Screenshot 2024-09-06 at 12 40 44 PM" src="https://github.com/user-attachments/assets/91d82644-60dd-4b44-add3-c07e9530ec7b">

<img width="350" alt="Screenshot 2024-09-06 at 12 41 30 PM" src="https://github.com/user-attachments/assets/ddd6a9a9-d757-4f47-9fc5-d2f83678b30b">

