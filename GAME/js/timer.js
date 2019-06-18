 ;

function Timer () {
  let duration;
  let interval;
  this.addTime = function(time){duration += time;};
  this.stopTime = function(){
    clearInterval(interval);
    for (box of boxes()){
      box.style.backgroundColor = "grey";
    }
  };
  this.startTimer=function() {
    duration = 30;
    let minutes, seconds;

  interval =  setInterval(function () {

        minutes = parseInt(duration / 60, 10)
        seconds = parseInt(duration % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

      $('.timer').text(minutes + ":" + seconds);

        if (--duration < 0) {
          clearInterval(interval);
          for (box of boxes()){
            box.style.backgroundColor = "grey";
          }
        }
    }, 1000);
  }
}
