
		// Show history by clicking on searchbar
let mainpageSearchbar = document.querySelector(".searchBar");
mainpageSearchbar.addEventListener("click", showSearchProperties);

function showSearchProperties() {
	document.body.innerHTML = `
		<div class="container search-active">
		<div class="input-container">
			<div class="searchBar mainpage-searchbar search-active">
				<i class="fa fa-search" aria-hidden="true"></i>
				<input id="infoInput" type="text">
			</div>
			<h2 class="buttonTwoFont cancel-button">Отмена</h2>
		</div>
		<div class="search-categories-container">
			<button class="token-small buttonTwoFont search-categories" id="find-tea">Чай</button>
			<button class="token-small buttonTwoFont search-categories" id="find-users">Пользователи</button>
			<button class="token-small buttonTwoFont search-categories" id="find-tags">Теги</button>
		</div>
		<hr class="search-definer">
		<div class="history-info-container">
			<div class="title-block">
				<button class="buttonTwoFont main-search-title">История</button>
				<button class="buttonTwoFont main-search-title">Очистить</button>
			</div>
			<div class="history-search-queries-block">
				<button class="captionOneFont search-query">Лишань Габа Улун</button>
				<button class="captionOneFont search-query">Те Гуань Инь «Богиня милосердия»</button>
				<button class="captionOneFont search-query">Ланьхуа Фэн Жоу Гуй</button>
			</div>
		</div>
	</div>
	`;
var cancelButton = document.querySelector(".cancel-button");
nav_tokens = document.querySelectorAll("button.nav-token")
mainpageSearchbar.addEventListener("click", showSearchProperties);
cancelButton.addEventListener("click", hideSearchProperties);
nav_tokens.forEach(item => item.addEventListener("click", targetNavProps));
generateCardBg()
}

		// hide history by clicking on cancel button

function hideSearchProperties() {
	document.body.innerHTML = `
	<div class="container">
		<div class="navigation-block">
			<div class="searchBar">
				<i class="fa fa-search" aria-hidden="true"></i>
				<input id="infoInput" type="text">
			</div>
			<div class="nav-container">
				<button class="token-default buttonOneFont nav-token" id="forYou-prop">Для тебя</button>
				<button class="token-second buttonOneFont nav-token" id="view-prop">По виду</button>
				<button class="token-second buttonOneFont nav-token" id="feelings-prop">По ощущениям</button>
				<button class="token-second buttonOneFont nav-token" id="random-props">Случайный чай</button>
			</div>
		</div>

		<div class="section-title-container">
			<h2 class="headerTwoFont section-title" id="seciton-title">Для тебя</h2>
		</div>


		<div class="card-container">
			
			<div class="card">
				<div class="infoBx">
					<h1 class="headerOneFont" id="teaName">Лишань Габа Улун</h1>
					<p class="captionTwoFont" id="teaKind">Тайваньский улун</p>
					<hr class="definer">
					<p class="captionTwoFont" id="teaStats">Расслабляет, кислый, плотный</p>		
				</div>
				<div class="optionBx">
					<img class="arrowRight" src="../icons/arrowRight.svg" alt="/img/arrowRight.svg">
					<img id="teaImg" src="../img/teaImg.png" alt="Tea image">
				</div>
			</div>
			<div class="card">
				<div class="infoBx">
					<h1 class="headerOneFont" id="teaName">Ланьхуа Фэн Жоу Гуй</h1>
					<p class="captionTwoFont" id="teaKind">Уишаньский улун</p>
					<hr class="definer">
					<p class="captionTwoFont" id="teaStats">Расслабляет, кислый, плотный</p>		
				</div>
				<div class="optionBx">
					<img class="arrowRight" src="../icons/arrowRight.svg" alt="/img/arrowRight.svg">
					<img id="teaImg" src="../img/teaImg.png" alt="Tea image">
				</div>
			</div>
			<div class="card">
				<div class="infoBx">
					<h1 class="headerOneFont" id="teaName">Те Гуань Инь «Богиня милосердия»</h1>
					<p class="captionTwoFont" id="teaKind">Южнофуцьзяньский улун</p>
					<hr class="definer">
					<p class="captionTwoFont" id="teaStats">Расслабляет, кислый, плотный</p>		
				</div>
				<div class="optionBx">
					<img class="arrowRight" src="../icons/arrowRight.svg" alt="/img/arrowRight.svg">
					<img id="teaImg" src="../img/teaImg.png" alt="Tea image">
				</div>
			</div>
			<div class="card">
				<div class="infoBx">
					<h1 class="headerOneFont" id="teaName">Лишань Габа Улун</h1>
					<p class="captionTwoFont" id="teaKind">Тайваньский улун</p>
					<hr class="definer">
					<p class="captionTwoFont" id="teaStats">Расслабляет, кислый, плотный</p>		
				</div>
				<div class="optionBx">
					<img class="arrowRight" src="../icons/arrowRight.svg" alt="/img/arrowRight.svg">
					<img id="teaImg" src="../img/teaImg.png" alt="Tea image">
				</div>
			</div>
			<div class="card">
				<div class="infoBx">
					<h1 class="headerOneFont" id="teaName">Лишань Габа Улун</h1>
					<p class="captionTwoFont" id="teaKind">Тайваньский улун</p>
					<hr class="definer">
					<p class="captionTwoFont" id="teaStats">Расслабляет, кислый, плотный</p>		
				</div>
				<div class="optionBx">
					<img class="arrowRight" src="../icons/arrowRight.svg" alt="/img/arrowRight.svg">
					<img id="teaImg" src="../img/teaImg.png" alt="Tea image">
				</div>
			</div>
			<div class="card">
				<div class="infoBx">
					<h1 class="headerOneFont" id="teaName">Лишань Габа Улун</h1>
					<p class="captionTwoFont" id="teaKind">Тайваньский улун</p>
					<hr class="definer">
					<p class="captionTwoFont" id="teaStats">Расслабляет, кислый, плотный</p>		
				</div>
				<div class="optionBx">
					<img class="arrowRight" src="../icons/arrowRight.svg" alt="/img/arrowRight.svg">
					<img id="teaImg" src="../img/teaImg.png" alt="Tea image">
				</div>
			</div>
			<div class="card">
				<div class="infoBx">
					<h1 class="headerOneFont" id="teaName">Лишань Габа Улун</h1>
					<p class="captionTwoFont" id="teaKind">Тайваньский улун</p>
					<hr class="definer">
					<p class="captionTwoFont" id="teaStats">Расслабляет, кислый, плотный</p>		
				</div>
				<div class="optionBx">
					<img class="arrowRight" src="../icons/arrowRight.svg" alt="/img/arrowRight.svg">
					<img id="teaImg" src="../img/teaImg.png" alt="Tea image">
				</div>
			</div>
			<div class="card">
				<div class="infoBx">
					<h1 class="headerOneFont" id="teaName">Лишань Габа Улун</h1>
					<p class="captionTwoFont" id="teaKind">Тайваньский улун</p>
					<hr class="definer">
					<p class="captionTwoFont" id="teaStats">Расслабляет, кислый, плотный</p>		
				</div>
				<div class="optionBx">
					<img class="arrowRight" src="../icons/arrowRight.svg" alt="/img/arrowRight.svg">
					<img id="teaImg" src="../img/teaImg.png" alt="Tea image">
				</div>
			</div>
			<div class="card">
				<div class="infoBx">
					<h1 class="headerOneFont" id="teaName">Лишань Габа Улун</h1>
					<p class="captionTwoFont" id="teaKind">Тайваньский улун</p>
					<hr class="definer">
					<p class="captionTwoFont" id="teaStats">Расслабляет, кислый, плотный</p>		
				</div>
				<div class="optionBx">
					<img class="arrowRight" src="../icons/arrowRight.svg" alt="/img/arrowRight.svg">
					<img id="teaImg" src="../img/teaImg.png" alt="Tea image">
				</div>
			</div>
			
		</div>
		<div class="menu mainpage-menu">
			<button id="menu" class="menuBtn"><img src="../icons/mainYellow.svg" alt=""></button>
			<button id="add" class="menuBtn"><img src="../icons/add.svg" alt=""></button>
			<button id="teaCup" class="menuBtn"><img src="../icons/cup.svg" alt=""></button>
		</div>
	</div>
	`;
	generateCardBg()
	let mainpageSearchbar = document.querySelector(".searchBar");
	mainpageSearchbar.addEventListener("click", showSearchProperties);
	mainpageSearchbar.addEventListener("touch", showSearchProperties);
	nav_tokens = document.querySelectorAll("button.nav-token")
	nav_tokens.forEach(item => item.addEventListener("click", targetNavProps));
}




		// nav-token properties(bgc, className, animations, etc)

let nav_tokens = document.querySelectorAll("button.nav-token")
nav_tokens.forEach(item => item.addEventListener("click", targetNavProps));

function targetNavProps(e) {
	nav_tokens.forEach(item => {
		item.classList.remove("token-default");
		item.classList.add("token-second");
		document.querySelector("#seciton-title").innerHTML = e.target.innerHTML;
	});
	e.target.classList.add("token-default");
	e.target.classList.remove("token-second");
	generateCardBg();

	(function tokens_changes() {
		let nav_container = document.querySelector(".nav-container");
		if(e.target.classList.contains("reloader")) {
			nav_container.innerHTML = `
				<button class="token-default buttonOneFont nav-token reloader reloader" id="forYou-prop">Для тебя</button>
				<button class="token-second buttonOneFont nav-token" id="view-prop">По виду</button>
				<button class="token-second buttonOneFont nav-token" id="feelings-prop">По ощущениям</button>
				<button class="token-second buttonOneFont nav-token" id="random-props">Случайный чай</button>
			`;
			document.querySelector("#seciton-title").innerHTML = "Для тебя";
		}
		else if(e.target.id == "view-prop") {
			nav_container.innerHTML = `
				<button class="token-default buttonOneFont nav-token reloader" id="forYou-prop">По виду</button>
				<button class="token-second buttonOneFont nav-token">Пуэр</button>
				<button class="token-second buttonOneFont nav-token">Улун</button>
				<button class="token-second buttonOneFont nav-token">Зеленый</button>
				<button class="token-second buttonOneFont nav-token">Белый</button>
				<button class="token-second buttonOneFont nav-token">Красный</button>
				<button class="token-second buttonOneFont nav-token">Желтый</button>
				<button class="token-second buttonOneFont nav-token">Хей ча</button>
			`;
		}

		else if(e.target.id == "feelings-prop") {
			nav_container.innerHTML = `
				<button class="token-default buttonOneFont nav-token reloader" id="feelings-prop">По ощущениям</button>
				<button class="token-second buttonOneFont nav-token">Бодрость</button>
				<button class="token-second buttonOneFont nav-token">Отдых</button>
				<button class="token-second buttonOneFont nav-token">Вдохновение</button>
				<button class="token-second buttonOneFont nav-token">Сон</button>
				<button class="token-second buttonOneFont nav-token">Медитация</button>
				<button class="token-second buttonOneFont nav-token">Разговоры</button>
			`;
		}
		
		nav_tokens = document.querySelectorAll("button.nav-token")
		nav_container = document.querySelector(".nav-container");
		nav_tokens.forEach(item => item.addEventListener("click", targetNavProps));
	}())
}

	