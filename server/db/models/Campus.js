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
    defaultValue: '',
    description: Sequelize.TEXT('large'),
  }
});

module.exports = {
  Campus
};
