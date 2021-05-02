//Listen for the window to load
window.addEventListener("load", function() {
  //Call the IMDb API
  var request = fetch("https://imdb-api.com/en/API/Title/k_tlju98cy/tt1375666/Posters")
    .then(Response => Response.json())
    .then(responseData => {

    //Capture the <h1> element to store the movie's title from the IMDb api
    var titleContainer = document.getElementById("titleContainer");

    //Capture <p> element to store the original IMDb plot
    var originalContainer = document.getElementById("originalContainer");

    //Capture the <div> element to store the IMDb poster
    var posterContainer = document.getElementById("posterContainer");

    //Capture the <p> element to store the modified Yoda translated IMDb plot
    var modifiedContainer = document.getElementById("modifiedContainer");

    var movieTitle = `<h1 class="movie-title">${responseData.fullTitle}</h1>`;
    var moviePlot = `${responseData.plot}`;
    var moviePoster = `<img alt="movie poster" src="${responseData.image}" class="movie-poster">`


    titleContainer.innerHTML = movieTitle;
    originalContainer.innerHTML = moviePlot;
    posterContainer.innerHTML = moviePoster;

    var newRequest = fetch(`https://api.funtranslations.com/translate/yoda.json?text=${moviePlot}`).then(Response => Response.json()).then(yodaData => {
      var yodaPlot = yodaData;
      modifiedContainer.innerHTML = yodaPlot.contents.translated;
    });
  });
});