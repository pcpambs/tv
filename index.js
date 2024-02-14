document.querySelector(".a03").addEventListener("click", func01);
document.querySelector(".a04").addEventListener("click", func02);

function func01() {
  document.querySelectorAll(".a02")[0].setAttribute("class", "a022"); //show more
  document.querySelectorAll(".a02")[0].setAttribute("class", "a022"); //show more
  document.querySelectorAll(".a02")[0].setAttribute("class", "a022"); //show more
  document.querySelectorAll(".a02")[0].setAttribute("class", "a022"); //show more
  document.querySelectorAll(".a02")[0].setAttribute("class", "a022"); //show more
  document.querySelectorAll(".a02")[0].setAttribute("class", "a022"); //show more
  document.querySelector(".a03").setAttribute("class", "a033"); //hide "more.."
  document.querySelector(".a04").setAttribute("class", "a044"); //show "less.."
}

function func02() {
  document.querySelectorAll(".a022")[0].setAttribute("class", "a02"); //show less
  document.querySelectorAll(".a022")[0].setAttribute("class", "a02"); //show less
  document.querySelectorAll(".a022")[0].setAttribute("class", "a02"); //show less
  document.querySelectorAll(".a022")[0].setAttribute("class", "a02"); //show less
  document.querySelectorAll(".a022")[0].setAttribute("class", "a02"); //show less
  document.querySelectorAll(".a022")[0].setAttribute("class", "a02"); //show less
  document.querySelector(".a033").setAttribute("class", "a03"); //hide "less.."
  document.querySelector(".a044").setAttribute("class", "a04"); //show "more.."
}
