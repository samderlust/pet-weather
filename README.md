This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Pet Weather App

## Overview

This app shows you the list of pets and see if a pet needs an umbrella or not. Based on its location on the globe.

You can create your own pet as well.

The app is connected with Pet Shelter API which stores the pet. And DarkSkyAPI to retrieve the weather info.

You can find the app here: https://pet-weather-samderlust.herokuapp.com/

## Set up .env environment variable

- create a .env file outside of src folder
- create key REACT_APP_GOOGLE_API_KEY and provide your Google API key
- create key REACT_APP_WEATHER_API_KEY and provide your darksky API key

## Set up in Local host

- git checkout at https://github.com/samderlust/pet-weather.git
- yarn add to install all the dependencies
- yarn start to run on localmachine

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
