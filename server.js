const fs = require('fs');
const express = require('express');

const PORT = process.env.PORT || 80;
const app = express();

app.listen(PORT, () => {
    console.log(`API server not on port ${PORT}!`);
})

app.get