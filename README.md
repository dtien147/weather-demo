# Getting Started with the project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode. We can use `--coverage` to generate test report.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

Folder Structure
============================
  .
    ├── build                   # Compiled files    
    ├── src                     # Source files
        ├── assets              
        ├── components
        ├── constants
        ├── hooks
        ├── models
        ├── pages
        ├── services        
        └── utils
    └── README.md

### 1. Assets

We can store all assets (font, images, icons) in this folder.

### 2. Components

Components are the life-blood of your application. They will hold the UI for your application, \
and can sometimes hold the Business Logic and also any State which has to be maintained.

  .        
    ├── components
        ├── ExampleComponent              
            ├── __test__
            ├── index.js
            ├── index.css                
        └── index.js                # Where we export all components
    └── README.md

### 3. Constants

Where we define all constants of the project.

### 4. Hooks

In this simple project, we use react hooks to handle side effects instead of redux. \
This folder will contain all custom hooks of the project.

### 5. Models

We use ES6 Classes to construct data models in APIs that We'are using. So that other teammates can easily know \
which properties they need to use and what it is.

### 6. Pages

In this structure, each page gets its own folder, so that it’s easy to figure out where page's code located.\

### 7. Services

The connectors of your application with the outside world. Any form of API call which needs to happen, \
to share data with an external service or client, should happen within the adapter itself.

### 8. Utils

This folder is a place where you can place small snippets you can use throughout the application. \
Small functions to build bigger things with.

### 9. Tests

If we want to test functions/components we will create a __test__ folder in its folder. \
We will store all tests of that functions/components in the tests folder