---
title: Overview
description: Overview Self-Hosted
sidebar:
  label: Overview
  order: 1
---

## Backend Components:

### Server API:

- The Server API acts as the entry point for managing meetings. When a host user creates a room, they interact with the Server API, which handles room metadata generation.
- Upon room creation, the host establishes a WebRTC connection to share their media streams (video, audio, or screen sharing). The Server API manages room tasks and interacts with databases to ensure smooth room creation and maintenance.

### Server WebSocket (WS):
- The Server WebSocket component focuses on real-time communication. It manages WebSocket and WebRTC signaling, facilitating control message exchange between clients and servers.
- When a new user joins a room, the Server WS notifies all clients, triggering them to create new peer connections for receiving the new user's media streams. This keeps all participants synchronized during meetings.

## Client-Side Workflow:

### Room Creation:
- Host users initiate meeting room creation by interacting with the Server API. Upon successful creation, they receive metadata detailing the room configuration.
- Subsequently, hosts establish WebRTC connections to start sharing their media streams.

### Participant Joining:
- When a new user joins the room, the Server WS notifies all existing participants. Each participant creates a new peer connection to accommodate the incoming user.
- This peer-to-peer setup enables efficient media stream exchange, ensuring smooth real-time collaboration.

### Media Transmission:
- Once all participants have established connections, they can seamlessly publish and subscribe to media streams.
- Users engage in video conferencing by transmitting and receiving audio, video, or screen-sharing data over the WebRTC connections.

## Architecture Design

<img src="https://i.ibb.co/Gnt9MK5/arch-high-level-design-dark.gif" alt="Arch"/>

- Waterbus prioritizes scalability and high availability. To achieve this:
  - `Server API` and `Server WS` are designed for scalability using Kubernetes (`k8s`).
  - `Server API` scalability is supported by a `Load Balancer`, while `Server WS` scalability relies on `Redis` as a `Message Broker` to scale the WebSocket server.
  - `Redis` also acts as a Message Broker for handling scale-out and scale-in events. As users in a room do not connect to a single `Server WS`, the server redirects them to their partner's location.

## Entity Relationship Diagram

<img src="https://i.ibb.co/vBMjtw9/waterbus-erd-dark.png" alt="ERD">

- The entity relationship diagram (ERD) illustrates Waterbus' structure:
  - `Meeting` represents a chat and video call room.
  - `Participant` refers to a user actively joining the call room, while `Member` denotes a user in a room who doesn't need a room password to join the call.

##  SFU Architecture

<img src="https://i.ibb.co/Z1Nnfg5/waterbus-sfu-ws-dark.gif" alt="SFU"/>

- In the SFU architecture above, each user connects to a single SFU node. When user A requests to subscribe to B's media and C's media, A's node sends a redirect request to the target nodes. User A connects with Nodes B & C.
- When a node shuts down (scale-in), it emits to users that it is being shut down, and users silently reconnect to another node.

Feel free to reach out if you have any questions or need further clarification!