# Buffbros – Gamified Fitness Tracker  
**NUS Orbital 2025**  
**Proposed Level of Achievement:** Project Gemini  
**Team Members:** Rong Xuan, Ryan  

---

## Project Scope  
Buffbros is a fitness tracking app that turns healthy habits into a game. Users log their workouts and meals to earn points and health, which can be used to upgrade a cartoon-style avatar. These avatars reflect user consistency and allow for friendly competition via leaderboards and optional battles. The app aims to help students stay consistent with their fitness goals through engaging, visual feedback and social features.

---

## Core Features

- **Workout Logger** – Users log workouts to earn points.  
- **Meal Logger** – Users log meals to restore avatar health and maintain streaks.  
- **Avatar System** – Points are used to upgrade the user’s cartoon-style avatar, encouraging consistency.  
- **Leaderboard** – Tracks and ranks users based on points to encourage friendly competition.  
- **(Optional) Battle Mode** – Users can challenge friends in turn-based battles using avatar stats.

---

## Milestone 1: Ideation

### Project Planning
- Finalize project idea and features  
- Select tech stack  
- Design basic system architecture
- https://www.figma.com/design/Xgm81jeCAZyoirT478HzlF/Test-Project?node-id=0-1&t=PIawT7teeTNxJJ2X-1

### Frontend
- Set up React Native with Expo  
- Implement basic navigation (Login → Home)  

### Backend
- Set up Firebase Authentication (login/register)  
- Set up Firestore database  

### Technical Proof of Concept
- Firebase Authentication for user login/register  
- Firestore setup for data storage  
- Navigation flow: Login → Home Screen  

---

## Development Plan

| Week   | Dates         | Milestone      | Objectives                                                                 |
|--------|---------------|----------------|---------------------------------------------------------------------------|
| Week 1 | 20 – 26 May   | Planning       | Finalize project idea, features, user stories, and tech stack             |
| Week 2 | 27 May – 2 June | Milestone 1   | Build technical PoC: login/register using Firebase Auth; connect Firestore |
| Week 3 | 3 – 9 June    | Feature Dev    | Implement workout logging with Firestore integration                       |
| Week 4 | 10 – 16 June  | Feature Dev    | Implement meal logging + avatar state logic (points/health tracking)      |
| Week 5 | 17 – 23 June  | Feature Dev    | Build and test avatar upgrade UI + Lottie animations                       |
| Week 6 | 24 – 30 June  | Milestone 2    | Finalize and test core features, submit working prototype                  |
| Week 7 | 1 – 7 July    | Feedback       | Gather peer feedback, fix UI/UX issues, refactor logic                     |
| Week 8 | 8 – 14 July   | Extensions     | Implement leaderboard with Firestore queries                              |
| Week 9 | 15 – 21 July  | Extensions     | Add optional battle system (avatar stats → damage logic)                   |
| Week 10| 22 – 28 July  | Milestone 3    | Final bug fixes, testing, user feedback, polish UI, finalize submission    |

---

## Milestone 2: Prototype (by 30 June)

### Core Features Developed
- Login/Register with Firebase Authentication  
- Workout and Meal Loggers (form inputs + Firestore storage)  
- Point calculation based on logs  
- Avatar state (health/damage/points) managed in Firestore  
- Leaderboard view based on total points  

### Problems Encountered
- Firebase security rules needed tuning for user isolation  
- Syncing real-time updates caused minor UI delays  
- Cross-platform time formatting issues (Android/iOS)  

---

## Milestone 3: Extension (by 28 July)

### Bugs Squashed
- Leaderboard sorting bugs (cached query issues)  
- UI flicker on avatar upgrades  
- Duplicate log entries from screen re-entry  

### Edge Features Developed
- Optional Battle Mode: Turn-based friendly competition  
- Streak Bonuses: Extra points for consistent daily logging  
- Avatar Cosmetics: Unlock visual upgrades using points  

### User Testing
- Conducted informal testing with 5 users  
- Positive feedback on avatar upgrades and leaderboard competitiveness  
- Minor UI/UX suggestions implemented (button size, visual feedback on log success)  

---

## Tech Stack Summary

| Area          | Tool/Framework                |
|---------------|------------------------------|
| Frontend      | React Native + Expo           |
| State Management | Context API / Zustand        |
| Animations    | Lottie                       |
| Auth          | Firebase Authentication       |
| Database      | Firebase Firestore             |
| Optional Logic| Firebase Cloud Functions       |
| Monitoring    | Firebase Analytics + Crashlytics |

---
