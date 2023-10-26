const express = require("express");
const app = express()
const USER = "admin"
const PASSWORD = 'abc'

app.use((req, res, next) => {
    res.removeHeader("X-Powered-By");
    next()
}) //middleware

app.use("/admin", (req, res, next) => {
    if (req.query.user === USER && req.query.password === PASSWORD) return next()
    res.redirect("/");
})

app.get("/", (req, res) => {
    res.send("<h1>Welcome</h1>")
})

app.get("/admin", (req, res) => {
    res.send("O mój najwspaniałszy ADMINIE")
})
app.get("/zmeczonyuczen", (req, res) => {
    res.send("<b>Let's start</b>")
})

app.get("/koty/:imie/:wiek", (req, res) => {
    console.log(req);
    res.send(`
        twój kot ma na imię <b>${req.params.imie}</b>
        i ma <b>${req.params.wiek}</b> lat.
        
        Query string:
        <p> czy ma kojec: <b>${req.query.czyMaKojec}</b> </p>
        <p> Co je? <b>${req.query.jedzenie}</b> </p>
    `)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Serwer wystartował na porcie ${port}`));