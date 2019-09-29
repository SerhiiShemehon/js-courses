// Необходимо получить данные с сервера по урлу https://trevadim.github.io/vue/data/data.json, и отобразить информацию о планетах

const URL = "https://trevadim.github.io/vue/data/data.json";
const BODY = document.querySelector('body');


let createSolarSystem = () => {
  let solarSystem = document.createElement('div');
  solarSystem.classList.add('solar-system');
  BODY.appendChild(solarSystem);

  let titleSolarSystem = document.createElement('h1');
  titleSolarSystem.innerText = 'Cолнечная система';
  titleSolarSystem.style.textAlign = 'center';
  titleSolarSystem.style.fontSize = '50px';
  solarSystem.before(titleSolarSystem);

  BODY.style.backgroundImage = 'url(../images/bg.jpg';
  BODY.style.backgroundSize = 'cover';
  BODY.style.backgroundRepeat = 'no-repeat';
  BODY.style.color = '#fff';
  
  let sun = document.createElement('div');
  sun.classList.add('sun');
  solarSystem.appendChild(sun);
}


let createPlanets = (planets) => {
  let solarSystem = BODY.querySelector('.solar-system') || BODY;

  for (let planetName in planets){
    let planet = document.createElement('div');
    planet.classList.add('js-planet');
    planet.classList.add('planet-'+ planetName);
    planet.setAttribute('data-planet', planetName);
    planet.setAttribute('title', planets[planetName].title);
    solarSystem.appendChild(planet);

    let description = document.createElement('div');
    description.classList.add('description-holder');
    description.setAttribute('id', planetName);
    BODY.appendChild(description);

    let planetTitle = document.createElement('h2');
    planetTitle.innerText = planets[planetName].title;
    description.appendChild(planetTitle);

    let planetImageHolder = document.createElement('div');
    planetImageHolder.classList.add('img-holder');
    description.appendChild(planetImageHolder);

    let planetImage = document.createElement('img');
    planetImage.setAttribute('src', planets[planetName].url);
    planetImage.setAttribute('alt', planets[planetName].title);
    planetImageHolder.appendChild(planetImage);

    

    let planetDescription = document.createElement('div');
    planetDescription.classList.add('description');
    description.appendChild(planetDescription);
    
    let descriptionText = '';
    planets[planetName].info.forEach((item) => {
      descriptionText += `<p>${item}</p>`;
    });
    planetDescription.innerHTML = descriptionText;
  }
}


let createMarkUp = (data) => {
  createSolarSystem();
  createPlanets(data.planets);
};


fetch(URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    createMarkUp(data);
  })
  .then(function () {
    showInfo();
  })
  .catch(function (error) {
    console.log(error)
  });


let showInfo = () => {
  let planetList = document.querySelectorAll('.js-planet');
  for (let i = 0; i < planetList.length; i++) {

    planetList[i].addEventListener('click', function() {
      let planetItem = this.getAttribute('data-planet');

      let planetItemDescription = document.getElementById(planetItem);
      planetItemDescription.classList.add('open');

      let close = document.createElement('span')
      close.classList.add('close');
      planetItemDescription.appendChild(close);

      close.addEventListener('click', function() {
        planetItemDescription.classList.remove('open');
        close.removeEventListener('click', function () {});
      });
    });
  }
}

