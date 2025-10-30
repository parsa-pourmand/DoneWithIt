# DoneWithIt

A full-featured mobile marketplace app built with **React Native** and **Expo**.  
DoneWithIt allows users to list items for sale, browse other users’ listings, and contact sellers directly through in-app messaging — all in a modern, intuitive interface.

---

## Features

- **Beautiful UI** built with React Native and Expo  
-  **Authentication** using JWT tokens  
-  **Contact Sellers** directly through a secure form  
-  **Optimized Images** with caching and lazy loading  
-  **Push Notifications** via `expo-notifications`  
-  **Offline Support** and network detection  
-  **Fully responsive** and adaptive for both iOS and Android  
-  **Custom Navigation Flow**
  - Auth flow for login/register
  - Main app flow with feed, listing edit, and account screens

---

##  Tech Stack

| Category | Tools / Libraries |
|-----------|------------------|
| Framework | [Expo SDK](https://expo.dev) (React Native) |
| Navigation | [React Navigation](https://reactnavigation.org/) |
| Forms & Validation | Formik + Yup |
| Image Handling | `expo-image`, `react-native-expo-image-cache` |
| Notifications | `expo-notifications`, `expo-device` |
| Storage | Secure JWT token handling with AsyncStorage |
| API Integration | Axios-based REST calls |

---

##  Installation & Setup

###  Clone the repository
```bash
git clone https://github.com/<your-username>/DoneWithIt.git
cd DoneWithIt
```
###  Install dependencies

```bash
npm install
```

### Start the development server

```bash
npx expo start
```

### Run on a device
- **iOS:** Press i to launch in the iOS simulator
- **Android:** Press a to launch in the Android emulator
- **Physical device:** Scan the QR code with the Expo Go app (or use a dev build)

---

### Project Structure
```plaintext
DoneWithIt/
├── app/
│   ├── api/              # REST API functions (auth, listings, messages)
│   ├── auth/             # Authentication logic (useAuth, context, storage)
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks
│   ├── navigation/       # React Navigation setup
│   ├── screens/          # Main app screens
│   ├── config/           # Color themes, constants, etc.
│   ├── utility/          # Caching.
│   └── assets/           # Icons, images, fonts
│
├── App.js                # Entry point
├── app.json              # Expo app configuration
└── package.json
```

---

### API & Backend

This app is designed to work with a Node.js + Express REST API.

Make sure to update your API base URL in:
```bash
app/api/client.js
```
---

### Author
#### Parsa Pourmand
 Toronto Metropolitan University Graduate.
 
 Passionate about building intuitive mobile apps with modern React Native tools.
