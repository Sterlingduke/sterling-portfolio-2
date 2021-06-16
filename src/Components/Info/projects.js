import burgerGif from '../Gifs/RandysBurgerApp.gif';
import budgetTrackerGif from '../Gifs/budgetTracker.gif';
import letsGoPlacesGif from '../Gifs/letsGoPlaces.gif';

const projects = [
    {
        "id": 1,
        "projectName": "Randy's... Burger App!",
        "exampleGif" : burgerGif,
        "summary": "Users of the application can create custom named burgers and submit them through the form.  They are added to the MySQL database.  They can optionally be given a customer name before being devoured.  All database queries are handled through sequelize.",
        "techUsed": " MySQL (with Sequelize), Express, Node, and Handlebars as well as Javascript, HTML, CSS, Bootstrap, jQuery",
        "githubLink": "https://github.com/Sterlingduke/Eat_Da_Burger",
        "deployedLink": "https://burger-app-sterling.herokuapp.com/"
    },
    {
        "id": 2,
        "projectName": "Budget Tracker",
        "exampleGif" : budgetTrackerGif,
        "summary": "Budget Tracker is an application that allow for offline access and functionality.The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. Offline Functionality:Enter deposits offline, Enter expenses offline,When brought back online ,Offline entries should be added to tracker.",
        "techUsed": "Tech Used: React, MongoDB, Express, Node.js, Reactstrap, Bootstrap, Mongoose, Axios, Cheerio, React-Router-Dom, and this project is deployed to Heroku.",
        "githubLink": "https://github.com/Sterlingduke/budget_tracker2000",
        "deployedLink": "https://budgettracker2000.herokuapp.com/"
    },
    {
        "id": 3,
        "projectName": "Let's Go Places",
        "exampleGif" : letsGoPlacesGif,
        "summary": "As a Traveler  I want a Travel Journal Application that’s compatible from my phone, laptop or Tablet - So I can Journal/Document places I have been.",
        "techUsed": "Tech Used: Express,Axios, HTML, CSS, Javascript, Passport, Passport-google-Oauth2, React, React-google-login, and this project is deployed to Heroku.",
        "githubLink": "https://github.com/Sterlingduke/glowing-octo-chainsaw",
        "deployedLink": "https://sheltered-plateau-62064.herokuapp.com/"
    }
];

export default projects;