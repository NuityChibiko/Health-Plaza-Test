# Quiz App

A simple quiz application built with React and TypeScript.

## Features

- Displays 20 random questions with 4 answer options each
- Randomizes questions and answers on every reload or re-open
- Displays a leaderboard with mock player data
- Styled with Tailwind CSS

## Setup

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/quiz-app.git
   cd quiz-app
   ```
2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

4. Open your browser and go to http://localhost:3000 to see the app.

Project Structure
The project structure is as follows:

quiz-app/
├── src/
│ ├── components/
│ │ ├── Question.tsx
│ │ ├── Quiz.tsx
│ │ └── Leaderboard.tsx
│ ├── data/
│ │ └── mockData.ts
│ ├── types/
│ │ └── index.ts
│ ├── App.tsx
│ ├── index.css
│ ├── index.tsx
├── public/
│ └── index.html
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
