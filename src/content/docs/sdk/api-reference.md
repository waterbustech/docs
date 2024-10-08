---
title: API Reference
description: API Reference
---

## Initialize

Firstly, call `WaterbusSdk.instance.initial` to set your server url and sdk connect WebSocket.

```dart
await WaterbusSdk.instance.initializeApp(
  apiUrl: 'https://service.waterbus.tech/busapi/v1/',
  wsUrl: 'wss://sfu.waterbus.tech',
  privateMessageKey: "waterbus@2024",
);
```

## Authorization

### Create Token

Create token will auto connect websocket if success

```dart
await WaterbusSdk.instance.createToken(payload);
```

### Refresh Token

```dart
await WaterbusSdk.instance.renewToken();
```

### Delete Token

Delete token for disconnect websocket and prepare for create new token

```dart
await WaterbusSdk.instance.deleteToken();
```

## Meeting

### Create room

```dart
final Meeting? meeting = await WaterbusSdk.instance.createRoom(
  meeting: Meeting(title: 'Meeting with Kai Dao'),
  password: 'password',
  userId: 1, // <- modify to your user id
);
```

### Update room

```dart
final Meeting? meeting = await WaterbusSdk.instance.updateRoom(
  meeting:  Meeting(title: 'Meeting with Kai Dao - 2'),
  password: 'new-password',
  userId: 1, // <- modify to your user id
);
```

### Join room

```dart
final Meeting? meeting = await WaterbusSdk.instance.joinRoom(
  meeting: _currentMeeting,
  password: 'room-password-here',
  userId: 1, // <- modify to your user id
);
```

### Leave room

```dart
await WaterbusSdk.instance.leaveRoom();
```

### Prepare Media
:::note
> will prepare the camera and microphone for you to turn on and off before entering the meeting
:::

```dart
await WaterbusSdk.instance.prepareMedia();
```

### Set callback

- Callback event

```dart
void _onEventChanged(CallbackPayload event) {
  switch (event.event) {
    case CallbackEvents.shouldBeUpdateState:
      break;
    case CallbackEvents.newParticipant:
      break;
    case CallbackEvents.participantHasLeft:
      break;
    case CallbackEvents.meetingEnded:
      break;
    default:
      break;
  }
}

WaterbusSdk.instance.onEventChangedRegister = _onEventChanged;
```

- Callback subtitle

```dart
void _onSubtitleChanged(Subtitle sub) {
  print('${sub.participant}: ${sub.content}');
}

WaterbusSdk.instance.setOnSubtitle = _onSubtitleChanged;
```

- Callback video sender stats

```dart
void _handleOnStatsChanged(VideoSenderStats stats) {
    print(stats.toString());
}

WaterbusSdk.onStatsChanged = _handleOnStatsChanged;
```