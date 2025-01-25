
import express from 'express';

const ExpressApp = express(); 
const PORT = 3000;

ExpressApp.get('/guardar_usuario/:id', (req, res) => {
  res.send('respuesta')
})

ExpressApp.listen(PORT, () => console.log("Escuchando en el puerto", PORT));

// const httpServer = createServer( (req, res) =>{
//   console.log("Peticion recibida");

//   res.end("Recibido")
// });

// httpServer.listen(3000);