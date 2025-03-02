function completeTask(button, e, card_title) {
	e.preventDefault();

	const TaskAssignNum = parseInt(
		document.getElementById("task-assign-num").innerText
	);
	const completeTaskNum = parseInt(
		document.getElementById("complete-task-num").innerText
	);
	const taskTitle = document.getElementById(card_title).innerText;
    console.log(taskTitle);
    

	const currentTaskAssNum = TaskAssignNum - 1;
	document.getElementById("task-assign-num").innerText =
		"0" + currentTaskAssNum;

	const currentCompleteTaskNum = completeTaskNum + 1;
	document.getElementById("complete-task-num").innerText = currentCompleteTaskNum;

	const container = document.getElementById("task-complete-container");
	const div = document.createElement("div");
	div.innerHTML = `
        <div class="p-3">
            <p class="bg-[#F4f7FF] p-3 rounded-lg">
              You have completed the task ${taskTitle} at ${currentTime()}.
            </p>
          </div>
        `;

	container.appendChild(div);

	button.style.backgroundColor = "gray";

	alert("Board Updated Successfully");

	if (currentTaskAssNum === 0) {
		alert("Congrats!!! You have completed all the current tasks!");
	}
	button.disabled = true;
}

function currentTime() {
	let now = new Date();

	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let ampm;

	if (hours >= 12) {
		ampm = "PM";
	} else {
		ampm = "AM";
	}

	if (hours > 12) {
		hours = hours - 12;
	} else if (hours === 0) {
		hours = 12;
	}

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}

	return hours + ":" + minutes + ":" + seconds + " " + ampm;
}
