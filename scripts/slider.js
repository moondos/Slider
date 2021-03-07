// Define variables
const entities = [
	{
		city: 'Rostov-on-Don<br />LCD admiral',
		square: '81 m2',
		time: '3.5 months',
		img: 'images/image_2.1.jpg',
	},
	{
		city: 'Sochi<br />Thieves',
		square: '105 m2',
		time: '4 months',
		img: 'images/image_2.2.jpg',
	},
	{
		city: 'Rostov-on-Don<br />Patriotic',
		square: '93 m2',
		time: '3 months',
		img: 'images/image_2.3.jpg',
	},
];

const img = document.querySelector('.projects-image');
const img_mob = document.querySelector('.projects-image__mob');
const city = document.querySelectorAll('.projects-data')[0];
const square = document.querySelectorAll('.projects-data')[1];
const time = document.querySelectorAll('.projects-data')[2];
const items = document.querySelectorAll('.projects-photos__item a');
const prev = document.querySelector('.btn-left');
const next = document.querySelector('.btn-right');
const prev_mob = document.querySelectorAll('.projects-button')[0];
const next_mob = document.querySelectorAll('.projects-button')[1];
const dots = document.querySelectorAll('.projects-navigation-item');

let currentIndex = 0;
let entitiesLength = entities.length;

// Main function of changing data
const setEntity = (index) => {
	city.innerHTML = entities[index].city;
	square.innerHTML = entities[index].square;
	time.innerHTML = entities[index].time;
	img.src = entities[index].img;
    img_mob.src = entities[index].img;
};

// Changing active name
const activeItem = (items, index) => {
	items.forEach((item) => {
		item.classList.remove('item-active');
	});
	items[index].classList.add('item-active');
};


// Changing the dots' color
const activeDot = (dots, dot) => {
	dots.forEach((dot) => {
		dot.classList.remove('dot-active');
	});
	dot.classList.add('dot-active');
};


// Arrow navigation
function prevImg() {
	if (currentIndex === 0) {
		currentIndex = entitiesLength - 1;
	} else {
		currentIndex -= 1;
	}
	setEntity(currentIndex);
	activeItem(items, currentIndex);
	activeDot(dots, dots[currentIndex]);
}

function nextImg() {
	if (currentIndex === entitiesLength - 1) {
		currentIndex = 0;
	} else {
		currentIndex += 1;
	}
	setEntity(currentIndex);
	activeItem(items, currentIndex);
	activeDot(dots, dots[currentIndex]);
}

prev.addEventListener('click', prevImg)
next.addEventListener('click', nextImg)
prev_mob.addEventListener('click', prevImg)
next_mob.addEventListener('click', nextImg)

// Link navigation
items.forEach((item, i) => {
	item.addEventListener('click', () => {
		currentIndex = i;
		setEntity(currentIndex);
		activeItem(items, currentIndex);
		activeDot(dots, dots[currentIndex]);
	});
});

// Dot navigation
dots.forEach((dot, i) => {
	dot.addEventListener('click', () => {
		activeDot(dots, dot);
		currentIndex = i;
		setEntity(currentIndex);
		activeItem(items, currentIndex);
	});
});