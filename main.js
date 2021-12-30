// semoga kamu + text
let wish = document.querySelector(".wish");
let container = document.querySelector(".container");

var inputKata = prompt("Enter your wish <3");
if (inputKata) {
  //   word.innerHTML = inputKata;
} else {
  alert("Oops sorry, wish cant be empty!");
}

const wrapper = document.querySelector(".wrapper");

function thanosSnap() {
  wrapper.style.display = "none";
  container.style.display = "block";
  wish.innerHTML = "Semoga kamu " + inputKata + " yaa, aamiin!";
}
