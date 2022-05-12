let modal = document.querySelector(".modal");
let trigger = document.querySelector(".popup");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
	modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
