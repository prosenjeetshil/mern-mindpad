const express = require("express");
const notesRoutes = require("./routes/notesRoutes");
const connectDB = require("./config/db");
const rateLimiter = require("./middleware/rateLimiter");
const cors = require("cors");
const path = require("path");

const app = express()
const PORT = process.env.PORT || 5001
// const __dirname = path.resolve();



// middleware

//cors should be used before other middlewares
// to allow cross-origin requests from the frontend
if (process.env.NODE_ENV !== "production") {
    app.use(cors({
    origin: "http://localhost:5173",
}));
}


app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"));
    });
}


connectDB().then( () => {
    app.listen(PORT, ()=>{
        console.log("Server started on PORT:", PORT);
    });
});

