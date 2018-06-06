'use strict';
module.exports = (sequelize, DataTypes) => {

  var PessoaExterna = sequelize.define('PessoaExterna', {

      nome: DataTypes.STRING,
      DocumentoTipo: DataTypes.STRING,
      DocumentoNumero: DataTypes.STRING,
      Entidade: DataTypes.STRING,
      Grupo: DataTypes.STRING,
      TelefoneFixo: DataTypes.STRING,
      TelefoneMovel: DataTypes.STRING,
      Email: DataTypes.STRING,

  }, {
        freezeTableName: true,
        tableName: 'ncPessoaExterna',
        timestamps: false
  });
  PessoaExterna.associate = function(models) {
    // associations can be defined here
  };
  return PessoaExterna;
};