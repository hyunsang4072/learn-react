# learn-react

react tutorial

# npm?

- npm stands for "Node Package Manager"
- npm is a default package manager for the JavaScript.

# npm commands

npm i Alias for npm install  
npm install Install everything in package.json  
npm list Lists the installed versions of all dependencies in this software  
npm update Update production packages  
npm update --dev Update dev packages  
npm update -g Update global packages  
npm install -g npm@latest Update npm  
npm -v Get npm version  
npm init Create package.json  
npm root -g Find Root Folder  
npm start Only "package.json" fill execute

# Library vs. FrameWork

Library: a tool that provides specific functionality  
FrameWork: a set of tools and guidelines for building apps

- React == Library
- Vue, Angular == Frameworks

# Useful Modern CSS Library

- Bootstrap

# tsx: React Components

- It's necessary to break the markup into multiple lines  
  (note that VS Code extension "prettier" automatically does this when saving a file)
- No for loops in tsx/jsx
- In tsx/jsx, we can only use HTML elements or other React components

# React TIPS!!!

- Components == JavaScript Functions
- Components take in arbitrary inputs(called "props") and return React elements describing what should appear on the screen
- In React, a component CANNOT return more than one element(i.e. tags)
- "Fragment" tags for wrapping multiple elements in one component
- If you add empty angle brackets, we are implicitly telling React to use a fragment to wrap all of the children

# Conditional Statements

## if statement

- if (items.length === 0)
return (
<>
  <h1>List</h1>
  <p>No item found</p>
  </>
  );
<!-- if statement inside Fragment tags -->
- one way of this this is {conditional statement ? true : false}
- another way is {items.length === 0 && <p>No item found</p>}

# Arrow Functions

() => expression

param => expression

(param) => expression

(param1, param2) => expression

() => {
statements
}

param => {
statements
}

(param1, param2) => {
statements
}

# Progress

Tutorial: https://www.youtube.com/watch?v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh  
Time Stamp: 44:44
