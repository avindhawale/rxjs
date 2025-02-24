rxjs.fromEvent(document.getElementById("startBtn"), "click").subscribe((e) => {
  console.log("clicked", e);
  if (e.target.innerText === "Start") {
    startTimerHandler();
    e.target.innerText = "Stop";
  } else {
    stopTimer();
    e.target.innerText = "Start";
  }
});

let intervalObs;
function startTimerHandler() {
  const timerEle = document.getElementById("timer");
  intervalObs = rxjs
    .interval(500)
    .pipe(rxjs.take(10), rxjs.repeat())
    .subscribe((n) => {
      console.log(10 - n);
      timerEle.innerHTML = "Timer : " + (10 - n);
    });
}

function stopTimer() {
  intervalObs.unsubscribe();
}
