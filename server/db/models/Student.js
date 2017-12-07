const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 2),
    validate: {
      min: 0.0,
      max: 4.0
    }
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName');
    }
  }
});

module.exports = {
  Student
};
