module.exports = {
  template: require('./module.html'),
  controller: moduleController
};

function moduleController($http, $log, $stateParams) {
  var vm = this;
  $http.get('../app/techs/techs.json')
    .then(function (response) {
      response.data.forEach(function (data) {
        if (data.id === $stateParams.id) {
          vm.module = data;
        }
      });
      $log.debug(vm.module);
    }, function (err) {
      $log.debug(err);
    });
}
