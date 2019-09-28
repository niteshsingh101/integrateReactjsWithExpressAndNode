var express = require('express');
var app = express();

app.get('/api/users', (req, res) => {
    const users = [
        {id:1, name: 'Nitesh'},
        {id:2, name: 'Dhananjay'},
        {id:3, name: 'Vijay'}
    ];
    res.json(users);
}

);

app.listen(5000, () => {
    console.log("Server is runing on Port : 5000");
})