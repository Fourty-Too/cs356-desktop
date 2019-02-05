This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### This webapp is live at https://jrt781.github.io/react-gh-pages/

# Instructions

If you would like to use this as a baseline for your project:

1. Clone this repository by running the following command in your terminal, 
   changing "my-cs356-project" to whatever you want to name your project:
    ```
    git clone https://github.com/jrt781/react-gh-pages.git my-cs356-project
    ```

2. Run `npm install` in terminal in the root folder of the project. (Check [here](https://www.npmjs.com/get-npm) to download npm if you haven't already)

3. Open `package.json` and find the `"homepage"` variable.
   * Currently the variable looks like this:
     ```
     "homepage": "http://jrt781.github.io/react-gh-pages",
     ```
   * Change `jrt781` to be your GitHub username
   * Change `react-gh-pages` to be whatever you named your repository (if you just
     copied and pasted from above, then it's `my-cs356-project`)
     
4. During development, run `npm start` to see your project locally.

5. To publish your website or make updates, run `npm run deploy`. 
   This will build your webapp for production and publish the changes to 
   the website you listed as your `"homepage"` variable in step 3. <strong>Note that
   the website may take a few minutes to update.</strong>
   
Explore the `src` folder to look at how the project is structured so you can modify it for your purposes.

## Personalizing This Project

### Changing the Font

There are a lot of great fonts from [Google Fonts](https://fonts.google.com/). Select ones you would like to use, and 
get the provided link tag to use them in the project. For example:

```
<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
```

Once you have the link tag, place this inside the `<head>` tag in `/public/index.html`.

Then, open `/src/index.css` and modify `font-family` property under `* {...}`.


# Enhancing an Existing Project

### React Router
If you want to use React Router on an already existing React project, 
run the following in your terminal:

```
npm install --save react-router-dom
```
### Bootstrap

If you want Bootstrap for an already existing React project:

```
npm install --save bootstrap
```

Then, include the following import in your `index.js` file (the file
location might be slightly different based on where you place your 
`index.js`; here it assumes the file is in the `src` folder under the 
root folder of the project):

```
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
``` 

# IDE Instructions
If you are developing using IntelliJ IDEA or a similar program, then 
the `process.env.PUBLIC_URL` in `index.js` may not be recognized at 
first by the IDE. To fix this:
1. Open your settings
2. Expand the “Languages & Frameworks” category
3. Select “Node.js and NPM”
4. Check the box labelled “Coding assistance for Node.js” and choose 
your project

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
