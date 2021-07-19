//still gonna use promises, but more easier than promises

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
async function displayUser() {
  try {
    const loggedUsers = await loginUser("ed", 1234);
    const videos = await getUserVideos(loginUser.userEmail);
    const detail = await videoDetail(videos[1]);
    console.log(detail);
  } catch (err) {
    console.log(err);
  }
}

displayUser();
