# Daft.IE Tests

In this repository can be found the end-2-end tests for the [daft.ie](https://www.daft.ie) website.

## Getting Started

### Overview

This project runs on [Playwright](hhttps://playwright.dev/).
Playwright enables reliable end-to-end testing for modern web apps.

### Project Setup

Before installing, [download and install Node.js](https://nodejs.org/en/download/). Latest version should work fine.
Using headless the tests will run in Chrome, Firefox and Safari.

Installation is done using the commands:
```javascript
npm install
npx playwright install
```

### Run tests

The tests can be executed in headless mode by running the command:
```javascript
npm run test
```

The tests can be executed in UI mode by running the command:
```javascript
npm run test:ui
```

### Reports
The test reports can be visualized by running the command:
```javascript
npm run test:report
```