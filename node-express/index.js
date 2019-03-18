const http = require('http'),
    express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    hostname = 'localhost',
    port = 3000,
    app = express();
    const dishRouter = require('./routes/dishRouter');

    app.use('/dishes', dishRouter);

const server = http.createServer(app);
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });