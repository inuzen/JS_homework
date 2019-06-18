let color = {
  colorArr: ["#ff7f50", "#21b4ac", "#90ee90", "#ffa500", "#800080"],
  getColor: function() {
    let rng = Math.floor(Math.random() *5);
    // console.log(this.colorArr[rng]);
    return this.colorArr[rng];
  }
};

let SCORE = 0;
let counter = $(".counter");
let boxes = () => document.querySelectorAll(".card");
let tm=new Timer();

$("#ng-btn").click(function () {
  tm.stopTime();
  counter.text(SCORE=0);
  for (box of boxes()){
    box.style.backgroundColor = color.getColor();
  }
  tm.startTimer();
});

let elementObj = {
  first: "",
  last: "",
  isFirst: true,
  set: function(el) {
    if (this.isFirst) {
      this.first = el;
      this.isFirst = !this.isFirst;
    } else {
      this.last = el;
      this.isFirst = !this.isFirst;
      swapColors(this.first, this.last);

      this.first = "";
      this.last = "";
    }
  }
}

function swapColors(el1, el2) {
  let onlyRow = Math.abs(el1.dataset.row - el2.dataset.row) === 1 && Math.abs(el1.dataset.col - el2.dataset.col) === 0;
  let onlyCol = Math.abs(el1.dataset.row - el2.dataset.row) === 0 && Math.abs(el1.dataset.col - el2.dataset.col) === 1;
  let result = false;
  if (onlyRow || onlyCol) {
    let res = findMatches(el1,el2);
    if(res){
      let temp = "";
      temp = el2.style.backgroundColor;
      el2.style.backgroundColor = el1.style.backgroundColor;
      el1.style.backgroundColor = temp;
      animateMove(el1, el2, onlyRow);
      afterMatch(res);


    } else {
      $(el1).effect("shake", {
      times: 1
    }, 200);

  }

} else{
  $(el1).effect("shake", {
      times: 1
    }, 200);

}

  el1.classList.remove("selected");
  el2.classList.remove("selected");

}

function animateMove(el1, el2, onlyRow){
  let e1 = $(el1), e2 = $(el2);
  let row1= el1.dataset.row, row2 = el2.dataset.row, col1 = el1.dataset.col, col2 = el2.dataset.col;
  let distance = 75;
  let ref = "";
  let direction = true;

  if(!onlyRow){
    ref = "left";
    direction = (col1-col2<0)? true: false;
  }
  else {
    ref = "top";
      direction = (row1-row2<0)? true: false;
  }

  let anim1={}
  anim1[ref] = ( direction ? "-=" : "+=" )+distance;
  let anim2={}
  anim2[ref] = ( direction ? "+=" : "-=" )+distance;

  e2.animate(anim1, 250, "easeInBack")
    .animate(anim2, 250, "easeOutBack");

  e1.animate(anim2, 250,"easeInBack")
    .animate(anim1, 250, "easeOutBack");
}

function Storage() {
  let currentColor = "";
  let counter = 1;

  this.streak = [];
  // this.streak = new Set();
  this.set = function(color) {
    this.currentColor = color;
  }
  this.checkColor = function(box, arr) {
    console.log(this.currentColor, box.color);
    if (this.currentColor === box.color && this.currentColor !== "grey") {
      this.counter++;

      if (!arr.includes(box.box))
        arr.push(box.box);
        console.log(arr);
      if (arr.length > 2) {
        let str = this.streak;
        str = arr.map(function (val) {
          if (!str.includes(val))
            str.push(val);
        });

      }
    } else {
      arr = [];
    }
    this.currentColor = box.color;
    return arr;
  }
  this.getStreak = () => this.streak;
}


function findMatches(el1="",el2="") {


  let boxArr=[];
  let num = 0;
  for (let box of boxes()) {
    boxArr.push({
      row: box.dataset.row,
      col: box.dataset.col,
      color: box.style.backgroundColor,
      box: box,
      num: num++
    });
  }
  console.log(el1, el2);
  if(el1&&el2){
  let color1, color2, el1_col, el2_col, el1_row, el2_row;
     color1 = el1.style.backgroundColor;
     color2 = el2.style.backgroundColor;
     el1_row= parseInt(el1.dataset.row);
     el1_col= parseInt(el1.dataset.col);
     el2_row= parseInt(el2.dataset.row);
     el2_col= parseInt(el2.dataset.col);
     boxArr[el2_col*5 + el2_row].color = color1;
     boxArr[el1_col*5 + el1_row].color = color2;

  }

  //check rows
  let rowMatch = checkAisles(boxArr, ["row", "col"]);
  //checkColumns
  let colMatch = checkAisles(boxArr, ["col", "row"]);

  let res = [];
  if (rowMatch&&colMatch) {
    res.push(...rowMatch);
    res.push(...colMatch);

  }
  else if (rowMatch) {
  res.push(...rowMatch);
  }
  else if(colMatch){
    res.push(...colMatch);
  }
  else res = false;
  // console.log(res);
  return res;
}

function checkAisles(boxArr, options){
  let rowArr=[];
  let greyArr = [];

  let storage = new Storage();
  for (let iter = 0; iter < N; iter++) {
    for (let b of boxArr) {

      if (b[options[0]] == iter && b[options[1]] == 0) {
        storage.set(b.color);
      }
      if (b[options[0]] == iter) {
        rowArr = storage.checkColor(b, rowArr);
        if (!rowArr.includes(b.box))
          rowArr.push(b.box);
      }

    }
    rowArr = [];

  }
  let tempArr = storage.getStreak();
  if (tempArr !== undefined && tempArr.length > 0) {
    // console.log(tempArr);
    return tempArr;
  }else return false;
}

function afterMatch (greyArr){
  if (greyArr !== undefined && greyArr.length > 0) {
    SCORE += greyArr.length;
    for (let b of greyArr) {
       // console.log(b);
      $(b).transfer({
        to: $(counter),
        bColor: b.style.backgroundColor,
        duration: 500
      }, () => {
        counter.text(SCORE);
      });
      $(b).stop(false,true);

      // $(b).addClass("fade");
      // $(b).toggle("puff");
      $(b).css( "background-color", color.getColor());
      // $(b).removeClass("fade");
      // $(b).toggle("puff");
    }
  }
  tm.addTime(3);
}

function createBox(container, column, row) {
  let card = document.createElement("div");
  card.classList.add("card");
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  card.style.backgroundColor = color.getColor();
  card.classList.remove("selected");
  card.dataset.col = column;
  card.dataset.row = row;
  card.onclick = function() {
    this.classList.toggle("selected");
    elementObj.set(this);

  }
  cardContainer.appendChild(card);
  container.appendChild(cardContainer);
}

function create_field(n) {
  let box = document.querySelector(".field");

  for (let i = 0; i < n; i++) {
    let container = document.createElement("div");
    container.classList.add("flex-container");
    for (let j = 0; j < n; j++) {
      createBox(container, i, j);
    }
    box.appendChild(container);
  }
  tm.startTimer();

}
const N = 5;
create_field(N);
