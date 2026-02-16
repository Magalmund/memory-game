# 🎮 Memory Card Game

This project is an interactive memory matching game built with **React 19** and **Vite 7**.

The goal is simple: find all matching card pairs in the fewest possible moves.

---

## 🚀 Tech Stack

- ⚛️ [React](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🟨 JavaScript (ES6+)
- 🎨 CSS3 (responsive layout & animations)

---

## ✨ Features

- Card shuffling using the **Fisher–Yates algorithm**
- Smooth flip animations
- Match validation logic
- Score tracking
- Move counter
- Game completion detection
- Restart functionality
- Fully responsive layout

---

## 🧠 Architecture

### Custom Hook

`useGameLogic.js`

Responsible for:

- Shuffling cards
- Managing flipped and matched states
- Validating matches
- Tracking moves and score
- Locking interaction during validation
- Detecting game completion

This approach ensures:

- Clear separation of concerns
- Clean and scalable structure
- Reusable logic layer
- Predictable state updates

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/memory-game.git
cd memory-game
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start development server
```bash
npm run dev
```
### The app runs at:
```bash
http://localhost:5173/
```
## 👨‍💻 Main Goals

Frontend practice project focused on:
- React state management
- Custom hooks architecture
- Interactive UI development
- Clean and maintainable structure
