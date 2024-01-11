
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Morris!');
});
const router = express.Router("/routes/index.js");
router.get('/', (req, res) => {
    res.json({ message: 'Morris' });
}
);


const port = process.env.Port || 3000;


app.listen(port, () => 
console.log(`Server started on port ${port}`));



