# RevenueCat Android Integration Demo
Expo + React Native

This project is a small Android demo app created to practice integrating the RevenueCat SDK using Expo and React Native.
The purpose was to understand how RevenueCat’s offerings, products, and entitlements are configured and how the SDK behaves during initial setup and testing.

⸻

## What I Built

- A simple Android app that initializes the RevenueCat SDK, requests offerings from the RevenueCat backend, and logs the available subscription packages.
- The project focuses on the early integration phase that developers go through when adding RevenueCat to an app for the first time.
- **RevenueCat Paywalls Integration**: Implemented a native paywall UI using `react-native-purchases-ui` to provide a seamless subscription experience.
- **Dynamic Offering Fetching**: Logic to retrieve and display configured offerings and packages from the RevenueCat dashboard.

⸻

## Technical Stack

- Expo with expo-dev-client
- React Native
- react-native-purchases (RevenueCat SDK)
- react-native-purchases-ui (Paywall UI)
- Android Emulator
- RevenueCat Test Store

⸻

## Implementation

### 1. Project setup

An Expo project was created and converted to a native Android build using Expo’s prebuild process so that native SDKs could be used.

### 2. SDK integration & Offerings

Initialized the SDK with a Test Store API key.  
Configured products, offerings, and entitlements in the RevenueCat dashboard and verified data retrieval through logs.

### 3. Paywall Integration

Integrated pre-built UI components (`RevenueCatUI`) to handle the subscription flow.

⸻
## Troubleshooting

### Issue: `ReferenceError: Property 'presentPaywall' doesn't exist`
- **Problem**: Encountered a `ReferenceError` when attempting to call the Paywall UI.
- **Cause**: Incorrectly attempted to use a named import for a method that was not exported in that manner.
  - *Incorrect*: `import { presentPaywallIfNeeded } from 'react-native-purchases-ui';`
- **Solution**: Switched to the default import `RevenueCatUI` as required by the React Native SDK.
  - *Fixed*: `import RevenueCatUI from 'react-native-purchases-ui';` / `await RevenueCatUI.presentPaywall();`

⸻
## Screenshots & Logs

- The Android emulator running the demo app  
- RevenueCat SDK initialization logs
- Offerings and available subscription packages returned by the API
<img height="400" alt="스크린샷 2026-01-12 오후 3 28 55" src="https://github.com/user-attachments/assets/3311dbec-187f-4e24-8a68-435db8d71af3" />
<img height="400" alt="스크린샷 2026-01-12 오후 4 57 59" src="https://github.com/user-attachments/assets/aa984502-59f3-4bd3-bfa0-ecd07e8f87d6" />
<img height="200" alt="image" src="https://github.com/user-attachments/assets/70e9b88f-eed4-4e66-8aed-56b06db60803" />
<img height="200" alt="스크린샷 2026-01-12 오후 1 46 52" src="https://github.com/user-attachments/assets/73e036b0-0fec-422f-92e4-376fe0e063f0" />


These confirm that the SDK is connected to the RevenueCat backend and returning configured products in the Test Store environment.

⸻

## Current Status

- RevenueCat SDK initialized: Yes
- Android build working: Yes
- Offerings fetched from API: Yes
- Products and entitlements configured: Yes
- Google Play purchase flow: Pending (requires Play Console product activation and sandbox setup)

⸻

## What I Learned

- **Full-cycle SDK Integration**: From dashboard configuration to rendering native UI components.
- **Debugging Native Bridges**: Understanding how React Native communicates with the RevenueCat native Android SDK.
- **Developer Experience (DX)**: Identified common friction points for developers (e.g., package dependencies, initialization lifecycle) which is crucial for a Support Engineering role.

⸻

## Why I Made This

This project was created to better understand the SDK integration and setup process that developers go through when adding subscriptions to their mobile apps using RevenueCat.

⸻

## Author

**Hyeon ah Kang**  
Product Manager and backend developer learning mobile SDK integration and subscription systems
