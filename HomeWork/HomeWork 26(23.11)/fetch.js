const nasaTitle = document.querySelector("#nasa__title")
const nasaImage = document.querySelector(".nasa__img");
const nasaCopyright = document.querySelector(".nasa__copyright")
const nasaExplanation = document.querySelector(".nasa__explanation")
const nasaDate = document.querySelector(".nasa__date")

const btnPrev = document.querySelector(".btn__prevPictureOfTheDay")
const btnNext = document.querySelector(".btn__nextPictureOfTheDay")
const btnGetImg = document.querySelector(".btn__getNewPictureOfTheDay")
let URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

const today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let fullDate = `${today.getFullYear()}-${month}-${date}`

getPictureOfDay(URL);

function getPictureOfDay(URL) {

  fetch(URL)
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result)
      const {
        url,
        title,
        explanation,
        copyright,
        date
      } = result;
      nasaImage.src = url
      nasaTitle.innerHTML = `<span>${title}</span>`;
      nasaExplanation.innerHTML = `<span>Explanation</span> : ${explanation}`;
      nasaCopyright.innerHTML = `<span>Copyright </span> : ${copyright}`;
      nasaDate.innerHTML = `<span>Date</span> : ${date}`;

      if (nasaCopyright.inneHTML == undefined) {
        console.log('Soory, but information not delivered to Earth yet🚀')
        nasaCopyright.classList.add('oopsy')
        nasaCopyright.innerText = "Opsy, this information not delivered to Earth yet🚀 ";

      }

    });

}

function prevDay() {

  fullDate = `${today.getFullYear()}-${month}-${--date}`
  nasaURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${fullDate}`
  if (date <= 1) {
    date = 31;
    --month;
  }

  getPictureOfDay(nasaURL)
}

function nextDay() {

  if (date == today.getDate()) {
    console.log('this is future')
  } else {
    fullDate = `${today.getFullYear()}-${month}-${++date}`
    nasaURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${fullDate}`
    if (date >= 30) {
      date = 0;
      ++month;
    }
  }

  getPictureOfDay(nasaURL)
}

function getNews() {
  fullDate = `${today.getFullYear()}-${month}-${--date}`
  nasaURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${fullDate}`
  if (date <= 1) {
    date = 31;
    --month;
  }
  return renderPODComponent(nasaURL)



}

function renderPODComponent(data) {

  fetch(data)
    .then(response => {
      return response.json()
    })
    .then(result => {

      const {
        url,
        copyright,
        title,
        explanation,
        date
      } = result;
      const container = document.getElementById('pod-list');
      container.classList.add('d-flex','flex-column','justify-content-center','align-items-center','col-12','pod-list');
      const titleComponent = document.createElement('h2');
      titleComponent.innerHTML = `<span>${title}</span>`;
      const imageComponent = document.createElement('img');
      imageComponent.src = url;      
      imageComponent.classList.add('lazy');
      const descriptionComponent = document.createElement('p');
      descriptionComponent.innerHTML = `<span>Explanation</span> : ${explanation}`;
      const copyrightComponent = document.createElement('p');
      copyrightComponent.innerHTML = `<span>Copyright</span> : ${copyright}`;
      const dateComponent = document.createElement('p');
      dateComponent.innerHTML = `<span>Date</span> : ${date}`;
      
      container.append(...[titleComponent, imageComponent, descriptionComponent, copyrightComponent, dateComponent])

      if (titleComponent == undefined ){
        console.log('Soory, but information not delivered to Earth yet🚀')
        titleComponent.classList.add('oopsy')
        titleComponent.innerHTML = "Opsy, this information not delivered to Earth yet🚀 ";

      }else if(descriptionComponent == undefined){
        console.log('Soory, but information not delivered to Earth yet🚀')
        descriptionComponent.classList.add('oopsy')
        descriptionComponent.innerHTML = "Opsy, this information not delivered to Earth yet🚀 ";

      }else if(copyrightComponent == undefined){
        console.log('Soory, but information not delivered to Earth yet🚀')
        copyrightComponent.classList.add('oopsy')
        copyrightComponent.innerHTML = "Opsy, this information not delivered to Earth yet🚀 ";

      }else if(dateComponent == undefined){
        console.log('Soory, but information not delivered to Earth yet🚀')
        dateComponent.classList.add('oopsy')
        dateComponent.innerHTML = "Opsy, this information not delivered to Earth yet🚀 ";

      }
    
    })
}

function scrolled() {
  const images = document.querySelectorAll('.lazy');

  images.forEach(image => {
    const whenShow = (window.scrollY + window.innerHeight) - image.height / 2
    const bottomImage = image.offsetTop + (image.height / 2)
    const test = whenShow > image.offsetTop
    const test2 = window.scrollY < bottomImage
    if (test && test2) {
      image.classList.add('active');
    } else {
      image.classList.remove('active')
    }
  })
}

window.addEventListener('scroll',scrolled)
btnPrev.addEventListener('click', prevDay)
btnNext.addEventListener('click', nextDay)
btnGetImg.addEventListener('click', getNews)