window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  let category = params.get('category');
  console.log(category);
  // return params.get('category');

  if (category =='most-popular') {
    let subHeading = document.querySelector('.sub-heading-text');
    subHeading.innerHTML = `Most popular`;
    const mostPopularMovieUrl = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const mostPopularMovieOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

      async function mostPopularMovieData (result) {
        for (let i=0; i<20; i++) {
          try {
            let p = await fetch(`http://www.omdbapi.com/?t=${result[i].title}&apikey=4425ba46`);
            let moviePoster = await p.json();     
            let card = document.querySelector(`.card${i}`);
            card.innerHTML += `
            <div class="card">
            <div class="poster">
              <img src="${moviePoster.Poster}" alt="">
              <a class="link" target="_blank" href="../about-movie/about-movie.html?name=${result[i].title}">
              <div class="card-details">
                <div>
                    <h1 class="rating">${result[i].rating}/10</h1>
                    <h1 class="category">${result[i].genre[0]}</h1>    
                </div>    
              </div>
              </a>
            </div>
            
            <div class="details">
              <p class="title">${result[i].title}</p>
              <p class="year">${result[i].year}</p>
            </div>
          </div>
          `;  
          } catch (error) {
          console.error(error);
          }
        }
      }

      // api for recommendation, most popular
      async function mostPopularMovieApiFetching () {
        try {
          const response = await fetch(mostPopularMovieUrl, mostPopularMovieOptions);
          const result = await response.json();
          mostPopularMovieData(result)
        } catch (error) {
          console.error(error);
        }
      }
      mostPopularMovieApiFetching();
   
  } else if (category =='trending') {
    // trending
    let subHeading = document.querySelector('.sub-heading-text');
    subHeading.innerHTML = `Trending`;
    const trendingMovieUrl = 'https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US';
    const trendingMovieOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };

    function trendingMovieData (result) {
      for (let i=0; i<20; i++) {
        let card = document.querySelector(`.card${i}`);
        card.innerHTML += `
        <div class="card">
        <div class="poster">
          <img src="${result.data.movies.edges[i].node.primaryImage.url}" alt="">
          <a class="link" target="_blank" href=../about-movie/about-movie.html?name="${result.data.movies.edges[i].node.originalTitleText.text}">
          <div class="card-details">
            <div>
                <h1 class="rating">${result.data.movies.edges[i].node.ratingsSummary.aggregateRating}/10</h1>
                <h1 class="category">${result.data.movies.edges[i].node.titleGenres.genres[0].genre.text}</h1>    
            </div>    
          </div>
          </a>
        </div>
        
        <div class="details">
          <p class="title">${result.data.movies.edges[i].node.originalTitleText.text}</p>
          <p class="year">${result.data.movies.edges[i].node.releaseYear.year}</p>
        </div>
      </div>
      `;  
      }
    }

    async function trendingMovieApiFetching () {
      try {
        const response = await fetch(trendingMovieUrl, trendingMovieOptions);
        const result = await response.json();
        trendingMovieData(result);
      } catch (error) {
      console.error(error);
      } 
    }
    trendingMovieApiFetching();

  } else if (category =='new-release') {
    // new release
    let subHeading = document.querySelector('.sub-heading-text');
    subHeading.innerHTML = `New release`;
    const latestMovieUrl = 'https://newly-released-movies.p.rapidapi.com/movies';
    const latestMovieOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
        'X-RapidAPI-Host': 'newly-released-movies.p.rapidapi.com'
      }
    };

    async function latestMovieData (result) {
        for (let i=0; i<20; i++) {
          try {
            const p = await fetch(`http:www.omdbapi.com/?t=${result[i].title.slice(0, -7)}&y=2024&apikey=4425ba46`);
            const response = await p.json();
            console.log(response);
        
            let card = document.querySelector(`.card${i}`);
            card.innerHTML += `
            <div class="card">
            <div class="poster">
              <img src="${response.Poster}" alt="">
              <a class="link" target="_blank" href="../about-movie/about-movie.html?name=${response.Title}">
              <div class="card-details">
                <div>
                    <h1 class="rating">${response.imdbRating}/10</h1>
                    <h1 class="category">${response.Genre}</h1>    
                </div>    
              </div>
              </a>
            </div>
            
            <div class="details">
              <p class="title">${response.Title}</p>
              <p class="year">${response.Year}</p>
            </div>
          </div>
          `;
        } catch (error) {
          console.error(error);
        }
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
    latestMovieApiFetching();
  }
}
