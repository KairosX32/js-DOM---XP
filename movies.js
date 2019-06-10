function Movie(title, director, releaseDate, cast, genre, rating, summary) {
    this.title = title;
    this.director = director;
    this.releaseDate = releaseDate;
    this.cast = cast;
    this.genre = genre;
    this.rating = rating;
    this.summary = summary;
  }
  
  const movie1 = new Movie(
    "Bumblebee ",
    "Travis Knight",
    2018,
    [
      " Hailee Steinfield",
      " Jorge Lendeborg",
      " John Cena",
      " Jason Drucker",
      " Pamela Adlon"
    ],
    "Action, Comedy",
    "PG-13",
    "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small California beach town. On the cusp of turning 18 and trying to find her place in the world, Charlie Watson discovers Bumblebee, battle-scarred and broken."
  );
  const movie2 = new Movie(
    "Rampage ",
    "Brad Peyton ",
    2018,
    [" Dwayne Johnson", " Naoime Harris", " Malin Akerman", " Jake Lucy"],
    "Action, Adventure",
    "PG-13",
    "When a genetic experiment goes awry, it unleashes super creatures that rampage the city. Scientist Davis races to secure an antidote to try to save the ape that was once his friend."
  );
  const movie3 = new Movie(
    "Ready Player One ",
    "Steven Spielberg",
    2018,
    [" Tye Sherdian", " Olivia Cooke", " Lena Waithe", " T.J. Miller"],
    "Action, Sci-Fi",
    "PG-13",
    'From filmmaker Steven Spielberg comes the science fiction action adventure "Ready Player One," based on Ernest Cline\'s bestseller of the same name, which has become a worldwide phenomenon.'
  );
  const movie4 = new Movie(
    "Deadpool 2",
    "David Leitch",
    2018,
    [
      "Ryan Reynolds",
      " Josh Brolin",
      " Morena Baccarin",
      " Julian Dennison",
      " Zazie Beetz",
      " T.J. Miller"
    ],
    "Action, Comedy",
    "R",
    "Wisecracking mercenary Deadpool meets Russell, an angry teenage mutant who lives at an orphanage. When Russell becomes the target of Cable -- a genetically enhanced soldier from the future -- Deadpool realizes that he'll need some help saving the boy from such a superior enemy. He soon joins forces with Bedlam, Shatterstar, Domino and other powerful mutants to protect young Russell from Cable and his advanced weaponry."
  );
  // console.table([movie1, movie2, movie3, movie4]);
  
  const movies = [movie1, movie2, movie3, movie4];
  
  const title = document.querySelector("#title");
  const director = document.querySelector(".director");
  const releaseDate = document.querySelector(".releaseDate");
  const cast = document.querySelector(".cast");
  const genre = document.querySelector(".genre");
  const rating = document.querySelector(".rating");
  const summary = document.querySelector(".summary");
  const div = document.querySelector(".container");
  
  for (let i = 0; i < movies.length; i++) {
    const m = movies[i];
  
    const card = document.createElement("div");
    card.className = "card";
  
    // Title
    const h4 = document.createElement("h4");
    h4.setAttribute("id", "title");
    h4.innerHTML = m.title;
  
    // Director
    const director = document.createElement("div");
    director.className = "director info-item";
    director.innerHTML = "<span>Director:</span> " + m.director;
  
    // Release Date
    const releaseDate = document.createElement("div");
    releaseDate.className = "releaseDate info-item";
    releaseDate.innerHTML = "<span>Release Date:</span> " + m.releaseDate;
  
    // Cast
    const cast = document.createElement("div");
    cast.className = "cast info-item";
    cast.innerHTML = "<span>Cast:</span> " + m.cast;
  
    // Genre
    const genre = document.createElement("div");
    genre.className = "genre info-item";
    genre.innerHTML = "<span>Genre:</span> " + m.genre;
  
    // Rating
    const rating = document.createElement("div");
    rating.className = "rating info-item";
    rating.innerHTML = "<span>Rating:</span> " + m.rating;
  
    // Summary
    const summary = document.createElement("div");
    summary.className = "summary info-item";
    summary.innerHTML = "<span>Summary: </span>" + m.summary;
  
  
    card.append(h4, director, releaseDate, cast, genre, rating, summary, button);
  
    div.appendChild(card);
  }
  
  
