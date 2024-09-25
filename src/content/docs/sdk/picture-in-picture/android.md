---
title: Picture in Picture
description: How to implement Picture in Picture on Android
sidebar:
  label: Android
  order: 2
---

In the context of online conferencing increasingly developing, picture in picture is one of the should-have features of online meetings software.

## Apply in the code

We will use `simple_pip_mode` to implement PiP on Android

### Installation

- In the dependencies: section of your pubspec.yaml, add the following line:

```yaml
simple_pip_mode: <latest_version>
```

- Update `AndroidManifest.xml`:

```xml
<activity
  android:name=".MainActivity"
  android:exported="true"
  android:launchMode="singleTop"
  android:theme="@style/LaunchTheme"
  android:configChanges="orientation|keyboardHidden|keyboard|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode"
  android:hardwareAccelerated="true"
  android:windowSoftInputMode="adjustResize"
  android:supportsPictureInPicture="true" <---- add this line to your activity
></activity>
```


### Setting automatic pip mode

```dart
void _onEventChanged(CallbackPayload event) {
    if (event.event != CallbackEvents.meetingEnded) {
       if (Platform.isAndroid) {
           SimplePip().setAutoPipMode();
       }
    }
}
```

### Setup PiP View

Wrap `body` of `MeetingScreen` by `PipWidget`:

```dart
if (Platform.isAndroid) {
  return PipWidget(
    pipBuilder: (context) {
      return _buildPipView(context, meeting, callState);
    },
    child: _buildMeetingBody(
      context,
      meeting: meeting,
      callState: callState,
      setting: setting,
    ),
  );
}
```

## Reference

- https://pub.dev/packages/simple_pip_mode