const express = require ('express');
const app = express();
const data = require ('./data.json');

app.use(express.json());

app.get('/clients', function(req, res){
    res.json(data);
});


app.get('/clients/:id', function(req, res){
    //pegando cliente pelo id.
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    //Se o cliente não existir, enviamos uma resposta, lá das boas práticas...

    if(!client) return res.status(204).json();


    res.json(client);

});


app.post('/clients', function(req, res){
    //enviando novas informações para nossa api e salvando elas.
    const { name, email } = req.body;

    //save new client
    res.json({name, email});
});


app.put('/clients/:id', function(req, res){
    //atualizando as infos da nossa API
    //vamos precisar da nossa id e do client

    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;

    res.json(client);
});


app.delete('/clients/:id', function(req, res){
    //deletando um cliente

    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered);
});



app.listen(3000, function(){
    console.log('Server is running');
});