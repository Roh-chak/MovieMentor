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
  let movieName = params.get('name');
  let movieId = params.get('id');
  console.log(movieId);

  async function aboutMovieApiFetching () {
    const url = `https://mdblist.p.rapidapi.com/?i=${movieId}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
        'x-rapidapi-host': 'mdblist.p.rapidapi.com'
      }
    };

    const urlForGenre = `https://imdb146.p.rapidapi.com/v1/title/?id=${movieId}`;
    const optionsForGenre = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
        'x-rapidapi-host': 'imdb146.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      const responseForGenre = await fetch(urlForGenre, optionsForGenre);
      const resultForGenre = await responseForGenre.json();
      console.log(resultForGenre);

      let poster = document.querySelector('.about-movie-div').innerHTML += `
      <img class="about-movie-img" src="${result.poster}" alt="">
      `;
    
      let title = document.querySelector('.title').innerHTML += `
      <h1 class="title">${result.title}</h1>
      `;
    
      let movieSubDetails = document.querySelector('.sub-details');
      movieSubDetails.innerHTML += `
        <p class="release-date">${result.year}</p>
        <p class="rated">${result.certification}</p>
        <p class="duration">${result.runtime}m</p>
      `;
  
      let language = document.querySelector('.language').innerHTML += ` ${result.language}`
      let category = document.querySelector('.category').innerHTML += ` ${resultForGenre.genres.genres.map((ele) => {
        return ele.text
      })}`
  
      let ratingDetails = document.querySelector('.rating-details').innerHTML +=`
      <p class="rating-num">${result.ratings[0].value}/10</p>
      <p class="votes">Votes: ${result.ratings[0].votes.toLocaleString()}</p>
      `;

    // storyline
    let storyline = document.querySelector('.storyline').innerHTML +=`
    <p class="movie-synopsis-texts">${result.description}</p>
    `;

  
    } catch (error) {
      console.error(error);
    }


    // streaming
    let streamingOn = document.querySelector('.streaming-sites');
    async function streamingOptionsApi () {
      const url = `https://streaming-availability.p.rapidapi.com/shows/search/title?country=in&title=${movieName}&series_granularity=show&show_type=movie&output_language=en`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
        }
      };

      try {
        const sResponse = await fetch(url, options);
        const sResult = await sResponse.json();
        // let sLength = sResult[0].streamingOptions.length;
        // console.log(sLength);
        let sOptions = sResult[0].streamingOptions.in;
        let collectElement = [];
        let newOptions = sOptions.map((element) => {
          if (collectElement.includes(element.service.id)) {
            console.log('found')
          } else {
            console.log(collectElement)
            collectElement.push(element.service.id);
            console.log(collectElement);
            streamingOn.innerHTML += `
            <a href="${element.link}" target="_blank">
              <img class="streaming-platform" src="${element.service.imageSet.darkThemeImage}" alt="">
            </a>
            `;  

          }
        })
      } catch (error) {
        console.error(error);
      }
    }
    streamingOptionsApi();
    

    // movie images
    let images = document.querySelector('.photos');
    async function movieImagesApiFetching () {
      const url = `https://online-movie-database.p.rapidapi.com/title/v2/get-images?tconst=${movieId}&first=20`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
          'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        for(let i=0; i<10; i++) {
          images.innerHTML += `
          <div class="photos-img">
          <img src="${result.data.title.images.edges[i].node.url}" alt="">
          </div>
          `;
        }
    
      } catch (error) {
        console.error(error);
      }
    }
    movieImagesApiFetching();


    // cast
    let cast = document.querySelector('.cast-container');
    async function castApiFetching () {
      const castApiIdUrl = `https://tvshow.p.rapidapi.com/Movie/Search?Language=en-US&Content=${movieName}&Adult=false&Page=1`;
      const castApiIdOptions = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
          'x-rapidapi-host': 'tvshow.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(castApiIdUrl, castApiIdOptions);
        const castIdResult = await response.json();
        console.log(castIdResult);
        castFetching(castIdResult);
      } catch (error) {
        console.error(error);
      }

      async function castFetching (castIdResult) {
        const castApiUrl = `https://tvshow.p.rapidapi.com/Cast/Movie?ItemId=${castIdResult[0].id}&Language=en-US`;
        const castApiOptions = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
            'x-rapidapi-host': 'tvshow.p.rapidapi.com'
          }
        };
  
        try {
          const response = await fetch(castApiUrl, castApiOptions);
          const castResult = await response.json();
          console.log(castResult);
          for (let i=0; i<=5; i++) {
            cast.innerHTML +=`
            <div class="cast-div">
              <div class="cast-img">
                <img class='cast-image' src="${castResult[i].image}" alt="">
              </div>
                <h4 class="cast-name">${castResult[i].name}</h4>
                <p class="cast-name-in-movie">${castResult[i].character}</p>    
            </div>
            `;  
          }
        } catch (error) {
          console.error(error);
        }  
      }
    }
    castApiFetching();

    // more like this
    async function moreLikeApi () {
      // omdb for id fetching
      // const idResponse = await fetch(`http:www.omdbapi.com/?t=${movieName}&apikey=4425ba46`);
      // const idResult = await idResponse.json();  

      const url = `https://movies-tv-shows-database.p.rapidapi.com/?movieid=${movieId}&page=1`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
          'x-rapidapi-host': 'movies-tv-shows-database.p.rapidapi.com',
          Type: 'get-similar-movies'
        }
      };

      try {
        const mltResponse = await fetch(url, options);
        const mltResult = await mltResponse.json();
        console.log(mltResult);


        for (let i=0; i<4; i++) {
          const similerMovieUrl = `https://movies-tv-shows-database.p.rapidapi.com/?movieid=${mltResult.movie_results[i].imdb_id}`;
          const similerMovieOptions = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': '6d3f841844mshc40627c965f2b6bp12d124jsnea16e77e06a6',
              'x-rapidapi-host': 'movies-tv-shows-database.p.rapidapi.com',
              Type: 'get-movie-details'
            }
          };    
          const similerMovieResponse = await fetch(similerMovieUrl, similerMovieOptions);
          const similerMovieResult = await similerMovieResponse.json();
          console.log(similerMovieResult);  
        // fetching movie from omdb
        // const mResponse = await fetch(`http:www.omdbapi.com/?t=${mltResult.movie_results[i].title}&apikey=4425ba46`);
        // const mResult = await mResponse.json(); 

        const posterUrl = `https://moviesdatabase.p.rapidapi.com/titles/${mltResult.movie_results[i].imdb_id}`;
        const posterOptions = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
            'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
          }
        };

        const posterResponse = await fetch(posterUrl, posterOptions);
        const posterResult = await posterResponse.json();
        console.log(posterResult);

          let moreLikeThis = document.querySelector('.movie-container').innerHTML += `
          <div class="card">
          <div class="poster">
            <img src="${posterResult.results.primaryImage.url}" alt="">
            <a class="link" href="../about-movie/about-movie.html?name=${similerMovieResult.title}">
            <div class="card-details">
              <div>
                  <h1 class="rating">${similerMovieResult.imdb_rating}/10</h1>
                  <h1 class="cs-category">${similerMovieResult.genres[0]} ${similerMovieResult.genres[1]} ${similerMovieResult.genres[2]}</h1>    
              </div>    
            </div>
            </a>
          </div>
          
          <div class="details">
            <p class="cs-title">${similerMovieResult.title}</p>
            <p class="year">${similerMovieResult.year}</p>
          </div>
        </div>
          `;      
        }
      } catch (error) {
        console.error(error);
      }
    }
    // moreLikeApi();
  }
  aboutMovieApiFetching();
}