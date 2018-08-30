var $button = document.getElementById('button')
var $time = document.getElementById('time')
var $reset = document.getElementById('reset')

var seconds = 0
var intervalId = -1
var currentTimer = 0

$button.addEventListener('click', function update () {
  if (intervalId === -1) {
    intervalId = setInterval(function () {
    seconds ++
    $time.textContent = seconds
    }, 1000)
  } else {
    clearInterval(intervalId)
    intervalId = -1
  }
})

$reset.addEventListener('click', resetTimer)

function stopTimer () {
  clearInterval(intervalId)
}

function resetTimer () {
  stopTimer()
  currentTimer = 0
  $time.textContent = currentTimer
}

$button.addEventListener('click', function () {
  $button.classList.toggle('is-clicked')
  $reset.classList.toggle('is-hidden')
})
