let	express = require('express')
let	app = express() // charger expressJS
let	bodyParser = require('body-parser')
let	session = require('express-session')

// définition du moteur de template
app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('public')) // donner le chemin pour trouver les fichiers statiques css. assets permet de différencier cdn / statique
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
	secret: 'lsakedhfjl',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false } // false bc no https
}))
app.use(require('./middlewares/flash'))

// Routes
app.get('/', (request, response) => {
	let	Message = require('./models/message')

	Message.all(function (messages) {
		response.render('pages/index', {messages: messages})
	})
	console.log(request.session)
})

app.post('/', (request, response) => {
	if (request.body.message === undefined || request.body.message === '')
	{
		request.flash('error', "Vous n'avez pas posté de message")
		response.redirect('/')
	}
	else
	{
		let Message = require('./models/message')

		Message.create(request.body.message, function () {
			request.flash('success', "Merci !")
		})
		response.redirect('/')
	}
})

app.get('/message/:id', (request, response) => {
	let Message = require('./models/message')

	Message.find(request.params.id, function (message) {
		response.render('message/show', {message: message})
	})
})

app.listen(8000)