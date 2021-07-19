console.log("Start");
function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email });
  }, 1500);
}
const user = loginUser("satyaram413@gmail.com", 12334455, (user) => {
  console.log("Now we have the data");
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log("Videos" + videos);
    videoDetail(videos[0], (video) => {
      console.log(video);
    });
  });
});

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video 1", "videos 2", "videos 3"]);
  });
}

function videoDetail(video, callback) {
  callback(video);
}
console.log("END");
