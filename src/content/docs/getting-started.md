---
title: Getting Started
description: Install pub.dev waterbus_sdk
---

To compile `Waterbus` from the source code, follow these steps:

1. Install [Flutter](https://flutter.dev).
2. Clone the Waterbus repository.
3. Run `flutter pub get` to download dependencies.
4. Run `flutter run` to start the app.

## Building

These commands are intended for maintainers only.

### Android

Traditional APK

```bash
flutter build apk
```

AppBundle for Google Play

```bash
flutter build appbundle
```

### iOS

Pod install

```bash
cd ios
bash clean-pods.sh
```

```bash
flutter build ipa
```

### macOS

Pod install

```bash
cd macos
bash clean-pods.sh
```

```bash
flutter build macos
```

### Web

```bash
flutter build web
```

## Usage

1. Sign up for an account
2. Create a new meeting
3. Share the meeting link with other participants
4. Start the meeting and utilize the available features