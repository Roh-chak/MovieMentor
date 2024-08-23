
window.onload = function () {
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
  })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  


  const params = new URLSearchParams(window.location.search);
  let query = params.get('query');
  let genreName = params.get('genre');
  let gname = params.get('gname');
  console.log(query);
  console.log(genreName);

  let genres = [
    {
      id:28,
      name:"Action"
    },
    {
      id:12,
      name:"Adventure"
    },
    {
      id:16,
      name:"Animation"
    },
    {
      id:35,
      name:"Comedy"
    },
    {
      id:80,
      name:"Crime"
    },
    {
      id:99,
      name:"Documentary"
    },
    {
      id:18,
      name:"Drama"
    },
    {
      id:10751,
      name:"Family"
    },
    {
      id:14,
      name:"Fantasy"
    },
    {
      id:36,
      name:"History"
    },
    {
      id:27,
      name:"Horror"
    },
    {
      id:10402,
      name:"Music"
    },
    {
      id:9648,
      name:"Mystery"
    },
    {
      id:10749,
      name:"Romance"
    },
    {
      id:878,
      name:"Science Fiction"
    },
    {
      id:10770,
      name:"TV Movie"
    },
    {
      id:53,
      name:"Thriller"
    },
    {
      id:10752,
      name:"War"
    },
    {
      id:37,
      name:"Western"
    }
  ]
  

  let cardNumber = 0;
  let pageNumber =0;
  let num=0;

  async function searchMovieData () {
    cardNumber += 10;
    pageNumber++;

    const url = `https://movies-api14.p.rapidapi.com/search?query=${query}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
        'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      for (let i=0; i<20; i++) {
        let subHeading = document.querySelector('.sub-heading-text').innerHTML = `
        Result for "<span class='searched-movie'>${query}</span>"
        `;

        if (result.contents[i].contentType === 'movie') {
          let card = document.querySelector(`.card${i}`);  
          card.innerHTML += `
          <div class="card">
          <div class="poster">
            <img src="${result.contents[i].poster_path}" alt="" loading='lazy'>
            <a class="link" target="_blank" href="../about-movie/about-movie.html?name=${result.contents[i].title}">
            <div class="card-details">
              <div>
                  <h1 class="rating">${result.contents[i].vote_average}/10</h1>
                  <h1 class="category">${result.contents[i].genres[0]} ${result.contents[i].genres[1]} ${result.contents[i].genres[2]}</h1>    
              </div>    
            </div>
            </a>
          </div>
          
          <div class="details">
            <p class="title">${result.contents[i].title}</p>
            <p class="year">${result.contents[i].release_date.slice(0,4)}</p>
          </div>
        </div>
        `;  
        } else {
          let card = document.querySelector(`.card${i}`);  
          card.innerHTML += `
          <div class="card">
          <div class="poster">
            <img src="${result.contents[i].poster_path}" alt="" loading='lazy'>
            <a class="link" target="_blank" href="../about-movie/about-movie.html?name=${result.contents[i].title}">
            <div class="card-details">
              <div>
                  <h1 class="rating">${result.contents[i].vote_average}/10</h1>
                  <h1 class="category">${result.contents[i].genres[0]} ${result.contents[i].genres[1]} ${result.contents[i].genres[2]}</h1>    
              </div>    
            </div>
            </a>
          </div>
          
          <div class="details">
            <p class="title">${result.contents[i].title}</p>
            <p class="year">${result.contents[i].first_aired.slice(0,4)}</p>
          </div>
        </div>
        `;  

        }
        
    }

    } catch (error) {
      console.error(error);
    }
  }

  async function searchMovieDataP2 () {
    cardNumber += 10;
    pageNumber++;
    const p = await fetch(`http://www.omdbapi.com/?s=${query}&page=${pageNumber}&apikey=4425ba46`);
    const response = await p.json();

      for (let i=0-10; i<10; i++) {
        try {
          const movieDetails = await fetch(`http://www.omdbapi.com/?t=${response.Search[i].Title}&apikey=4425ba46`)
          const details = await movieDetails.json();

          let card = document.querySelector(`.card1${i}`);
          card.innerHTML += `
          <div class="card">
          <div class="poster">
            <img src="${response.Search[i].Poster}" alt="" loading='lazy'>
            <a class="link" target="_blank" href="../about-movie/about-movie.html?name=${response.Search[i].Title}">
            <div class="card-details">
              <div>
                  <h1 class="rating">${details.imdbRating}/10</h1>
                  <h1 class="category">${details.Genre}</h1>    
              </div>    
            </div>
            </a>
          </div>
          
          <div class="details">
            <p class="title">${response.Search[i].Title}</p>
            <p class="year">${response.Search[i].Year}</p>
          </div>
        </div>
        `;
      } catch (error) {
        console.error(error);
      }
      }  
  }


  async function searchGenreWise () {
    cardNumber += 20;
    pageNumber++;
    const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genreName}&page=1`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
        'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com'
      }
    };

    let subHeading = document.querySelector('.sub-heading-text').innerHTML = `
    Result for "<span class='searched-movie'>${gname}</span>"
    `;

    try {
      const genreResponse = await fetch(url, options);
      const genreResult = await genreResponse.json();
      console.log(genreResult);

      for (let i=0; i<20; i++) {
        // const genreMovieOMDB = await fetch(`http://www.omdbapi.com/?t=${genreResult.results[i].title}&apikey=4425ba46`)
        // const genreMovieRes = await genreMovieOMDB.json();
        // console.log(genreMovieRes);

        let movieGenres =[];
        let movieGenreNum = genreResult.results[i].genre_ids;
        let movieGen = genres.map((ele) => {
          for (let j=0; j<movieGenreNum.length; j++){
            if (ele.id===movieGenreNum[j]) {
              movieGenres.push(ele.name)
            }  
          }
        })
        
        console.log(movieGenres);


        let card = document.querySelector(`.card${i}`);
        card.innerHTML += `
        <div class="card">
        <div class="poster">
          <img src="${genreResult.results[i].poster_path}" alt="" loading='lazy'>
          <a class="link" target="_blank" href="../about-movie/about-movie.html?name=${genreResult.results[i].title}">
          <div class="card-details">
            <div>
                <h1 class="rating">${genreResult.results[i].vote_average}/10</h1>
                <h1 class="category">${movieGenres[0]} ${movieGenres[1]} ${movieGenres[2]}
                </h1>    
            </div>
          </div>
          </a>
        </div>
        
        <div class="details">
          <p class="title">${genreResult.results[i].title}</p>
          <p class="year">${genreResult.results[i].release_date.slice(0,4)}</p>
        </div>
      </div>
      `;

      movieGenres =[];
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  async function loadMoreMovies () {
    cardNumber += 10;
    console.log(cardNumber)
    pageNumber++

    const p = await fetch(`http://www.omdbapi.com/?s=${query}&page=${pageNumber}&apikey=4425ba46`);
    const response = await p.json();
    console.log(response);

    let ten = 0;
    let movieContainer = document.querySelector('.movie-container');
    for(let i=cardNumber-10; i<cardNumber; i++) {
      movieContainer.innerHTML +=`
      <div class="card${i} cards"></div>
      `;
      console.log(ten);


      const movieDetails = await fetch(`http://www.omdbapi.com/?t=${response.Search[ten].Title}&apikey=4425ba46`)
      const details = await movieDetails.json();

      let moreMovieLoad = document.querySelector(`.card${i}`);
      moreMovieLoad.innerHTML +=`
          <div class="card">
          <div class="poster">
            <img src="${response.Search[ten].Poster}" alt="" loading='lazy'>
            <a class="link" target="_blank" href="../about-movie/about-movie.html?name=${response.Search[ten].Title}">
            <div class="card-details">
              <div>
                  <h1 class="rating">${details.imdbRating}/10</h1>
                  <h1 class="category">${details.Genre}</h1>    
              </div>    
            </div>
            </a>
          </div>
          
          <div class="details">
            <p class="title">${response.Search[ten].Title}</p>
            <p class="year">${response.Search[ten].Year}</p>
          </div>
        </div>
        `;
        ten++;

    }
  }

  async function loadMoreMoviesGenre () {
    cardNumber += 20;
    console.log(cardNumber)
    pageNumber++
    let twenty = 0;

    const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genreName}&page=${pageNumber}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
        'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com'
      }
    };

    const genreResponse = await fetch(url, options);
    const genreResult = await genreResponse.json();
    console.log(genreResult);

    let movieContainer = document.querySelector('.movie-container');

    for(let i=cardNumber-20; i<cardNumber; i++) {
      movieContainer.innerHTML +=`
      <div class="card${i} cards"></div>
      `;

      try {
          const genreMovieOMDB = await fetch(`http://www.omdbapi.com/?t=${genreResult.results[twenty].title}&apikey=4425ba46`)
          const genreMovieRes = await genreMovieOMDB.json();
          console.log(genreMovieRes);
  
  
          let card = document.querySelector(`.card${i}`);
          card.innerHTML += `
          <div class="card">
          <div class="poster">
            <img src="${genreMovieRes.Poster}" alt="" loading='lazy'>
            <a class="link" target="_blank" href="../about-movie/about-movie.html?name=${genreMovieRes.Title}">
            <div class="card-details">
              <div>
                  <h1 class="rating">${genreMovieRes.imdbRating}/10</h1>
                  <h1 class="category">${genreMovieRes.Genre}</h1>    
              </div>    
            </div>
            </a>
          </div>
          
          <div class="details">
            <p class="title">${genreMovieRes.Title}</p>
            <p class="year">${genreMovieRes.Year}</p>
          </div>
        </div>
        `;
        twenty++;
      } catch (error) {
        console.error(error);
      }  
    }


  }



  async function loadMorePreCards () {
    if (genreName) {
      loadMoreMoviesGenre();
    } else {
      await loadMoreMovies();
      loadMoreMovies()  
    }
    // searchMovieData();
    // searchMovieDataP2();
  }

  

  let loadMoreBtn = document.querySelector('.load-more-btn');
  loadMoreBtn.addEventListener('click', () => {
    loadMorePreCards();
  })


  if (genreName) {
    let titleBar = document.querySelector('title').innerHTML=`searching ${gname} movies`;
    searchGenreWise();
  } else {
    let titleBar = document.querySelector('title').innerHTML=`Searching movie named ${query}`;
    searchMovieData();
    console.log(pageNumber+' first func');
    // searchMovieDataP2();
    // console.log(pageNumber+' second func');
  }
}

