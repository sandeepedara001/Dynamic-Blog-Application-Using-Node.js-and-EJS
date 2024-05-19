// app.js or server.js
import express from 'express';
import postRoutes from './routes/router.js';
import bodyParser from "body-parser";

const app = express();

// app.set('view engine', 'ejs');
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(postRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});