const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const crackRouter = require("./routes/crack");

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "public"))); 
app.use(express.json()); 

app.use("/crack", crackRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
