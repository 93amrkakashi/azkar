const counter: NodeListOf<HTMLHeadingElement> =
  document.querySelectorAll(".counter .num");

counter.forEach((count) => {
  let result: number = +count.innerHTML;
  count.onclick = function () {
    result -= 1;
    count.innerHTML = `${result}`;
    
    if (result <= 0) {
      count.classList.add("done");
      result = 0;
      count.innerHTML = "0";
    }
  };
});





// dddd
