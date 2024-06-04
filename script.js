let orderButton = document.getElementById("orderButton");
let imageContainer = document.getElementById("imageContainer");
let BoxorderNo = document.getElementById("orderNo");
const loader = document.querySelector("#loading");
let ticked = [];

let burgerUrl =
  "https://www.infinitimall.com/wp-content/uploads/2022/04/Burger-King-Infiniti-MAll-Malad.jpg";
let friesUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwx8PRMmGIhouLq097_6DoeiBJYOdr9QMS_tzlUdWMqlp4FT6hwbnFGlrgHkN1fH2hcY";
let coldDrinkUrl =
  "https://www.burgerking.com.sg/upload/image/Product/34/Coke_500x540-09.png";

function randomTime() {
  return Math.floor(Math.random() * 4000);
}

function randomOrderNumber() {
  return Math.floor(Math.random() * 1000);
}

function displayLoading() {
  imageContainer.innerHTML = "";
  BoxorderNo.innerText = "";
  loader.classList.add("display");
  setTimeout(() => {
    loader.classList.remove("display");
  }, 4000);
}

function hideLoading() {
  loader.classList.remove("display");
}

let allInputs = document.querySelectorAll("input");
allInputs.forEach((inp) => {
  inp.addEventListener("click", clickeHandlre);
});

function clickeHandlre(e) {
  if (e.target.checked) {
    ticked.push(e.target.id);
  } else {
    if (ticked.indexOf(e.target.id) !== -1) {
      ticked.splice(ticked.indexOf(e.target.id), 1);
    }
  }
}

orderButton.addEventListener("click", () => {
  displayLoading();
  let indexRandom = Math.floor(Math.random() * ticked.length);
  let id = ticked[indexRandom];
  let RandomTime = randomTime();
  let orderNumber = randomOrderNumber();
  if (id == "burger") {
    setTimeout(() => {
      hideLoading();
      imageContainer.innerHTML = `<img class="w-[450px] h-[300px] mt-10 rounded-xl" src=${burgerUrl} alt="burger">`;
      BoxorderNo.innerText = `Order No : ${orderNumber}`;
    }, RandomTime);
  } else if (id == "frenchfries") {
    setTimeout(() => {
      hideLoading();
      imageContainer.innerHTML = `<img class="w-[450px] h-[300px] mt-10 rounded-xl" src=${friesUrl} alt="Fries">`;
      BoxorderNo.innerText = `Order No : ${orderNumber}`;
    }, RandomTime);
  } else if (id == "colddrink") {
    setTimeout(() => {
      hideLoading();
      imageContainer.innerHTML = `<img class="w-[450px] h-[300px] mt-10 rounded-xl" src=${coldDrinkUrl} alt="Glass">`;
      BoxorderNo.innerText = `Order No : ${orderNumber}`;
    }, RandomTime);
  }
});
