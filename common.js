var	formSearch = document.querySelector('.search'),
		inputSearch = formSearch.children[0].children[0],
		btnSearch = formSearch.children[0].children[1];

var query = "";

setInterval(function () {
	if (!(inputSearch.value == "")){
		formSearch.classList.add('search-active');
	} else {
		formSearch.classList.remove('search-active');
	}}, 100);

if (window.getSelection){
	setInterval(function () {
		query = window.getSelection().toString();
		inputSearch.value = query;
	}, 10);
	btnSearch.addEventListener('click', function () {
		window.open('https://www.google.com/search?q='+query+'&oq='+query+'&sourceid=chrome&ie=UTF-8&gws_rd=ssl');
	});
} else if (document.selection){
	setInterval(function () {
		query = document.selection.createRange().text;
		inputSearch.value = query;
	}, 10);
	btnSearch.addEventListener('click', function () {
		window.open('https://www.google.com/search?q='+query+'&oq='+query+'&sourceid=chrome&ie=UTF-8&gws_rd=ssl');
	});
}