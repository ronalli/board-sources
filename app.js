const board = document.querySelector('#board');
const count = document.querySelector('#count')
let maxCount = 0;
let rangeInput = document.querySelector('#range-board');

rangeInput.addEventListener('change', (e) => {
	board.innerHTML = ''
	maxCount = rangeInput.value;
	count.innerHTML = maxCount;
	console.log(rangeInput.value);
	for (let i = 0; i < maxCount; i++) {
		let square = document.createElement('div');
		square.classList.add('square');
		board.append(square)

		square.addEventListener('mouseover', () => {
			let color = randomColor();
			square.style.background = `${color}`;
			square.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`
			square.style.transform = 'scale(0.8)'
		})
		square.addEventListener('mouseout', () => {
			setTimeout(() => {
				square.style.background = '';
				square.style.borderColor = ``;
				square.style.boxShadow = '0 0 2px #111'
				square.style.transform = 'scale(1)'
			}, 500)

		})

	}
})


function randomColor() {
	const MIN = 0;
	const MAX = 255;
	let red = Math.floor(MIN + Math.random() * (MAX + 1 - MIN));
	let green = Math.floor(MIN + Math.random() * (MAX + 1 - MIN));
	let blue = Math.floor(MIN + Math.random() * (MAX + 1 - MIN));

	return `rgb(${red}, ${green}, ${blue})`;
}


// randomColor();