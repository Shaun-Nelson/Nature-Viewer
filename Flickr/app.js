const Flickr = require("flickr-sdk");

const API_KEY = "a6cd368d02f569a63b023fb676430b1f";
const API_SECRET = "e56a102e8c28fd87";
const flickr = new Flickr(API_KEY);
// const oauth = new Flickr.OAuth(API_KEY, API_SECRET);

const getURL = (photo_info) => {
  return `https://live.staticflickr.com/${photo_info.serverID}/${photo_info.id}_${photo_info.secret}_b.jpg`;
};

flickr.photos
  .search({
    text: "nature",
    tags: ["nature"],
  })
  .then((res) => {
    let photo_info = {};

    for (let photo of res.body.photos.photo) {
      photo_info.id = photo.id;
      photo_info.serverID = photo.server;
      photo_info.secret = photo.secret;
    }
    const url = getURL(photo_info);
    console.log(url);
  })
  .then((err) => {
    console.error(err);
  });
