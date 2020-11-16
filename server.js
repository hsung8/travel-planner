const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const activities = require("./routes/api/activities")
const hotel = require("./routes/api/hotel")

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// //app.get("/yelp/", (req, res)=>{
//   const location = req.query.location

//   // request to yelp server

//   // request.send(data)
// }")
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/users",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
  //users route
app.use("/api/users", users);
  //user activities routes
app.use("/api/users", activities);
  //user hotel routes
app.use("/api/users", hotel);


const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
