var $button = document.getElementById('button')
var $time = document.getElementById('time')
var $reset = document.getElementById('reset')
var $limit = document.getElementById('limitBox')

var seconds = 0
var intervalId = -1

$button.addEventListener('click', function () {
  start()
  $reset.classList.toggle('is-hidden')
  tick()
})

$reset.addEventListener('click', function () {
  resetTimer()
  $reset.classList.toggle('is-visible')
})

function start () {
  if (intervalId === -1) {
    $button.textContent = "Pause"
    intervalId = setInterval(function () {
    seconds ++
    $time.textContent = seconds
    }, 1000)
  } else {
    $button.textContent = "Start"
    clearInterval(intervalId)
    intervalId = -1
  }
}

function stopTimer () {
  clearInterval(intervalId)
}

function resetTimer () {
  stopTimer()
  seconds = 0
  $time.textContent = seconds
}

function tick () {
  if ($limit.textContent === $time.textContent) {
    stopTimer ()
    window.alert("Stop!")
  }
}
