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
    }, function (err) {
      $log.debug(err);
    });

  vm.key = function ($event) {
    $log.debug($event.keyCode);
    if ($event.keyCode === 38) {
      $log.debug('up arrow');
    }
    else if ($event.keyCode === 39) {
      $log.debug('right arrow');
    }
    else if ($event.keyCode === 40) {
      $log.debug('down arrow');
    }
    else if ($event.keyCode === 37) {
      $log.debug('left arrow');
    }
    var video = document.getElementById('vid');
    var frameTime = 5; // assume 25 fps
    if (video.paused) {
      // or you can force it to pause here
      if ($event.keyCode === 37) {
        // left arrow
        if (video.currentTime > 0) {
          // one frame back
          video.currentTime -= frameTime;
          $log.debug(video.currentTime);
        }
      } else if ($event.keyCode === 39) {
        // right arrow
        $log.debug('Condition', video.currentTime < video.duration);
        if (video.currentTime < video.duration) {
          // one frame forward
          // Don't go past the end, otherwise you may get an error
          video.currentTime = Math.min(video.duration, video.currentTime + frameTime);
          $log.debug('Current Time : ', video.currentTime, ' Total : ', video.duration);
        }
      }
    }
  };
}
