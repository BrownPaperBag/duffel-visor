var visorItems = [];

module.exports = {
  add: function(items) {
    visorItems.push(items);
  },
  getItemsForUser: function getItemsForUser(user) {
    var userItems = [];
    visorItems.forEach(function(item) {
      //if (user.hasPermission(item.permission)) {
        userItems.push(item);
      //}
    });
    return userItems;
  }
}
