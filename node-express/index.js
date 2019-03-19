const http = require('http'),
    express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    hostname = 'localhost',
    port = 3000,
    app = express();
    const dishRouter = require('./routes/dishRouter');
    const promoRouter = require('./routes/promoRouter');
    const leaderRouter = require('./routes/leaderRouter');

    app.use('/dishes', dishRouter)
        .use('/promotions', promoRouter)
        .use('/leaders', leaderRouter);

const server = http.createServer(app);
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });