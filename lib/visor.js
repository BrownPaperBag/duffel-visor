module.exports = {
  prepareRenderer: function(req, res) {
    return {
      render: function(req) {
        return '<strong>I AM VISOR</strong>';
      }
    }
  }
}
