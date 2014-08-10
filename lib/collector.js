var __ = require('lodash');

var visorItems = {};

module.exports = {
  add: function(name, items) {
    if (!name) {
      throw new Error('Name must be provided');
    }
    if (!items) {
      throw new Error('Items must be provided');
    }

    if (!visorItems[name]) {
      visorItems[name] = items;
      return;
    }

    __.merge(visorItems[name], items);
  },
  getItemsForUser: function getItemsForUser(user) {
    if (!user) {
      return [];
    }
    var userItems = [];
    Object.keys(visorItems).forEach(function(item) {
      item = visorItems[item];
      if (user.super || user.hasPermission(item.permission)) {
        userItems.push(item);
      }
    });
    return userItems;
  }
};
