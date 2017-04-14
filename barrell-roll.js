document.addEventListener("keyup", function(e) {
	if (e.ctrlKey && e.key == "b") {
		document.body.className += " barrell-roll";
		setTimeout(function() {
			document.body.className = document.body.className.replace(" barrell-roll", "");
		}, 1000);
	}
});
