const tabItems = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');
function selectItem(e) {
	this.classList.add('tab-border');
	// body...
}



tabItems.forEach(item => item.addEventListener('click',selectItem));