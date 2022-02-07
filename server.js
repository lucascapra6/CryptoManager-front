const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const history = require ('connect-history-api-fallback');
const app = express();

app.use(history());
app.use(serveStatic('./dist'));

const port = process.env.PORT || 5000;

app.listen(port);