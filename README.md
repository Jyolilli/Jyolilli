# Planning

[TOC]

## design
- simple, pure
- can add more later
- thin, black lines
- square, cohesive pictures
- short text posts, quotes/tweets, not long posts
- accessibility
- responsive

## features
- profile page
- make friends, have list of friends, unfriend
- log in and out, create an account
- chat function
- landing page = page of posts like facebook
- hybrid of IG and twitter
- reusable components
- add short videos

## pages
- friends page
- profile
- main feed page


## tech
- styled-components
- create-react-app
- nextjs?
- redux
- react (with Hooks)
- postgreSQL/mongodb 
- typescript
- express
- node
- graphQL
- auth0
- cypress - e2e testing
- jest
- react-testing-library
- socket.io
- eslint
- prettier
- flow? https://flow.org/
- aws
- 

## stages of development
1. Log in and see a page that says you're logged in
2. Sign up/create an account
3. Landing page
4. -
5. -
6. -
7. -
8. Chat


## tasks
0. User journey
1. Mock up the design
2. Create repo
3. Set up Trello
4. Decide file structure
5. 
6. Deploy early


## process guide

**Overview:**
This issue is intended to document for our current processes within this project. Once everyone agrees on the document, contents should only be changed once discussed with and agreed by the whole team.

**Linting:** 
We use eslint with the airbnb settings to ensure consistent, good-quality code.

**Branches:**
We work off a staging branch. This branch is only merged to master once we've got a complete product, ready to be deployed on Heroku. 
Each new branch should start with one of the following:
- feature/
- fix/ 

depending on its function. It should also have hyphens (-) to separate words.

**Commit messages:**
Written in present tense (imperative) to describe what a commit does, rather than what it did.
E.g. Change color of search bar instead of Changed/changes color of search bar

**Naming things:** 
Functions - camelCase, describe what it does
Classes - Block Element Modifier (BEM), [useful video for recapping BEM rules](https://www.youtube.com/watch?v=lpxXHkZSl1Q)
Tests - [filename].test.js
Routes - if more than one word, dash between words

**Asynchronicity:**
Whenever possible, use [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) over callbacks.

**Opening pull requests:**
Follow the checklist below.
Create the PR and assign the other pair (who haven't worked on the code) as reviewers.
Relate the issue number either in the commit message or pull request message.

**Merging pull requests:**
Check through the code carefully, comment on anything questionable by hovering over the line and clicking the blue plus that appears.
- If changes need to be made, add the changes-needed label.
- If everything is a-okay, merge the pull request and delete the branch.

**Accessibility:**
Avoid divs in favour of semantic elements (eg section, header, button) wherever possible. 
All form elements should have labels.
Follow guidelines from [Oli's talk](https://fac-a11y.netlify.com/#0).
Use [Aria roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) as a last resort. 

---

### Before submitting a pull request:
- [ ] git pull staging and merge with branch locally to prevent conflicts
- [ ] relate relevant issue
- [ ] check the project runs
  - no bugs/errors in existing/new features
  - the branch can successfully be deployed to Heroku
- [ ] linter is used and generating no error messages
  - code is consistent with agreed team style
- [ ] files are named consistently and clearly
- [ ] tests are working
  - each new file written has a test file (where possible)
  - all tests should pass locally and on Travis
  - consider edge cases in tests
  - project test coverage stays over 95%
  - files and lines of code have been ignored if they cannot be tested
- [ ] no console logs except for crucial system messages (e.g. which port server is on).
  - console.error is used in error handling.


## example user journeys

### Main flow
**On page load:** #3 
- logo
- link to find toilet page

**Location page:**
- use my location button to use user's geolocation
- location input
  - postcode
  - street name
  - any other forms of location?
- submit button to retrieve all toilets nearby from database

**Filters page:** #6 
- five options to filter toilets
- back button
- submit button
- cookies to store filter preferences

**List view page:** #8 
- each toilet has:
  - icon
  - name
  - address which is a link to google maps
  - icons from each filter pref
- back button

---

### User journey
**Main user journey:**
As a user, I want to find my closest suitable toilet ASAP when I'm out and about in London.

**User stories:**
As a user, I want to see the main page of the app on load. 
As a user, I want to choose how I input my location. 
As a user, I want to select toilets that fit my needs.
As a user, I don't want to select my filters every time. 
As a user, I want to be able to easily navigate between pages.   
As a user, I want to get a list of toilets. 
As a user, I want directions to a particular toilet.  

**Sprint 2 stories/Stretch goals:**
As a user, I want to be able to add a new toilet to the app.  
As a user, I want to be able to edit incorrect toilet info.  
As a user, I want to see the nearby toilets in a map. 




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
