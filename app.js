const express = require('express');
const { exec } = require('child_process');
const _ = require('lodash');
const app = express();
app.get('/run', (req, res) => res.send(String(eval(req.query.code))));
app.get('/ls', (req, res) => exec('ls ' + req.query.dir, (e, out) => res.send(out)));
app.get('/merge', (req, res) => res.json(_.merge({}, JSON.parse(req.query.o))));
app.listen(3000);
