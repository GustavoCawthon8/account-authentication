const express = require("express");
const {engine} = require("express-handlebars");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");
const chalk = require("chalk");

const db = require("./config/db");
const AuthRouter = require("./routes/AuthRouter");
const HomeRouter = require("./routes/HomeRouter");

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(flash());

//sessions middleware
app.use(session({
    name: "session",
    secret: "session_secreto",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
        logFn: function(){},
        path: require("path").join(require("os").tmpdir(), "sessions")
    }),
    cookie: {
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
    }
}));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

//routes
app.use("/", AuthRouter);
app.use("/", HomeRouter);


db.sync().then(() => {
    app.listen(PORT, () => {
        console.log(chalk.green(`Servidor rodando na porta https://localhost:${PORT}`));
    });
}).catch((err) => console.log(err))