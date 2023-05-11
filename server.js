const routes = require('./src/routes/routes');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(routes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server Running at Port ${port} !`);
});
