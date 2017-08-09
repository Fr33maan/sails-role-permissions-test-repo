/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#!/documentation/concepts/ORM
 */

module.exports.permissions = {

  debug : {
    message : true,
    stack : true,
    filters : true
  },

  roles: [

    'admin',
    'mySpecialRole',
    'underSpecialRole',
    'anyRole'

  ],

  video : {
    // Thoses 3 routes are authenticated as "mySpecialRole"
    create: true,
    find: false,
    delete: 'mySpecialRole',

    // This 2 routes are authenticated as "underSpecialRole"
    allowAccess: 'underSpecialRole',
    denyAccess: 'mySpecialRole',
  }
};
