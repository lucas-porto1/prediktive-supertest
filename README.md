# Prediktive Supertest

This project uses [SuperTest](https://github.com/visionmedia/supertest) for API testing in Node.js with Mocha and Chai. It also includes **dotenv** for environment variable management and **Prettier** for maintaining code style consistency.

## Table of Contents

- [Installation and Execution](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lucas-porto1/prediktive-supertest.git
   cd prediktive-supertest

   ```

2. Install project dependencies:

   ```bash
    npm install
   ```

3. Execution:

   ```bash
    npm run test
   ```

## Project Structure

```plaintext
prediktive-supertest/
├── fixtures/
│   ├── requestBody/
│   ├── responseBody/
│   │   └── duckDuckGoSchema.js
├── support/
│   ├── endpoints/
│   │   └── duckduckgo.js
│   ├── utils/
├── test/
│   └── duckDuckGo.test.js
├── .env
├── .gitignore
├── .prettierrc.json
├── package.json
└── README.md
```

## Available Scripts

- npm test: Runs the project tests with Mocha.
- npm run format: Runs Prettier to format the code automatically.
