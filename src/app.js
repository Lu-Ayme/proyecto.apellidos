const express = require ('express');
const app= express();
const router = require ('../src/routes/home')

const PORT= 3030;
app.set('view engine', 'ejs');
app.use('views', './src/views')

app.use(express.static('public'));
app.use(router);

app.listen(PORT, ()=>{
    console.log('corriendo en el puerto: ' +PORT);
});