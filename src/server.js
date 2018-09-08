

// Koa
const Koa = require("koa");     // import\
const Router = require("koa-router");
const logger = require("koa-logger");

const app = new Koa();
const router = new Router();


// ROuter
// 127.0.0.1:3000/users
// 127.0.0.1:3000/users/chansik

// app.use(async ctx => {
//     ctx.body = "Hello, Koa"
// });

router.get("/", async ctx => {
    ctx.body = JSON.stringify({
        name: "Hello REST API Server",
        version: "0.0.4",

        links: {
            link: "https://api.ahndwon.online/users"
        }
    });
});

router.get("/users", async ctx => {
    ctx.body = [
        {
            name: "Tom",
            age: 42
        },
        {
            name: "Alice",
            age: 12
        }
    ]
})

app.use(logger());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
