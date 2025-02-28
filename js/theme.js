const button = document.getElementById("theme-controller");
const body = document.body;

const colors = ["#F4F7FF", "#FAF3E0", "#E0F7FA", "#FCE4EC"];
let i = 0;

button.addEventListener("click", function () {
	if (i < colors.length - 1) {
		i++;
	} else {
		i = 0;
	}
	body.style.backgroundColor = colors[i];
});
