window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  let movieName = params.get('name');
  console.log(movieName);

  async function aboutMovieApiFetching () {
    const p = await fetch(`http://www.omdbapi.com/?t=${movieName}&plot=full&apikey=4425ba46`);
    const response = await p.json();
    console.log(response);


    let poster = document.querySelector('.about-movie-div').innerHTML += `
    <img class="about-movie-img" src="${response.Poster}" alt="">
    `;
  
    let title = document.querySelector('.title').innerHTML += `
    <h1 class="title">${response.Title}</h1>
    `;
  
    let movieSubDetails = document.querySelector('.sub-details');
    movieSubDetails.innerHTML += `
      <p class="release-date">${response.Year}</p>
      <p class="rated">${response.Rated}</p>
      <p class="duration">${response.Runtime}</p>
    `;

    let language = document.querySelector('.language').innerHTML += ` ${response.Language}`
    let category = document.querySelector('.category').innerHTML += ` ${response.Genre}`

    let ratingDetails = document.querySelector('.rating-details').innerHTML +=`
    <p class="rating-num">${response.imdbRating}</p>
    <p class="votes">Votes:${response.imdbVotes}</p>
    `;

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
    

    // storyline
    let storyline = document.querySelector('.storyline').innerHTML +=`
    <p class="movie-synopsis-texts">${response.Plot}</p>
    `;


    // movie images
    let images = document.querySelector('.photos');
    async function movieImagesApiFetching () {
      const url = `https://online-movie-database.p.rapidapi.com/title/v2/get-images?tconst=${response.imdbID}&first=20`;
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
      const castApiIdUrl = `https://tvshow.p.rapidapi.com/Movie/Search?Language=en-US&Content=${response.Title}&Adult=false&Page=1`;
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
                <img src="${castResult[i].image}" alt="">
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
      const idResponse = await fetch(`http:www.omdbapi.com/?t=${movieName}&apikey=4425ba46`);
      const idResult = await idResponse.json();  

      const url = `https://movies-tv-shows-database.p.rapidapi.com/?movieid=${idResult.imdbID}&page=1`;
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
        // fetching movie from omdb
        const mResponse = await fetch(`http:www.omdbapi.com/?t=${mltResult.movie_results[i].title}&apikey=4425ba46`);
        const mResult = await mResponse.json();  

          let moreLikeThis = document.querySelector('.movie-container').innerHTML += `
          <div class="card">
          <div class="poster">
            <img src="${mResult.Poster}" alt="">
            <a class="link" href="../about-movie/about-movie.html?name=${mResult.Title}">
            <div class="card-details">
              <div>
                  <h1 class="rating">${mResult.imdbRating}/10</h1>
                  <h1 class="cs-category">${mResult.Genre}</h1>    
              </div>    
            </div>
            </a>
          </div>
          
          <div class="details">
            <p class="cs-title">${mResult.Title}</p>
            <p class="year">${mResult.Year}</p>
          </div>
        </div>
          `;      
        }
      } catch (error) {
        console.error(error);
      }
    }
    moreLikeApi();
  }
  aboutMovieApiFetching();
}



const lenis = new Lenis()
lenis.on('scroll', (e) => {
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
