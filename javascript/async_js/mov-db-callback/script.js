const searchBar = document.querySelector(".input-keyword");
$(".search-button").on("click", function () {
  searchMovies();
});

$(searchBar).on("keydown", function (event) {
  if (event.keyCode === 13) {
    searchMovies();
  }
});

$(searchBar).on("click", function () {
  searchBar.value = "";
});

window.addEventListener("beforeunload", function (event) {
  $(".movie-container").fadeOut(20, function () {
    $(this).html(cards).fadeIn(0);
  });
  searchBar.value = "";
});

function searchMovies() {
  $.ajax({
    url: "http://www.omdbapi.com/?apikey=8e9e7613&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      // Add transition effect when updating movie container
      $(".movie-container").fadeOut(0, function () {
        $(this).html(cards).fadeIn(500);
      });

      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=8e9e7613&i=" + $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showMovieDetail(m);
            $(".modal-body").html(movieDetail);
          },
        });
      });
    },
    error: (err) => {
      console.log(err.responseText);
    },
  });
}

function showCards(m) {
  return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
                <div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid" />
                </div>
                <div class="col-md">
                    <ul class="list-group">
                    <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                    <li class="list-group-item"><strong>Director : </strong>${m.Director} </li>
                    <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Writers : </strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Plot : </strong> <br />${m.Plot}</li>
                    </ul>
                </div>
                </div>
            </div>`;
}
