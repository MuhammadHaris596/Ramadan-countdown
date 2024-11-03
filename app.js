

var date = new Date(" Feb 28 , 2025").getTime()
var newdate = new Date().getTime()
var result = date - newdate

var months = Math.round(result / (1000 *60 *60 *24 *30 ))
console.log(months)
document.getElementById("months").innerHTML = `<span> ${months}</span>`


var days = Math.round(result / (1000 *60 *60 *24 ))
console.log(days)
document.getElementById("days").innerHTML = `<span> ${days}</span>`


var hours = Math.round(result / (1000 *60 *60 ))
console.log(hours)
document.getElementById("hours").innerHTML = `<span> ${hours}</span>`

var minutes = Math.round(result / (1000 *60))
console.log(minutes)

document.getElementById("minutes").innerHTML = `<span> ${minutes}</span>`











// document.getElementById("months").innerHTML = `<span> ${months}</span>`




