const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const AuthRoute = require("./routes/AuthRoute");
const bodyParser = require("body-parser");
require("dotenv").config();

// Creating a DB Connection

mongoose
  .connect(
    process.env.MONGO_URL.replace("<password>", process.env.MONGODB_PASS)
  )
  .then(() => console.log("DB is Connected..."))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://www.bakalsocial.com"
      : "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

console.log(process.env.NODE_ENV);

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use((req, res, next) => {
  console.log("Request Body:", req.body);
  next();
});

app.get("/", (req, res) => res.send("Welcome to Cloth Comfort API"));

app.use("/api/auth", AuthRoute);

// app.use('/api/users', usersRoute);
// app.use('/api/posts', postsRoute);
// app.use('/api/comments', commentsRoute);
// app.use('/api/conversations', conversationsRoute);
// app.use('/api/messages', messagesRoute);

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
