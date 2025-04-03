





const usuarioRoutes = require("./routes/usuarioRoutes")
app.use(bodyParser.urlancoded({extends: false}))
app.use(bodyParser.json());


app.use("/api/usuarios", usuarioRoutes)



app.listen...