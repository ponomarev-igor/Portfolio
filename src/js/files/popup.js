let modal = document.querySelector(".modal");
let trigger = document.querySelector(".popup");
let closeButton = document.querySelector(".close-button");
const body = document.body;
function toggleModal() {
	modal.classList.toggle("show-modal");
 	body.classList.toggle("_lock")
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();

	}
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



