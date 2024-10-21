
// Import the express module
const express = require('express');
const app = express(); // Create an Express application
const port = 3000; // Set the port number for the server

// Import body-parser to handle form data
const bodyParser = require('body-parser');
// Middleware to parse URL-encoded data (from forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Root route: Displays a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).send('Something went wrong!'); // Send a 500 error response
});

// Route to greet a user by name and serial number
app.get('/hello/:name/:sn', (req, res) => {
    const name = req.params.name; // Extract name from route parameters
    const sn = req.params.sn; // Extract serial number from route parameters
    res.send(`Hello ${name}, ${sn}`); // Send a greeting message
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Import path module for file handling
const path = require('path');

// Route to send the index.html file
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Send the index.html file
});

// Route to greet a user using query parameters
app.get('/name', (req, res) => {
    const firstname = req.query.firstname; // Extract first name from query parameters
    const lastname = req.query.lastname; // Extract last name from query parameters
    res.send(`Hello ${firstname} ${lastname}`); // Send a greeting message
});

// Route to greet a user using POST data
app.post('/name', (req, res) => {
    const firstname = req.body.firstname; // Extract first name from request body
    const lastname = req.body.lastname; // Extract last name from request body
    res.send(`Hello ${firstname} ${lastname}`); // Send a greeting message
});

// API route to get a list of movies
app.get('/api/movies', (req, res) => {
    const movies = [ // Sample movie data
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ movies }); // Send the movies as a JSON response
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log server status
});
