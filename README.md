# React Front End for Rails Neighbour Aid API

## Dependencies

React Template - cra-template-react-tailwindcss

- https://www.npmjs.com/package/cra-template-react-tailwindcss
- `npx create-react-app my-app --template react-tailwindcss`

React Router & React Router Dom

- `npm i react-router react-router-dom`

Axios

- `npm i axios`

## Steps

1. Build out basic folder and component structure to get started

- Add a `pages` and `components` folder
- Create a `Home.jsx` & `Dashboard.jsx` inside pages
- Create a new folder `auth` inside `components` and make a file called `Registration.jsx`

2. Set up general routing ability -- _ Note _ Using React Router V6 which has significant changes from v5

- Wrap the main app component in `BrowserRouter` in `index.js` and in `App.js` put a home route and a dashboard route in the `<Routes>`
