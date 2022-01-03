const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const port = 4444;

app.get('/', function (req, res) {
    const htmlFile = path.join(__dirname, "views/index.html");
    res.sendFile(htmlFile);


});

app.get('/myusers', (req, res) => {
    res.sendFile(path.join(__dirname, "data/users.json"));
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, "views/style.css"));
});


app.get('/user', (req, res) => {
    res.json([{
        'name': 'Lévai Levente',
        'email': 'levlev324@gmail.com',
        'tel': '06204061051'
    }]);

});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, "public/script.js"));
});

app.get('*', function (req, res) {
    res.redirect('/');
});

app.post("/users", (req, res) => {
    let myData = '';
    req.on('data', (chunk) => {
        myData += chunk.toString();
    });
    req.on('end', () => {
        const ujUser = JSON.parse(myData);

        fs.readFile('./data/users.json', (err, data) => {
            let datas = JSON.parse(data);
            datas.push({
                "nev": ujUser.name,
                "email": ujUser.email,
                "tel": ujUser.tel


            });
            fs.writeFile('./data/users.json', JSON.stringify(datas), () => {
                res.end(JSON.stringify(datas));

            })
        })
    })
})


app.listen(port);