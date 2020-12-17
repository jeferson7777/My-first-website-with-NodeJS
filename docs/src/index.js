const express = require('express');  //llamamos a express
const app = express(); // el modulo express nos va a devolver un objeto, dentro de la constante app, esa const app es en realidad el SERVIDOR
const path = require('path'); // une directorio si esta en windows o linux


//settings
app.set('port', 3000); // constante para poder modificar mi puerto desde aquí - constantes que pueden ser accedidas
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile); //para poder usar ejs pero usando html como extension
app.set("view engine", "ejs"); //Para decir que motor de plantilla estamos usando



//middlewares




//routes
app.use(require('./routes/index')); //importado





//static files
app.use(express.static(path.join(__dirname, 'public')))




//listening the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});