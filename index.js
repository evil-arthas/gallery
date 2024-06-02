const url = "https://dog.ceo/api/breeds/image/random/5"

const button = document.querySelector(".main__button")
const wrap = document.querySelector(".pictures-wrap")
const loader = document.querySelector("#loading");

function displayLoading() {
  loader.classList.add("display");
}

function hideLoading() {
  loader.classList.remove("display");
}


function postPicture(){
  let data
  displayLoading()
  fetch(url)
  .then((res) => res.json())
  .then((res) => {
    data = res.message
    for (i=0;i<data.length;i++){
      let element = `<img src="${data[i]}" alt="error"></img>`
      console.log(element)
      wrap.innerHTML+=element
    }
  })
  .finally(hideLoading)
}

button.addEventListener("click", postPicture)