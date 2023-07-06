const express = require('express');
const path = require('path');


const PORT =  3001;

const app = express();

// Import custom middleware, "cLog"


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);



app.get('/api/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, '/db/db.json'))
})


app.post()



// Wildcard route to direct users to a index page
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, './public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
