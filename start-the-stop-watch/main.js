var $button = document.getElementById('button')
var $time = document.getElementById('time')

var seconds = 0

$button.addEventListener('click', function update () {
    setInterval(function () {
    seconds ++
    $time.textContent = seconds
  }, 1000)
})
