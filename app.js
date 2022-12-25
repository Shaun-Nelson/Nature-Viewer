// import { createClient } from "flickr-sdk";
const API_KEY = "563492ad6f91700001000001e2f01e5688a94b13b884103cacf2626b";
const endpoint =
  "https://api.pexels.com/v1/search/?page=1&per_page=40&query=Nature";
const query = "/search?query=";
const search = "Nature";
const orient = "&orientation=portait";
const img = document.getElementById("img");
const btn = document.getElementById("btn");
const searchbar = document.getElementById("searchbar");
const searchParams = document.getElementById("search-parameters");
const photographer = document.getElementById("photographer");
const altText = document.getElementById("alt-text");
const url = endpoint + search;
// "curated?per_page=80";

searchParams.innerHTML = search;

const getPhotos = async (search, handler) => {
  await fetch(search, {
    headers: {
      Authorization: API_KEY,
    },
  })
    .then(
      (res) => res.json(),
      (rej) => console.log(rej)
    )
    .then((data) => {
      handler(data);
    });
};

const displayRandomPhoto = (data) => {
  let photo = data.photos[Math.floor(Math.random() * data.photos.length)];
  window.innerWidth >= 800
    ? (document.body.style.backgroundImage = `url('${photo.src.landscape}')`)
    : (document.body.style.backgroundImage = `url('${photo.src.portrait}')`);
  altText.innerHTML = photo.alt;
  photographer.innerHTML = `Photographer: ${photo.photographer}`;
};

const updatePhoto = () => {
  getPhotos(endpoint, displayRandomPhoto);
};

btn.addEventListener("click", updatePhoto);
getPhotos(endpoint, displayRandomPhoto);
