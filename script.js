let openFilterProfit = document.querySelector(".menu_text_profit");
let menuProfit = document.querySelector(".menu_profit_component");
let closeFilterProfit = document.querySelector(".menu_profit_text");

menuProfit.style.display = "none";

openFilterProfit.addEventListener("click", () => {
  menuProfit.style.display = "block";
});

closeFilterProfit.addEventListener("click", () => {
  menuProfit.style.display = "none";
});

let openFilterInfo = document.querySelector(".menu_text_info");
let menuInfo = document.querySelector(".menu_info_component");
let closeFilterInfo = document.querySelector(".menu_info_text");

menuInfo.style.display = "none";

openFilterInfo.addEventListener("click", () => {
  menuInfo.style.display = "block";
});

closeFilterInfo.addEventListener("click", () => {
  menuInfo.style.display = "none";
});
