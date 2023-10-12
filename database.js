const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://wubmzmyc:5Ii3advcs9QGQsAIBhWXf5buiU67OjnV@silly.db.elephantsql.com/wubmzmyc', {
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

module.exports = sequelize;