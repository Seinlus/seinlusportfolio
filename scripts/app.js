//=============================images to show ===================
const images = [{
		id: 1,
		img: "./images/p-image-1.jpg",
	},
	{
		id: 2,
		img: "./images/p-image-2.jpg",
	},
	{
		id: 3,
		img: "./images/p-image-3.jpg",
	},
	{
		id: 4,
		img: "./images/p-image-4.jpg",
	},
	{
		id: 5,
		img: "./images/p-image-5.jpg",
	},
	{
		id: 6,
		img: "./images/p-image-6.jpg",
	},

]

const projectItems =
	document.querySelector(".project-items")

window.addEventListener('DOMContentLoaded', () => {
	let displayImages = images.map((item) => {
		return `<div class="single-item">
		<img src=${item.img} alt="sein" />
	</div>`
	}).join("")
	projectItems.innerHTML = displayImages;
})
//=============== navbar toggle for mobile====================
const toggle = document.querySelector('.show-menu');
const bar = document.querySelector('.sidebar');
const cancel = document.querySelector('.close-bar');
toggle.addEventListener('click', () => {
	if (!bar.classList.contains('show-sidebar')) {
		bar.classList.add('show-sidebar');
		cancel.classList.remove('hide-menu');
		toggle.classList.add('hide-menu')
	}
});
cancel.addEventListener('click', () => {
	if (!cancel.classList.contains('hide-menu')) {
		bar.classList.remove('show-sidebar');
		cancel.classList.add('hide-menu')
		toggle.classList.remove("hide-menu")
	}
});

// ================== close nav on clicking a link ===============
const links = document.querySelectorAll(".scroll")
for (let i = 0; i < links.length; i++) {
	links[i].addEventListener("click", () => {
		bar.classList.remove('show-sidebar')
		cancel.classList.add('hide-menu')
		toggle.classList.remove("hide-menu")
	})
}

// Dynamic date at the footer
const year = document.getElementById('date')
const date = new Date().getFullYear()
year.innerText = date