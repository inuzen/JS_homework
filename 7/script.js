console.log("Task 1");

function initTime() {

  let dt = new Date();

  const formatTime = (i) => (i < 10) ? "0" + i : i;
  let time = {
    seconds: formatTime(dt.getSeconds()),
    minutes: formatTime(dt.getMinutes()),
    hours: formatTime(dt.getHours())
  }
  return time;
}

let span1 = document.createElement("span");
span1.style.color = "red";
let span2 = document.createElement("span");
span2.style.color = "blue";
let span3 = document.createElement("span");
span3.style.color = "green";

// let separator = document.createTextNode(":");
//Почему он перезаписывает текст ноду?
function displayTime() {

  let time = initTime();
  timer.innerHTML = "";
  span1.innerHTML = "";
  span2.innerHTML = "";
  span3.innerHTML = "";
  span1.appendChild(document.createTextNode(time.hours));
  span2.appendChild(document.createTextNode(time.minutes));
  span3.appendChild(document.createTextNode(time.seconds));
  timer.appendChild(span1);
  timer.appendChild(document.createTextNode(":"));
  timer.appendChild(span2);
  timer.appendChild(document.createTextNode(":"));
  timer.appendChild(span3);
}

setInterval(displayTime, 1000);


console.log("Task 2");

let itemArray = [{
  name: "Item 1",
  img: "img/item.png",
  desc: "Some item"
}, {
  name: "Item 2",
  img: "img/item.png",
  desc: "Some item 2"
}, {
  name: "Item 3",
  img: "img/item.png",
  desc: "Some item 3"
}]

function displayItems(itemArray) {

  itemArray.forEach(function(item){
    let itemNode = document.createElement("div");
    let img = document.createElement("img");
    img.src = item.img;
    itemNode.appendChild(img);
    let title = document.createElement("h2");
    title.innerText = item.name;
    itemNode.appendChild(title);
    let description = document.createElement("span");
    description.innerText = item.desc;
    itemNode.appendChild(description);
    itemNode.style.cssText = `display: flex; width: 25%; flex-flow: row nowrap; justify-content: space-around; align-items: center;`

    shop.appendChild(itemNode);
  });

}
displayItems(itemArray);


console.log("Task 3");

let colorArr = ["red", "yellow", "green"];
let lights = street_light.querySelectorAll(".light");

function switcher (){
  let iterator = 0;
  function next() {
    lights.forEach(l => l.style.cssText= "background-color:gray");
    lights[iterator].style.cssText = `background-color: ${colorArr[iterator]}`;
    iterator++;
    if (iterator===3) iterator = 0;
  }
  return next;
}
let sw = switcher();
setInterval(sw, 2000);
