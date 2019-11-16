const nasaTitle = document.querySelector("#nasa__title")
const nasaImage = document.querySelector(".nasa__img");
const nasaCopyright = document.querySelector(".nasa__copyright")
const nasaExplanation = document.querySelector(".nasa__explanation")
const nasaDate = document.querySelector(".nasa__date")
const btnPrev = document.querySelector(".prev")

let nasaURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";


fetch(nasaURL)
  .then(response => {
      return response.json()
    })
    .then(result =>{
        console.log(result)
        const {url, copyright, title, explanation, date} = result;
        nasaImage.src = url
        nasaTitle.innerHTML = title;
        nasaExplanation.innerHTML = explanation;
        nasaCopyright.innerHTML = copyright;
        nasaDate.innerHTML = date;
      });
  

    
    const today = new Date();
    let date = today.getDate();
    let month = today.getMonth()+1;
    let fullDate = `${today.getFullYear()}-${month}-${date}`

    function prevDay(){
      console.log('btn')
      
      fullDate = `${today.getFullYear()}-${month}-${--date}`
      nasaURL = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${fullDate}`

      if(date <= 1){
        date = 31;
        --month;
        console.log('its ok')
      }
  
}
btnPrev.addEventListener('click',prevDay)