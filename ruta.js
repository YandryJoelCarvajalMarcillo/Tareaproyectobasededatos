const express = require('express');
const crud = require('./controller/crud.js');
const User = require('./controller/user.js');
const user = new User();
const router = express.Router();
const path = require('path');
const notifier = require('node-notifier');


const conexion = require('./databases/db');

router.get('/', (req, res)=>{     
    
    res.sendFile(path.join(__dirname, '/index.html'));
})

router.get('/registro.html', (req,res)=>{
    res.sendFile(path.join(__dirname, './registro.html'));
    
})

router.get('/css/principal.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/principal.css'));
   
})
router.get('/css/articulos.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/articulos.css'));
 
})
router.get('/css/cookie.css', (req,res)=>{
    res.sendFile(path.join(__dirname, './css/cookie.css'));
    
})
router.get('https://kit.fontawesome.com/41bcea2ae3.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '.https://kit.fontawesome.com/41bcea2ae3.js'));
    console.log("registro");
})
router.get('/inicio.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '/inicio.html'));
    
})


router.get('/js/mostar.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/mostar.js'));
    
})
router.get('/img/img6.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img6.jpg'));
   
})
router.get('/img/img5.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img5.jpg'));
   
})
router.get('/img/img4.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img4.jpg'));
   
})
router.get('/img/img3.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img3.jpg'));
   
})
router.get('/img/img2.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img2.jpg'));
   
})
router.get('/img/img1.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/img1.jpg'));
   
})
router.get('/img/coleccion.jpg', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/coleccion.jpg'));
   
})
router.get('/css/style.css', (req,res)=>{
    res.sendFile(path.join(__dirname, '/css/style.css'));
   
})
router.get('/sesion.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '/sesion.html'));
   
})
router.get('/css/Inicio.css', (req,res)=>{
    res.sendFile(path.join(__dirname, '/css/Inicio.css'));
   
})
router.get('/img/close.png', (req,res)=>{
    res.sendFile(path.join(__dirname, '/img/close.png'));
   
})
router.get('/js/Inicio.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/Inicio.js'));
   
})

router.get('/js/form.js', (req,res)=>{
    res.sendFile(path.join(__dirname, '/js/form.js'));
    
   
})
router.get('/quienes.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '/quienes.html'));
    
   
})
router.get('/index.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
    
   
})




router.get('/app', function (req, res) {
    res.render('app', { 
        usuario: req.session.user
    });
});

router.post('/save', crud.save);
router.post('/login', (req, res, next) => {
    // The data sent from the user are stored in the req.body object.
    // call our login function and it will return the result(the user data).
    
    user.login(req.body.Correo, req.body.contraseña, function(result) {
       
        if(result) {
            // Store the user data in a session.
           
            notifier.notify('¡Sesion iniciado correctamente!');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            
            // redirect the user to the home page.
            res.sendFile(path.join(__dirname, '/index.html'));
           
        }else {
            // if the login function returns null send this error message back to the user.
            notifier.notify('Username/Password incorrect!');
            res.sendFile(path.join(__dirname, '/sesion.html'));
        }
    })

});


module.exports = router;