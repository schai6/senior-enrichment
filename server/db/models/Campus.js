const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/planets/earth.jpg',
  },
  description: {
    type: Sequelize.TEXT('large'),
    defaultValue: ''
  }
});

module.exports = {
  Campus
};
