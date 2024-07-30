const lenis = new Lenis()
lenis.on('scroll', (e) => {
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// random number for movie recommandation
randomNumber = Math.floor(Math.random() * 100);

// for recommendation poster
async function recommendationPosterApi (result) {
  const url = `https://imdb-movies-web-series-etc-search.p.rapidapi.com/${result[randomNumber].title}.json`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
      'x-rapidapi-host': 'imdb-movies-web-series-etc-search.p.rapidapi.com'
    }
  };

  try {
    const p = await fetch(url, options);
    const moviePoster = await p.json();
    console.log(result);

    posterOutput = document.querySelector('.recommended-movie-div');
    posterOutput.innerHTML += `
    <img class="recommended-movie-img" src="${moviePoster[0].i.imageUrl}" alt="">
    `;

  } catch (error) {
    console.error(error);
  }

    // let p = await fetch(`http://www.omdbapi.com/?t=${result[randomNumber].title}&apikey=4425ba46`);
    // let moviePoster = await p.json();
}

// recommendation data
function recommendationData(result) {
  let recommendationOutput = `
  <h1 class="title">${result[randomNumber].title}</h1>
  <h3 class="release-date">${result[randomNumber].year}</h3>
  <h3 class="category">${result[randomNumber].genre}</h3>
  <div class="rating">
      <div class="imdb-svg">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#f3ce13" d="M4 7c-1.103 0-2 .897-2 2v6.4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2H4Zm1.4 2.363h1.275v5.312H5.4V9.362Zm1.962 0H9l.438 2.512.287-2.512h1.75v5.312H10.4v-3l-.563 3h-.8l-.512-3v3H7.362V9.362Zm8.313 0H17v1.2c.16-.16.516-.363.875-.363.36.04.84.283.8.763v3.075c0 .24-.075.404-.275.524-.16.04-.28.075-.6.075-.32 0-.795-.196-.875-.237-.08-.04-.163.275-.163.275h-1.087V9.362Zm-3.513.037H13.6c.88 0 1.084.078 1.325.237.24.16.35.397.35.838v3.2c0 .32-.15.563-.35.762-.2.2-.484.288-1.325.288h-1.438V9.4Zm1.275.8v3.563c.2 0 .488.04.488-.2v-3.126c0-.28-.247-.237-.488-.237Zm3.763.675c-.12 0-.2.08-.2.2v2.688c0 .159.08.237.2.237.12 0 .2-.117.2-.238l-.037-2.687c0-.12-.043-.2-.163-.2Z"></path></g></svg>
      </div>
      <p>${result[randomNumber].rating}</p>
  </div>
  <p class="movie-synopsis">Synopsis</p>
  <p class="movie-synopsis-texts">${result[randomNumber].description}</p>
  `;
  
  let recommendedMovies = document.querySelector('.movie-description');
  recommendedMovies.innerHTML = recommendationOutput;
}
// most popular
async function mostPopularMoviePoster (result) {
      try {
        for (let i=0; i<4; i++) {
          let p = await fetch(`http://www.omdbapi.com/?t=${result[i].title}&apikey=4425ba46`);
          let moviePoster = await p.json();
          
          let mostPopular = document.querySelector(`.mp-card${i}`);
          mostPopular.innerHTML += `
          <div class="card">
          <div class="poster">
            <img src="${moviePoster.Poster}" alt="">
            <a class="link" target="_blank" href="about-movie/about-movie.html?name=${result[i].title}">
            <div class="card-details">
              <div>
                  <h1 class="rating">${result[i].rating}/10</h1>
                  <h1 class="cs-category">${result[i].genre[0]}</h1>    
              </div>    
            </div>
            </a>
          </div>
          
          <div class="details">
            <p class="cs-title">${result[i].title}</p>
            <p class="year">${result[i].year}</p>
          </div>
          </div>
          `;
      }
    
      } catch (error) {
        console.error(error);
      }  
}
// api for recommendation, most popular
async function fetchApi () {
  const movieRecommendationUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';
  const movieRecommendationOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(movieRecommendationUrl, movieRecommendationOptions);
    const result = await response.json();
    
    recommendationPosterApi(result);
    recommendationData(result);
    // mostPopularMoviePoster(result)
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
fetchApi()


// trending movie
async function trendingMovieFetching () {
  const trendingMovieUrl = 'https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US';
  const trendingMovieOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  try {
    for(let i=0; i<4; i++){
      const response = await fetch(trendingMovieUrl, trendingMovieOptions);
      const result = await response.json();
      let tramdingMovieCard = document.querySelector(`.tm-card${i}`);

      // omdb api for category http
      // const catApi = await fetch (`http://www.omdbapi.com/?t=${result.data.movies.edges[i].node.originalTitleText.text}&apikey=4425ba46`)
      // const catApiRes = await catApi.json();
      // ${catApiRes.Genre}
      
      tramdingMovieCard.innerHTML += `
      <div class="card">
      <div class="poster">
        <img src="${result.data.movies.edges[i].node.primaryImage.url}" alt="">
        <a class="link" target="_blank" href="about-movie/about-movie.html?name=${result.data.movies.edges[i].node.originalTitleText.text}">
        <div class="card-details">
          <div>
              <h1 class="rating">${result.data.movies.edges[i].node.ratingsSummary.aggregateRating}/10</h1>
              <h1 class="cs-category"></h1>
          </div>    
        </div>
        </a>
      </div>
      
      <div class="details">
        <p class="cs-title">${result.data.movies.edges[i].node.originalTitleText.text}</p>
        <p class="year">${result.data.movies.edges[i].node.releaseYear.year}</p>
      </div>
    </div>
    `;
    }
  } catch (error) {
    console.error(error);
  } 
}
// trendingMovieFetching();



// latest movie
const latestMovieUrl = 'https://newly-released-movies.p.rapidapi.com/movies';
const latestMovieOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
		'X-RapidAPI-Host': 'newly-released-movies.p.rapidapi.com'
	}
};
async function latestMovieData (result) {
  try {
    for (let i=0; i<4; i++) {
      const p = await fetch(`http:www.omdbapi.com/?t=${result[i].title.slice(0, -7)}&y=2024&apikey=4425ba46`);
      const response = await p.json();
      console.log(response);
  
      let latestMovie = document.querySelector(`.nm-card${i}`);
      let latestMovieCard = `
      <div class="card">
      <div class="poster">
        <img src="${response.Poster}" alt="">
        <a class="link" target="_blank" href="about-movie/about-movie.html?name=${response.Title}">
        <div class="card-details">
          <div>
              <h1 class="rating">${response.imdbRating}/10</h1>
              <h1 class="cs-category">${response.Genre}</h1>    
          </div>    
        </div>
        </a>
      </div>
      
      <div class="details">
        <p class="cs-title">${response.Title}</p>
        <p class="year">${response.Year}</p>
      </div>
    </div>
    `;

      latestMovie.innerHTML += latestMovieCard;
    }
  } catch (error) {
    console.error(error);
  }
}
async function latestMovieApiFetching () {
  try {
    let response = await fetch(latestMovieUrl, latestMovieOptions);
    let result = await response.json();
    latestMovieData(result)
  } catch (error) {
    console.error(error);
  }  
}
// latestMovieApiFetching();
