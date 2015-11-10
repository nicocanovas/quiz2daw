var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite:
var sequelize = new Sequelize(null, null, null,
			{dialect: "sqlite", storage: "quiz.sqlite"}
		);

// Importar la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

// Importar la definición de la tabla User en user.js
var User = sequelize.import(path.join(__dirname, 'user'));

// Importar la definición de la tabla Profesor en profesor.js
var Profesor = sequelize.import(path.join(__dirname, 'profesor'));

// Importar la definición de la tabla Alumno en alumno.js
var Alumno = sequelize.import(path.join(__dirname, 'alumno'))

var Grupo = sequelize.import(path.join(__dirname, 'grupo'));

// sequelize.sync() crea e inicializa tabla de preguntas en DB
sequelize.sync().then(function() {
	// then(..) ejecuta el manejador una vez creada la tabla
	Quiz.count().then(function(count) {
		if(count === 0) { // la tabla se inicializa solo si está vacía
		Quiz.create({ pregunta: 'Capital de Italia' ,
					  respuesta: 'Roma'
		});
		Quiz.create({ pregunta: 'Capital de Portugal' ,
					  respuesta: 'Lisboa'
		})
		.then(function(){console.log('Tabla Quiz inicializada')});
		};
	});
	User.count().then(function(count) {
		if(count === 0) { // la tabla se inicializa solo si está vacía
		User.create({ username: 'admin' ,
					  password: '1234'
		});
		User.create({ username: 'pepe' ,
					  password: '5678'
		})
		.then(function(){console.log('Tabla User inicializada')});
		};
	});
	Profesor.count().then(function(count) {
		if(count === 0) { // la tabla se inicializa solo si está vacía
		Profesor.create({ apellidos: 'Sierra Olmos' ,
					  nombre: 'Alberto',
					  email: 'albertosierra@gmail.com',
					  dni: '12345678E',
					  movil: '699699699',
					  departamento: 'Informatica'
		})
		.then(function(){console.log('Tabla Profesor inicializada')});
		};
	});
	Alumno.count().then(function(count) {
		if(count === 0) { // la tabla se inicializa solo si está vacía
		Alumno.create({ dni: '52748123A',
						apellido1: 'Pérez',
						apellido2: 'López',
						nombre: 'Juan',
						email: 'Juan@gmail.com'
		});
		Alumno.create({ dni: '65127382S',
						apellido1: 'Blazquez',
						apellido2: 'Guijarro',
						nombre: 'Davida',
						email: 'Davida@gmail.com'
		})
		.then(function(){console.log('Tabla Alumno inicializada')});
		};
	});
	Grupo.count().then(function(count) {
		if(count === 0) { // la tabla se inicializa solo si está vacía
		Grupo.create({ tutor: 'jose' ,
					  anyo: '2015' ,
					  grupo: "DAW" ,
					  subgrupo: "DAW" ,
					  ensenanza: "FP" ,
					  curso: "2" ,
					  horarioVisita: "12:00"
		});
		Grupo.create({ tutor: 'alberto' ,
					  anyo: '2015' ,
					  grupo: "DAW" ,
					  subgrupo: "DAW" ,
					  ensenanza: "FP" ,
					  curso: "1" ,
					  horarioVisita: "12:00"
		})
		.then(function(){console.log('Tabla Grupo inicializada')});
		};
	});
});

var comment_path = path.join(__dirname, 'comment');
var Comment = sequelize.import(comment_path);

Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);

Profesor.belongsTo(User);
User.hasMany(Profesor, {foreignKey: 'idUsuario'});

Grupo.belongsTo(Profesor);
Profesor.hasMany(Grupo, {foreignKey: 'nombre'});

exports.Quiz = Quiz; 
exports.Comment = Comment;
exports.User = User;
exports.Profesor = Profesor;
exports.Alumno = Alumno;

exports.Quiz = Quiz; 
exports.Comment = Comment;
exports.User = User;
exports.Grupo = Grupo;
