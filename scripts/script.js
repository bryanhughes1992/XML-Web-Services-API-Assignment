window.addEventListener("load", function() {
  var request = new XMLHttpRequest();
  request.open('GET', "https://imdb-api.com/en/API/Title/k_tlju98cy/tt1375666/Posters", true);

  request.addEventListener("load", function() {
    var data = JSON.parse(this.response);
  })

  request.send();

})