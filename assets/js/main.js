// $('[data-fancybox="gallery"]').fancybox();
const buttonMoreProject = document.querySelector(".lug__button__more__project");
const lugYearNow = document.querySelector(".lug__year__now");
const githubURL = "https://github.com/rickydamarsaputra";

buttonMoreProject.addEventListener("click", (e) => {
	window.location = githubURL;
});

lugYearNow.innerHTML = new Date().getFullYear();
