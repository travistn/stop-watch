var $button = document.getElementById('button')
var $time = document.getElementById('time')

var seconds = 0
var intervalId = -1

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
