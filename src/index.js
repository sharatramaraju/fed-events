const myBtn1 = document.getElementById("btn1");
myBtn1.addEventListener("click", clickHandler);

const myBtn2 = document.getElementById("btn2");
myBtn2.addEventListener("click", clickHandler);
myBtn2.addEventListener("click", clickHandler2);

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

function clickHandler2(event) {
  console.log("clickHandler2");
  console.log(event);
  console.log(event.target.id);
}

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log("Form was submitted");
  console.log(document.getElementById("fname").value);
  console.log(document.getElementById("lname").value);

  console.log(document.getElementById("ch").checked);

  console.log(document.getElementById("rb1").checked);
  console.log(document.getElementById("rb2").checked);
  console.log(document.getElementById("rb3").checked);

  console.log(document.getElementById("state").value);
  console.log(document.getElementById("comments").value);
}
