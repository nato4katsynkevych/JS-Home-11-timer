// const { log } = require("handlebars");

const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');



class CountdownTimer {

	constructor(currentTime, targetTime) {
		this.currentTime = currentTime;
		this.targetTime = targetTime;
	}

};


setInterval(() => {
	const currentTime = Date.now();
	const newDate = new Date('Jan 17, 2023');
	const targetTime = newDate.getTime();
	const time = targetTime - currentTime;
	counter(time)
	// daysRef.textContent = days;
	console.log(counter(time));
}, 1000);




function counter(time) {
	const days = Math.floor(time / (1000 * 60 * 60 * 24));
	const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
	const secs = Math.floor((time % (1000 * 60)) / 1000);
	daysRef.textContent = `${days}`;
	hoursRef.textContent = `${hours}`;
	minsRef.textContent = `${mins}`;
	secsRef.textContent = `${secs}`;

	// const hoursRef = document.querySelector('[data-value="hours"]');
	// const minsRef = document.querySelector('[data-value="mins"]');
	// const secsRef = document.querySelector('[data-value="secs"]');
	return `
${days}:${hours}:${mins}:${secs}`
}


