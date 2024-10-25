# LodoChamps : React Native App (Multiplayer Game)!

A fully-featured multiplayer Ludo game built with React Native, designed to be responsive and engaging. Leveraging Redux Toolkit for state management, the React Native Animation API for smooth transitions, and carefully crafted layouts for an optimal user experience across devices.

📋 Features
🎮 Multiplayer Gameplay
Connect with friends and other players in real-time multiplayer matches for an engaging social experience.

📱 Responsive Layout Design
Optimized for various screen sizes, ensuring a seamless experience on both phones and tablets.

🗂️ Redux Toolkit for State Management
Efficiently manages game state, player turns, and moves across the board, keeping gameplay smooth and reactive.

🎨 React Native Animation API
Provides smooth, interactive animations for rolling dice, moving pieces, and capturing moments, adding to the immersive experience.

🎲 Classic Ludo Game Mechanics
Implements the standard Ludo rules, including start zones, capture mechanics, and win zones, for an authentic gameplay experience.

🚫 Offline Mode
Play against AI opponents when no network connection is available, ensuring gameplay is accessible anytime, anywhere.

<p align="center">
  <img src="https://github.com/user-attachments/assets/7a444783-8528-4adb-9ece-d53fcbafbbdd" alt="Screenshot 1" width="200"/>
  <img src="https://github.com/user-attachments/assets/7fa8659c-8645-4030-9503-513cab9416b3" alt="Screenshot 2" width="200"/>
  <img src="https://github.com/user-attachments/assets/1224d527-40b4-4405-bbd5-d291a7ee493d" alt="Screenshot 3" width="200"/>
</p>

## Quick Start

The Ignite boilerplate project's structure will look similar to this:

```
Lodo Champs
├── app
│   ├── components
│   ├── config
│   ├── i18n
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   └── app.tsx
├── assets
│   ├── icons
│   └── images
├── test
│   ├── __snapshots__
│   ├── mockFile.ts
│   └── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   └── templates
|       |── app-icon
│       ├── component
│       ├── model
│       ├── navigator
│       └── screen
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env
└── package.json

```

### ./app directory

The inside of the `app` directory looks similar to the following:

```
app
├── components
├── config
├── i18n
├── models
├── navigators
├── screens
├── services
├── theme
├── utils
└── app.tsx
```

**components**
This is where your reusable components live which help you build your screens.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

### ./assets directory

This directory is designed to organize and store various assets, making it easy for you to manage and use them in your application. The assets are further categorized into subdirectories, including `icons` and `images`:
