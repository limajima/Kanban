'use strict';
const { encrypt } = require('../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Kanban)
      User.hasMany(models.Category)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: {
        arg: true,
        msg: "Username must be unique"
      },
      validate: {
        notEmpty: {
          msg: "Username needed"
        },
        len: {
          args: [5],
          msg: "Username minimum 5 characters"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        arg: true,
        msg: "Email must be unique"
      },
      validate: {
        notEmpty: {
          msg: "Email needed"
        },
        isEmail: {
          args: true,
          msg: "Invalid email"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Password needed"
        },
        len: {
          args: [5],
          msg: "Password minimum 5 characters"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (instance) => {
        instance.password = encrypt(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};