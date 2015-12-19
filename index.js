'use strict';
var _ = require('pointless-utils');
const koa = require('koa');
const app = koa();
app.use(function* () {
    this.body = `<h1>${_.shoutify('hello')}</h1>`;
    return 'hello';
});
app.listen(8000, () => {
    console.log('Listening on port 8000...');
});
