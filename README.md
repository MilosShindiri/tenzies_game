# Tenzis App 🎲

A simple and fun dice game built with **React** and **Vite**!  
Try to get all dice to show the same number. Click a die to "hold" its value between rolls. When all dice are held and match, you win!

<p align="left">
  <img src="images/dice-cube.png" alt="Screenshot" width="120" style="border-radius: 8px; box-shadow: 0 2px 8px #0002;" />
</p>

## Features

- 🎲 Roll 10 dice at once
- 🟩 Click dice to hold/unhold their value
- 🏆 Confetti celebration when you win
- ♿ Accessible win announcement
- ⚡ Fast, modern React app with Vite

## Getting Started

1. **Clone the repo:**
   ```sh
   git clone https://github.com/yourusername/tenzis_app.git
   cd tenzis_app

1. **Install dependencies:**
   ```sh
   npm install

3. **Run the app locally:**
   ```sh
   npm run dev

##Project Structure
    ```sh
        tenzis_app/
        ├── components/
        │   └── [Dices.jsx](http://_vscodecontentref_/0)
        ├── images/
        │   └── dice-cube.png
        ├── public/
        │   └── vite.svg
        ├── src/
        │   ├── [App.jsx](http://_vscodecontentref_/1)
        │   ├── [App.css](http://_vscodecontentref_/2)
        │   ├── [index.jsx](http://_vscodecontentref_/3)
        │   ├── [index.css](http://_vscodecontentref_/4)
        │   └── assets/
        │       └── react.svg
        ├── [index.html](http://_vscodecontentref_/5)
        ├── [package.json](http://_vscodecontentref_/6)


##Dependencies
-React
-Vite
-nanoid (for unique dice IDs)
-react-confetti (for win animation)

##Accessibility
-Announces win state for screen readers.
-Keyboard focus moves to "New Game" button after winning.

Made with ❤️ by Milos Petrovic
