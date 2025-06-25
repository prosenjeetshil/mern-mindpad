const express = require("express");
const notesRoutes = require("./routes/notesRoutes");
const connectDB = require("./config/db");
const rateLimiter = require("./middleware/rateLimiter");

const app = express()
const PORT = process.env.PORT || 5001



// middleware
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then( () => {
    app.listen(PORT, ()=>{
        console.log("Server started on PORT:", PORT);
    });
});

