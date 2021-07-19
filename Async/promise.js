// promise is just an object that gives result of an async operation
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the users");
    // resolve({ user: "ed" });
    reject("User Not logged");
  }, 2000);
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 1500);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video 1", "videos 2", "videos 3"]);
    }, 2000);
  });
}
function videoDetail(video) {
  return new Promise((resolve, reject) => {
    resolve(video);
  });
}
loginUser("satyaram413@gmail.com", "password")
  .then((user) => getUserVideos(user.email))
  .then((videos) => videoDetail(videos[1]))
  .then((detail) => console.log(detail))
  .catch((err) => {
    console.log(err);
  });

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Gteting stuff from youtube");
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 2000);
});
const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting stuff from facebook");
    resolve({ username: "johncenati" });
  }, 2000);
});
Promise.all([yt, fb]).then((result) => console.log(result));
