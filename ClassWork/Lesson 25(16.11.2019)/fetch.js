const nasaImage = document.querySelector("#nasa-img");
const nasaTitle = document.querySelector("#title")
const nasacopy = document.querySelector(".copyright")
const nasaDescription = document.querySelector(".description")



fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(response => {
    return response.json()
  })
  .then(result =>{
    console.log(result)
    const {url, copyright, title, explanation} = result;
    nasaImage.src = url
    nasaTitle.innerHTML = title;
    nasaDescription.innerHTML = explanation;
    nasacopy.innerHTML = copyright;
  })