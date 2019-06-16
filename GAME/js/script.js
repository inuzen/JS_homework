let color = {
  colorArr: ["coral", "#21b4ac", "lightgreen", "orange", "purple"],
  // colorArr: ["rgba(108, 37, 61, 1)", "rgba(108, 60, 102, 1)", "rgba(108, 130, 165, 1)", "rgba(155, 91, 193, 1)", "rgba(187, 58, 193, 1)"],
  getColor: function() {
    let rng = Math.floor(Math.random() * (this.colorArr.length));
    return this.colorArr[rng];
  }
};

let SCORE = 0;
let counter = $(".counter");

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
      findMatches();
      this.first = "";
      this.last = "";
    }
  }
}

function swapColors(el1, el2) {
  let onlyRow = Math.abs(el1.dataset.row - el2.dataset.row) === 1 && Math.abs(el1.dataset.col - el2.dataset.col) === 0;
  let onlyCol = Math.abs(el1.dataset.row - el2.dataset.row) === 0 && Math.abs(el1.dataset.col - el2.dataset.col) === 1;
  if (onlyRow || onlyCol) {
    let temp = "";
    temp = el2.style.backgroundColor;
    el2.style.backgroundColor = el1.style.backgroundColor;
    el1.style.backgroundColor = temp;

  } else $(el1).effect("shake", {
    times: 1
  }, 200);


  el1.classList.remove("selected");
  el2.classList.remove("selected");
}

function Storage() {
  let currentColor = "";
  let counter = 1;

  let streak = [];
  this.set = function(color) {
    this.currentColor = color;
  }
  this.checkColor = function(box, arr) {
    if (this.currentColor === box.color && this.currentColor !== "grey") {
      this.counter++;
      if (!arr.includes(box.box))
        arr.push(box.box);
      if (arr.length > 2) {
        this.streak = [...arr];
      }
    } else {
      arr = [];
    }
    this.currentColor = box.color;
    // console.log("Original Array: ", arr);
    return arr;
  }
  this.getStreak = () => this.streak;
}

function findMatches() {
  let boxes = document.querySelectorAll(".card");
  let colArr = [],
    rowArr = [];
  let boxArr = [];
  let greyArr = [];

  for (let box of boxes) {
    boxArr.push({
      row: box.dataset.row,
      col: box.dataset.col,
      color: box.style.backgroundColor,
      box: box
    });
  }
  //check rows
  for (let row = 0; row < N; row++) {
    // console.log("Row number " + row);
    let storage = new Storage();

    for (let b of boxArr) {
      if (b.row == row && b.col == 0) {
        storage.set(b.color);
      }
      if (b.row == row) {
        rowArr = storage.checkColor(b, rowArr);
        if (!rowArr.includes(b.box))
          rowArr.push(b.box);
      }
    }
    rowArr = [];

    greyArr = storage.getStreak();
    if (greyArr !== undefined && greyArr.length > 0) {
      SCORE += greyArr.length;
      for (let b of greyArr) {
        $(b).transfer({
          to: $("h2"),
          duration: 500
        }, () => {
          counter.text(SCORE);
        });
        b.style.backgroundColor = "grey";
      }
      greyArr = [];
    }

  }
  //check columns
  for (let col = 0; col < N; col++) {
    let storage = new Storage();

    for (let b of boxArr) {
      if (b.col == col && b.row == 0) {
        storage.set(b.color);
      }
      if (b.col == col) {
        colArr = storage.checkColor(b, colArr);
        if (!colArr.includes(b.box))
          colArr.push(b.box);
      }
    }
    colArr = [];
    greyArr = storage.getStreak();
    if (greyArr !== undefined && greyArr.length > 0) {
      SCORE += greyArr.length;
      for (let b of greyArr) {
        $(b).transfer({
          to: $("h2"),
          duration: 500
        }, () => {
          counter.text(SCORE);
        });
        b.style.backgroundColor = "grey";
      }
      greyArr = [];
    }

  }


}


function createBox(container, column, row) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor = color.getColor();
  card.classList.remove("selected");
  card.dataset.col = column;
  card.dataset.row = row;
  card.onclick = function() {
    this.classList.toggle("selected");
    elementObj.set(this);

  }
  container.appendChild(card);
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
}
const N = 5;
create_field(N);
