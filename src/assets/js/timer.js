var countDownDate = new Date("Jul 31, 2021 13:0:0").getTime()
var x = setInterval(function () {
	var now = new Date().getTime()
	var distance = countDownDate - now
	var days = Math.floor(distance / (1000 * 60 * 60 * 24))
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	var seconds = Math.floor((distance % (1000 * 60)) / 1000)
	document.getElementById("days").innerHTML = days + "d "
	document.getElementById("hours").innerHTML = +hours + "h "
	document.getElementById("minutes").innerHTML = +minutes + "m "
	document.getElementById("seconds").innerHTML = +seconds + "s "
	if (distance < 0) {
		clearInterval(x)
		document.getElementById("days").innerHTML = "00"
		document.getElementById("hours").innerHTML = "00"
		document.getElementById("minutes").innerHTML = "00"
		document.getElementById("seconds").innerHTML = "00"
	}
}, 1000)
