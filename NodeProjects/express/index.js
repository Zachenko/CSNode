// npm install express --save
// https://www.npmjs.com/package/serve-index → npm install serve-index

const serveIndex = require("serve-index");
const express = require("express");
const app = express();

app.use("/moje-zdjecia", express.static("public/imgs"));
app.use("/moje-zdjecia", serveIndex("public/imgs"));
// app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("<h1 style='color:wheat;text-shadow:1px 1px black, -1px 1px black, 1px -1px black, -1px -1px black'> Strona główna </h1>");
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`serwer wystartował na porcie ${port}`));