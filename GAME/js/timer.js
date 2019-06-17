 ;

function Timer () {
  let duration= 5;
  this.add = function(time){
    duration+=time;
    console.log(duration);
  }
  this.startTimer=function() {
    let minutes, seconds;

  let interval =  setInterval(function () {
    console.log(duration);
        minutes = parseInt(duration / 60, 10)
        seconds = parseInt(duration % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

      $('.timer').text(minutes + ":" + seconds);

        if (--duration < 0) {
          clearInterval(interval);
          for (box of boxes){
            box.style.backgroundColor = "grey";
          }
        }
    }, 1000);
  }
}
