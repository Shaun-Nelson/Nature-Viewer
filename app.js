// import { createClient } from "flickr-sdk";
const API_KEY = "563492ad6f91700001000001e2f01e5688a94b13b884103cacf2626b";
const endpoint =
  "https://api.pexels.com/v1/search/?page=1&per_page=40&query=Nature,animals";
const search = "/search?query=Nature,animals";
const orient = "&orientation=portait";
const img = document.getElementById("img");
const btn = document.getElementById("btn");
const searchbar = document.getElementById("searchbar");
const searchParams = document.getElementById("search-parameters");
const photographer = document.getElementById("photographer");
const url = endpoint + search;
// "curated?per_page=80";

// searchParams.innerHTML = search;

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
      console.log(data);
      let photos = [];
      for (let photo of data.photos) {
        photos.push(photo.src.portrait);
      }
      handler(data);
    });
};

const displayRandomPhoto = (data) => {
  console.log(data);
  let randomIndex = Math.floor(Math.random() * data.photos.length);
  console.log(randomIndex);
  let photo = data.photos[randomIndex];
  img.src = photo.src.portrait;
  photographer.innerHTML = `Photographer: ${photo.photographer}`;
};

const updatePhoto = () => {
  getPhotos(endpoint, displayRandomPhoto);
};

// btn.addEventListener("click", updatePhoto(searchbar.value));
btn.addEventListener("click", updatePhoto);
getPhotos(endpoint, displayRandomPhoto);
