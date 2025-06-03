const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let visitCount = 0;

app.get('/api/visit', (req, res) => {
    visitCount++;
    res.json({ visitCount });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend started on port ${PORT}`));