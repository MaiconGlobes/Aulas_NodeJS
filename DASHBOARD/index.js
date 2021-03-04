const express     =  require('express');
const app         =  express();
const handlb      =  require('express-handlebars');
const bodyParser  =  require('body-parser');
const session     =  require('express-session');
const flash       =  require('connect-flash');

/*DECLARACAO VARIAVEIS/CONST*/
const home        =  require('./routes/home')
const lista       =  require('./routes/list');
const deletar     =  require('./routes/delete');
const enviar      =  require('./routes/send');

/*CONFIG SESSAO*/
app.use(session({
   secret            : "vexor-123",
   resave            : true,
   saveUninitialized : true
}));

app.use(flash());
app.use((req,res,next)=>{
   res.locals.msgSuccess = req.flash('msgSuccess');
   res.locals.msgError   = req.flash('msgError');
   next();
})

/*CONFIG. HANDLEBARS*/
app.engine('handlebars', handlb({ defaultLayout: 'initial' }))
app.set('view engine', 'handlebars');

/* CONFIG. BODY-PASER*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*CONFIG. ESTILIZAÇÃO CSS*/
app.use(express.static('public'));

/*CONFIG. GRUPO ROTAS*/
app.use('/', home);
app.use('/', lista);
app.use('/', deletar);
app.use('/', enviar);

app.listen(3000);