var $button = document.getElementById('button')
var $time = document.getElementById('time')

var seconds = 0

$button.addEventListener('click', function () {
  if (seconds >= 0) {
    seconds += 1
    $time.textContent = seconds
  }
})
