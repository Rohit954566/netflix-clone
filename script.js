
/* POPULAR MOVIES */
const movies = [
  {
    title: "Stranger Things",
    description: "A group of kids uncover supernatural mysteries.",
    image: "https://images.wallpapersden.com/image/download/stranger-things-season-4-poster_bWhtbGeUmZqaraWkpJRmbmdlrWZlbWU.jpg"
  },
  {
    title: "Money Heist",
    description: "A criminal mastermind plans a massive heist.",
    image: "https://wallpapercave.com/wp/wp5993832.png"
  },
  {
    title: "Dark",
    description: "A time-travel mystery across generations.",
    image: "https://wallpapers.com/images/hd/dark-netflix-ls3t9oqfzknzkdp8.jpg"
  }
];

/* 🔥 TRENDING MOVIES */
const trendingMovies = [
  {
    title: "Wednesday",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDSNrLat5dFYmsLzlhNVFhHD7Y0rWdLdQGA&s"
  },
  {
    title: "Avatar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxr48c-eNe8IccrvNxb1vgzUozHXMVFAqepg&s"
  },
  {
    title: "Breaking Bad",
    image: "https://wallpapercat.com/w/full/3/0/a/2015990-1920x1080-desktop-1080p-walter-white-background.jpg"
  },
  {
    title: "Peaky Blinders",
    image: "https://wallpapers.com/images/featured/peaky-blinders-mf0te5aaoy07nn99.jpg"
  },
  {
    title: "Loki",
    image: "https://w0.peakpx.com/wallpaper/19/614/HD-wallpaper-loki-marvel-tvseries-loki-marvel-tv-shows.jpg"
  }
];

/* HERO SECTION */
heroTitle.innerText = movies[0].title;
heroDesc.innerText = movies[0].description;
heroImage.src = movies[0].image;

/* POPULAR MOVIES DISPLAY */
const movieGrid = document.getElementById("movieGrid");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img src="${movie.image}" alt="${movie.title}">`;
  card.onclick = () => openModal(movie);
  movieGrid.appendChild(card);
});

/* 🔥 TRENDING MOVIES DISPLAY */
const trendingGrid = document.getElementById("trendingGrid");

trendingMovies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img src="${movie.image}" alt="${movie.title}">`;
  trendingGrid.appendChild(card);
});

/* MODAL FUNCTIONS */
function openModal(movie) {
  modal.style.display = "flex";
  modalTitle.innerText = movie.title;
  modalDesc.innerText = movie.description || "Trending on Netflix";
}

function closeModal() {
  modal.style.display = "none";
}

