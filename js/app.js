const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

function clock () {
	const date = new Date()
	hour.innerHTML = date.getHours()
	minute.innerHTML = date.getMinutes()
	second.innerHTML = date.getSeconds()
}
clock()
setInterval(clock, 1000)