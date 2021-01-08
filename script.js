$(document).ready(function(){
	var key = "1d14c3832195d9e3574e88e575f558ef";
	$("#displayForecast").hide();
	$("#button-addon2").on("click",function(){
		$("#displayForecast").show();
		var city =  $("#citySearch").val()
		console.log(city)
		currentWeather(city)
	})

	function currentWeather(city){
	console.log(city);
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + key,
		method: "GET"
	}).then(function(response){
		console.log(response)
		$("#currentCity").text(response.name);
		$("#temperature").text("Temperature: " + response.main.temp + "°F");
		$("#humidity").text("Humidity: " + response.main.humidity + " %");
		$("#windSpeed").text("Windspeed: " + response.wind.speed  + " MPH");
		$("#uvIndex").text()
	})

	}





	
});