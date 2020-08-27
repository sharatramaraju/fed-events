const myBtn1 = document.getElementById("btn1");
myBtn1.addEventListener("click", clickHandler);

const myBtn2 = document.getElementById("btn2");
myBtn2.addEventListener("click", clickHandler);

function clickHandler(event) {
  console.log(event);
  console.log(event.target.id);

  if (event.target.id === "btn1") {
    console.log("Handling button 1 case");
  }

  if (event.target.id === "btn2") {
    console.log("Handling button 2 case");
  }
}
