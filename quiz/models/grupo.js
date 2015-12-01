//Definici�n del modelo de Grupo

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Grupo',
	{
		tutor: {
			type: DataTypes.STRING,
		},
		anyo: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "->Falta A�o"}}
		},
		grupo: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "->Falta Grupo"}}
		},
		subgrupo: {
			type: DataTypes.STRING,
			validate: {notEmpty: {msg: "->Falta Subgrupo"}}
		},
		ensenanza: {
			type: DataTypes.STRING
		},
		curso: {
			type: DataTypes.INTEGER
		},
		horarioVisita: {
			type: DataTypes.STRING
		}
	});
}