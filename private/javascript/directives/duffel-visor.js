(function() {
  angular.module('duffel-visor', [])
  .directive('duffelVisor', function() {
    return {
      link: function(scope, element, attributes) {
        $('body').css({
          paddingTop: 50
        });
      }
    };
  });
})();
