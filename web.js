const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;
const users = { admin: "check"};
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// Ορισμός του φακέλου "public" για στατικά αρχεία
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'www'))); 

// Default route για την κύρια σελίδα
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'base.html'));
});

// Εκκίνηση του server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


app.post("/login", (req, res) => {
  // get username from the client form data
  const username = req.body.username;
  const password = users[username];
  if (password === req.body.password) {
    jwt.sign({ username: username }, "secretkey", (err, token) => {
      res.status(200).json(token);
    });
  } else {
    res.sendStatus(401);
  }
});

