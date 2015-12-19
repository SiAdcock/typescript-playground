'use strict';

const koa = require('koa');
const app = koa();

app.use(function *() {
  this.body = '<h1>Hello</h1>';
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
