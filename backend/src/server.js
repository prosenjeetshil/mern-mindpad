const express = require("express");
const notesRoutes = require("./routes/notesRoutes");
const connectDB = require("./config/db");

const app = express()
const PORT = process.env.PORT || 5001

connectDB();

// middleware
app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(PORT, ()=>{
    console.log("Server started on PORT:", PORT);
});

