const songList = document.querySelector(".singer-song-list");
const mainSong = document.querySelector(".main-song__album img");

function showSongInfo(event) {
  let li = event.target.tagName;
  console.log(li);
  if (li == "DIV") {
    li = event.target.parentElement;
  } else if (li == "IMG" || li == "I") {
    li = event.target.parentElement.parentElement;
  } else if (li == "H6" || li == "H5") {
    li = event.target.parentElement.parentElement.parentElement;
  } else if (li == "LI") {
    li = event.target;
  }
  li.children[0].classList.add("selected");
  li.children[0].children[0].createElement("i");

  console.log(li.children[0].children[0]);
  // mainSong.setAttribute("src", "images/crybaby.jpg");
  //   li.querySelector("img").setAttribute(
  //     "src",
  //     songList.querySelector("img").src
  //  );
}

songList.addEventListener("click", showSongInfo);
