# RevenueCat Android Integration Demo
Expo + React Native

This project is a small Android demo app created to practice integrating the RevenueCat SDK using Expo and React Native.
The purpose was to understand how RevenueCat’s offerings, products, and entitlements are configured and how the SDK behaves during initial setup and testing.

⸻

## What I Built

A simple Android app that initializes the RevenueCat SDK, requests offerings from the RevenueCat backend, and logs the available subscription packages.
The project focuses on the early integration phase that developers go through when adding RevenueCat to an app for the first time.

⸻

## Technical Stack

- Expo with expo-dev-client
- React Native
- react-native-purchases (RevenueCat SDK)
- Android Emulator
- RevenueCat Test Store

⸻

## Implementation

### 1. Project setup

An Expo project was created and converted to a native Android build using Expo’s prebuild process so that native SDKs could be used.

### 2. SDK integration

The RevenueCat SDK was installed and configured with a Test Store API key.  
SDK initialization and connectivity were confirmed through Android logs.

### 3. Offerings and products

Subscription products, offerings, and entitlements were created in the RevenueCat dashboard.  
The app requests offerings from the SDK and checks which packages and products are returned.  

### 4. Debugging

During setup, several common issues were encountered and examined, such as billing availability errors and cases where offerings were not returned due to configuration problems.  
These were investigated by reading SDK logs and error messages.

⸻
## Screenshots & Logs

- The Android emulator running the demo app  
- RevenueCat SDK initialization logs
- Offerings and available subscription packages returned by the API
- ![스크린샷 2026-01-12 오후 3.28.55.png](../../%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-01-12%20%EC%98%A4%ED%9B%84%203.28.55.png)
- ![스크린샷 2026-01-12 오후 1.46.52.png](../../%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202026-01-12%20%EC%98%A4%ED%9B%84%201.46.52.png)  

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

- How a mobile app connects to RevenueCat through its SDK  
- How offerings, products, and entitlements are structured  
- How to read RevenueCat and Android billing logs  
- How dashboard configuration affects what the SDK returns
- How to troubleshoot common setup and configuration issues

⸻

## Why I Made This

This project was created to better understand the SDK integration and setup process that developers go through when adding subscriptions to their mobile apps using RevenueCat.

⸻

## Author

**Hyeon ah Kang**
Product Manager and backend developer learning mobile SDK integration and subscription systems