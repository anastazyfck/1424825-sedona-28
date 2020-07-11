var search = document.querySelector(".form-introduction");
var searchPopup = document.querySelector(".form-look");
var searchForm = searchPopup.querySelector(".form-finder");
var searchDateArrival = searchPopup.querySelector(".form-arrival");
var searchDateDeparture = searchPopup.querySelector(".form-departure");
var searchNumberAdults = searchPopup.querySelector(".form-adults");
var searchNumberKids = searchPopup.querySelector(".form-kids");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("number");
} catch (err) {
  isStorageSupport = false;
}

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.add("modal-show");

  if(storage) {
    searchNumberAdults.value = storage;
  }
  searchDateArrival.focus();
});

searchForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

searchForm.addEventListener("submit", function (evt) {
  if (!searchDateArrival.value || !searchDateDeparture.value || !searchNumberAdults || !searchNumberKids) {
    evt.preventDefault();
  } else {
    localStorage.setItem("number", searchNumberAdults.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      searchPopup.classList.remove("modal-show");
    }
  }
});
