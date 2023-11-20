const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();


app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
// app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv:", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected successfully😎");
  })
  .catch((err) => {
    console.log(err, "something went wrong");
  });

// Import User, Bike, and Trip Registration routes
const userRoutes = require("./Routes/userRoute");
const bikeRoutes = require("./Routes/bikeRoute");
const tripRegistrationRoutes = require("./Routes/tripRoute");

// Use the routes
app.use("/api/user", userRoutes);
app.use("/api/bikes", bikeRoutes);
app.use("/api/trip-registrations", tripRegistrationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
