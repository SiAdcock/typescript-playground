/// <reference path="node_modules/pointless-utils/typings/index.d.ts" />

'use strict';

declare function require(name:string);
import _ = require('pointless-utils');
const koa = require('koa');
const app = koa();

app.use(function *() {
  this.body = `<h1>${_.shoutify('Hello')}</h1>`;
  return 'hello';
});

app.listen(8000, () => {
  console.log('Listening on port 8000...');
});
