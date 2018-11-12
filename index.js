const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const app = new Koa();
app.use(static(path.resolve('dist')));
app.listen(3000, () => {
    console.log('success')
})