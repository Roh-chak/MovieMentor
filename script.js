const lenis = new Lenis()
lenis.on('scroll', (e) => {
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)




let topImdbMoviesData = [
  {
    rank:1,
    title:"The Shawshank Redemption",
    description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
    genre: 'Drama, action',
    thumbnail:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating:"9.3",
    id:"top1",
    year:1994,
    imdbid:"tt0111161",
    imdb_link:"https://www.imdb.com/title/tt0111161"
  },
  {
    rank:2,
    title:"The Godfather",
    description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    genre: "Crime, Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating:"9.2",
    id:"top2",
    year:1972,
    imdbid:"tt0068646",
    imdb_link:"https://www.imdb.com/title/tt0068646"
  },
  {
    rank:3,
    title:"The Dark Knight",
    description:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    image:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre:"Action, Crime, Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    rating:"9.0",
    id:"top3",
    year:2008,
    imdbid:"tt0468569",
    imdb_link:"https://www.imdb.com/title/tt0468569"
  },
  {
    rank:4,
    title:"The Godfather Part II",
    description:"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    image:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    genre:"Crime, Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
    rating:"9.0",
    id:"top4",
    year:1974,
    imdbid:"tt0071562",
    imdb_link:"https://www.imdb.com/title/tt0071562"
  },
  {
    rank:5,
    title:"12 Angry Men",
    description:"The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    image:"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    genre:"Crime, Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating:"9.0",
    id:"top5",
    year:1957,
    imdbid:"tt0050083",
    imdb_link:"https://www.imdb.com/title/tt0050083"
  },
  {
    rank:6,
    title:"Schindler's List",
    description:"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    image:"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre:"Biography, Drama, History",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating:"9.0",
    id:"top6",
    year:1993,
    imdbid:"tt0108052",
    imdb_link:"https://www.imdb.com/title/tt0108052"
  },
  {
    rank:7,
    title:"The Lord of the Rings: The Return of the King",
    description:"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    image:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre: "Action, Adventure, Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating:"9.0",
    id:"top7",
    year:2003,
    imdbid:"tt0167260",
    imdb_link:"https://www.imdb.com/title/tt0167260"
  },
  {
    rank:8,
    title:"Pulp Fiction",
    description:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    image:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    genre:"Crime, Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating:"8.9",
    id:"top8",
    year:1994,
    imdbid:"tt0110912",
    imdb_link:"https://www.imdb.com/title/tt0110912"
  },
  {
    rank:9,
    title:"The Lord of the Rings: The Fellowship of the Ring",
    description:"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    image:"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@",
    genre:"Action, Adventure, Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating:"8.8",
    id:"top9",
    year:2001,
    imdbid:"tt0120737",
    imdb_link:"https://www.imdb.com/title/tt0120737"
    
  },
  {
    rank:10,
    title:"The Good, the Bad and the Ugly",
    description:"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    image:"https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre:"Adventure, Western",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating:"8.8",
    id:"top10",
    year:1966,
    imdbid:"tt0060196",
    imdb_link:"https://www.imdb.com/title/tt0060196"
  },
  {
    rank:11,
    title:"Forrest Gump",
    description:"The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    image:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    genre:"Drama, Romance",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating:"8.8",
    id:"top11",
    year:1994,
    imdbid:"tt0109830",
    imdb_link:"https://www.imdb.com/title/tt0109830"
    
  },
  {
    rank:12,
    title:"Fight Club",
    description:"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    image:"https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@",
    genre: "Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating:"8.8",
    id:"top12",
    year:1999,
    imdbid:"tt0137523",
    imdb_link:"https://www.imdb.com/title/tt0137523"
  },
  {
    rank:13,
    title:"The Lord of the Rings: The Two Towers",
    description:"While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    image:"https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    genre:"Action, Adventure, Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating:"8.8",
    id:"top13",
    year:2002,
    imdbid:"tt0167261",
    imdb_link:"https://www.imdb.com/title/tt0167261"
  },
  {
    rank:14,
    title:"Inception",
    description:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    image:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre:"Action, Adventure, Sci-Fi",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating:"8.7",
    id:"top14",
    year:2010,
    imdbid:"tt1375666",
    imdb_link:"https://www.imdb.com/title/tt1375666"
  },
  {
    rank:15,
    title:"Star Wars: Episode V - The Empire Strikes Back",
    description:"After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    image:"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    genre:"Action, Adventure, Fantasy",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating:"8.7",
    id:"top15",
    year:1980,
    imdbid:"tt0080684",
    imdb_link:"https://www.imdb.com/title/tt0080684"
  },
  {
    rank:16,
    title:"The Matrix",
    description:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    image:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    genre:"Action, Sci-Fi",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating:"8.7",
    id:"top16",
    year:1999,
    imdbid:"tt0133093",
    imdb_link:"https://www.imdb.com/title/tt0133093"
  },
  {
    rank:17,
    title:"Goodfellas",
    description:"The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    image:"https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    genre:"Biography, Crime, Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    rating:"8.7",
    id:"top17",
    year:1990,
    imdbid:"tt0099685",
    imdb_link:"https://www.imdb.com/title/tt0099685"
  },
  {
    rank:18,
    title:"Spider-Man: Across the Spider-Verse",
    description:"Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    image:"https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre:"Animation, Action, Adventure",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating:"8.7",
    id:"top18",
    year:2023,
    imdbid:"tt9362722",
    imdb_link:"https://www.imdb.com/title/tt9362722"
  },
  {
    rank:19,
    title:"Interstellar",
    description:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    genre:"Adventure, Drama, Sci-Fi",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating:"8.7",
    id:"top19",
    year:2014,
    imdbid:"tt0816692",
    imdb_link:"https://www.imdb.com/title/tt0816692"
  },
  {
    rank:20,
    title:"One Flew Over the Cuckoo's Nest",
    description:"In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
    image:"https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    big_image:"https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@",
    genre:"Drama",
    thumbnail:"https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rating:"8.6",
    id:"top20",
    year:1975,
    imdbid:"tt0073486",
    imdb_link:"https://www.imdb.com/title/tt0073486"
  }
];
// random number for movie recommandation
randomNumber = Math.floor(Math.random() * 20);

// for recommendation poster
async function recommendationPosterApi (result) {
  // api from account no.1
  // const url = `https://mdblist.p.rapidapi.com/?i=${topImdbMoviesData[randomNumber].imdbid}`;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
  //     'x-rapidapi-host': 'mdblist.p.rapidapi.com'
  //   }
  // };
  

  try {
    // const p = await fetch(url, options);
    // const moviePoster = await p.json();
    // console.log(moviePoster);
    // console.log(moviePoster.d[0].i.imageUrl);
    // moviePoster.d[0].i.imageUrl

    posterOutput = document.querySelector('.recommended-movie-div');
    posterOutput.innerHTML += `
    <img class="recommended-movie-img" src="${topImdbMoviesData[randomNumber].image}" alt="" loading='lazy'>
    `;
    // <img class="recommended-movie-img" src="${result[randomNumber].image}" alt="">

  } catch (error) {
    console.error(error);
  }
}

// recommendation data
async function recommendationData(result) {
  // let recommendationOutput = `
  // <h1 class="title">${result[randomNumber].title}</h1>
  // <h3 class="release-date">${result[randomNumber].year}</h3>
  // <h3 class="category">${result[randomNumber].genre}</h3>
  // <div class="rating">
  //     <div class="imdb-svg">
  //         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#f3ce13" d="M4 7c-1.103 0-2 .897-2 2v6.4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2H4Zm1.4 2.363h1.275v5.312H5.4V9.362Zm1.962 0H9l.438 2.512.287-2.512h1.75v5.312H10.4v-3l-.563 3h-.8l-.512-3v3H7.362V9.362Zm8.313 0H17v1.2c.16-.16.516-.363.875-.363.36.04.84.283.8.763v3.075c0 .24-.075.404-.275.524-.16.04-.28.075-.6.075-.32 0-.795-.196-.875-.237-.08-.04-.163.275-.163.275h-1.087V9.362Zm-3.513.037H13.6c.88 0 1.084.078 1.325.237.24.16.35.397.35.838v3.2c0 .32-.15.563-.35.762-.2.2-.484.288-1.325.288h-1.438V9.4Zm1.275.8v3.563c.2 0 .488.04.488-.2v-3.126c0-.28-.247-.237-.488-.237Zm3.763.675c-.12 0-.2.08-.2.2v2.688c0 .159.08.237.2.237.12 0 .2-.117.2-.238l-.037-2.687c0-.12-.043-.2-.163-.2Z"></path></g></svg>
  //     </div>
  //     <p>${result[randomNumber].rating}</p>
  // </div>
  // <p class="movie-synopsis">Synopsis</p>
  // <p class="movie-synopsis-texts">${result[randomNumber].description}</p>
  // `;
  
  // let recommendedMovies = document.querySelector('.movie-description');
  // recommendedMovies.innerHTML = recommendationOutput;


  let recommendationOutput = `
  <h1 class="title">${topImdbMoviesData[randomNumber].title}</h1>
  <h3 class="release-date">${topImdbMoviesData[randomNumber].year}</h3>
  <h3 class="category">${topImdbMoviesData[randomNumber].genre}</h3>
  <div class="rating">
      <div class="imdb-svg">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#f3ce13" d="M4 7c-1.103 0-2 .897-2 2v6.4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2H4Zm1.4 2.363h1.275v5.312H5.4V9.362Zm1.962 0H9l.438 2.512.287-2.512h1.75v5.312H10.4v-3l-.563 3h-.8l-.512-3v3H7.362V9.362Zm8.313 0H17v1.2c.16-.16.516-.363.875-.363.36.04.84.283.8.763v3.075c0 .24-.075.404-.275.524-.16.04-.28.075-.6.075-.32 0-.795-.196-.875-.237-.08-.04-.163.275-.163.275h-1.087V9.362Zm-3.513.037H13.6c.88 0 1.084.078 1.325.237.24.16.35.397.35.838v3.2c0 .32-.15.563-.35.762-.2.2-.484.288-1.325.288h-1.438V9.4Zm1.275.8v3.563c.2 0 .488.04.488-.2v-3.126c0-.28-.247-.237-.488-.237Zm3.763.675c-.12 0-.2.08-.2.2v2.688c0 .159.08.237.2.237.12 0 .2-.117.2-.238l-.037-2.687c0-.12-.043-.2-.163-.2Z"></path></g></svg>
      </div>
      <p>${topImdbMoviesData[randomNumber].rating}</p>
  </div>
  <p class="movie-synopsis">Synopsis</p>
  <p class="movie-synopsis-texts">${topImdbMoviesData[randomNumber].description.slice(0,110)}...</p>
  `;
  
  let recommendedMovies = document.querySelector('.movie-description');
  recommendedMovies.innerHTML = recommendationOutput;

}
// most popular
async function mostPopularMoviePoster (result) {
      try {
        for (let i=0; i<4; i++) {
          // // api from account no.1
          // const url = `https://mdblist.p.rapidapi.com/?i=${result[i].imdbid}`;
          // const options = {
          //   method: 'GET',
          //   headers: {
          //     'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
          //     'x-rapidapi-host': 'mdblist.p.rapidapi.com'
          //   }
          // };

          // const response = await fetch(url, options);
          // const moviePoster = await response.json();
          // console.log(result);

          // let p = await fetch(`http://www.omdbapi.com/?t=${result[i].title}&apikey=4425ba46`);
          // let moviePoster = await p.json();
          
          // let mostPopular = document.querySelector(`.mp-card${i}`);
          // mostPopular.innerHTML += `
          // <div class="card">
          // <div class="poster">
          //   <img src="${moviePoster.Poster}" alt="">
          //   <a class="link" target="_blank" href="about-movie/about-movie.html?name=${result[i].title}">
          //   <div class="card-details">
          //     <div>
          //         <h1 class="rating">${result[i].rating}/10</h1>
          //         <h1 class="cs-category">${result[i].genre[0]}</h1>    
          //     </div>    
          //   </div>
          //   </a>
          // </div>
          
          // <div class="details">
          //   <p class="cs-title">${result[i].title}</p>
          //   <p class="year">${result[i].year}</p>
          // </div>
          // </div>
          // `;


          let mostPopular = document.querySelector(`.mp-card${i}`);
          mostPopular.innerHTML += `
          <div class="card">
          <div class="poster">
            <img src="${topImdbMoviesData[i].image}" alt="" loading='lazy'>
            <a class="link" target="_blank" href="about-movie/about-movie.html?name=${topImdbMoviesData[i].title}&id=${topImdbMoviesData[i].imdbid}">
            <div class="card-details">
              <div>
                  <h1 class="rating">${topImdbMoviesData[i].rating}/10</h1>
                  <h1 class="cs-category">${topImdbMoviesData[i].genre}</h1>    
              </div>    
            </div>
            </a>
          </div>
          
          <div class="details">
            <p class="cs-title">${topImdbMoviesData[i].title}</p>
            <p class="year">${topImdbMoviesData[i].year}</p>
          </div>
          </div>
          `;

      }
    
      } catch (error) {
        console.error(error);
      }  
}

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
      let trendingMovieCard = document.querySelector(`.tm-card${i}`);
      console.log(result)
      
      trendingMovieCard.innerHTML += `
      <div class="card">
      <div class="poster">
        <img src="${result.data.movies.edges[i].node.primaryImage.url}" alt="" loading='lazy'>
        <a class="link" target="_blank" href="about-movie/about-movie.html?name=${result.data.movies.edges[i].node.originalTitleText.text}">
        <div class="card-details">
          <div>
              <h1 class="rating">${result.data.movies.edges[i].node.ratingsSummary.aggregateRating}/10</h1>
              <h1 class="cs-category">${result.data.movies.edges[i].node.titleGenres.genres[0].genre.text}</h1>
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
      // const p = await fetch(`http:www.omdbapi.com/?t=${result[i].title.slice(0, -7)}&y=2024&apikey=4425ba46`);
      // const response = await p.json();
      // console.log(response);
  
    //   let latestMovie = document.querySelector(`.nm-card${i}`);
    //   let latestMovieCard = `
    //   <div class="card">
    //   <div class="poster">
    //     <img src="${response.Poster}" alt="">
    //     <a class="link" target="_blank" href="about-movie/about-movie.html?name=${response.Title}">
    //     <div class="card-details">
    //       <div>
    //           <h1 class="rating">${response.imdbRating}/10</h1>
    //           <h1 class="cs-category">${response.Genre}</h1>    
    //       </div>    
    //     </div>
    //     </a>
    //   </div>
      
    //   <div class="details">
    //     <p class="cs-title">${response.Title}</p>
    //     <p class="year">${response.Year}</p>
    //   </div>
    // </div>
    // `;


    // api from account no.1
    // const url = `https://mdblist.p.rapidapi.com/?s=${result[i].title.slice(0, -7)}`;
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
    //     'x-rapidapi-host': 'mdblist.p.rapidapi.com'
    //   }
    // };


    //  getting id / acc-1 api
    const url = `https://imdb146.p.rapidapi.com/v1/find/?query=${result[i].title.slice(0, -7)}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
        'x-rapidapi-host': 'imdb146.p.rapidapi.com'
      }
    };
    const idResponse = await fetch(url, options);
    const movieId = await idResponse.json();
    console.log(movieId.titleResults.results[0].id);

    // getting movieDetails / acc-1 api
    const movieDetailsUrl = `https://movies-tv-shows-database.p.rapidapi.com/?movieid=${movieId.titleResults.results[0].id}`;
    const movieDetailsOptions = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '10501af11amsh23d3ab5f364ce9bp110a89jsn5f8e32edc574',
        'x-rapidapi-host': 'movies-tv-shows-database.p.rapidapi.com',
        Type: 'get-movie-details'
      }
    };

    const movieResponse = await fetch(movieDetailsUrl, movieDetailsOptions);
    const movieDetails = await movieResponse.json();

    let movieRating = movieDetails.imdb_rating.substr(0,3);


    let latestMovie = document.querySelector(`.nm-card${i}`);
    let latestMovie2= `
    <div class="card">
    <div class="poster">
      <img src=${movieId.titleResults.results[0].titlePosterImageModel.url} alt="" loading='lazy'>
      <a class="link" target="_blank" href="about-movie/about-movie.html?name=${movieDetails.title}">
      <div class="card-details">
        <div>
            <h1 class="rating">${movieRating}/10</h1>
            <h1 class="cs-category">${movieDetails.genres[0]} ${movieDetails.genres[1]} ${movieDetails.genres[2]}</h1>    
        </div>    
      </div>
      </a>
    </div>
    
    <div class="details">
      <p class="cs-title">${movieDetails.title}</p>
      <p class="year">${movieDetails.year}</p>
    </div>
  </div>
  `;
  latestMovie.innerHTML += latestMovie2
    }
  } catch (error) {
    console.error(error);
  }
}

async function latestMovieApiFetching () {
  try {
    let response = await fetch(latestMovieUrl, latestMovieOptions);
    let result = await response.json();
    console.log(result[0].title)
    latestMovieData(result)
  } catch (error) {
    console.error(error);
  }  
}

async function runApp () {
  await recommendationPosterApi();
  await recommendationData();
  await mostPopularMoviePoster();
  await trendingMovieFetching();
  await latestMovieApiFetching();
}

runApp();
