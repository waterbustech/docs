---
title: Picture in Picture
description: How to implement Picture in Picture on Web
sidebar:
  label: Web
  order: 3
---

To enable Picture in Picture functionality in your Flutter application, use the following Dart code.

```dart
@JS()
library t;

import 'dart:js_interop';

@JS()
external void startPictureInPicture(String textureId, bool enabled);

Future<void> setPictureInPictureEnabled({
  required String textureId,
  bool enabled = true,
}) async {
  startPictureInPicture(textureId, enabled);
}
```
