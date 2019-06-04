function initTime () {

  let dt = new Date();

  const formatTime = (i) => (i < 10) ? "0" + i : i;
  let time = {
    day: formatTime(dt.getDate()),
    month: formatTime(dt.getMonth()),
    year: formatTime(dt.getFullYear())
  }
  return time.day + "-" + time.month + "-" + time.year;
  //return dt.toLocaleString('ru-RU')
}

console.log("Task 1");
// Даны несколько div элементов на html.По первому нажатию на каждый div
// он перекрашивается зеленым цветом, при повторном нажатии перекрашивается
// обратно и так далее каждый клик происходит чередование цвета.

let box = document.querySelector(".task1-container");

box.addEventListener("click", function(e){
  if (e.target.classList.contains("box"))
    e.target.classList.toggle("active");
});


console.log("Task 2");
// Реализовать счётчик нажатий на кнопку: Дана кнопка внутри неё
// записана цифра. При клике на кнопку – её значение должно увеличиваться на единицу.

function count_up (){
  let counter = 0;
  return ()=>counter++;
}
let cnt = count_up();
t2_btn.onclick = function(){ this.textContent = cnt()}

console.log("Task 3");
// Реализовать возможность добавления комментариев. Комментарий вводится в textarea.
// Комментарий добавляется по нажатию на кнопку Комментировать. При добавлении комменария отображаются:
//  аватар автора, имя автора, дата добавления комментария, текст комментария

let author = {name: "John", img: "img/item.png"}


function create_comment (author){
  let cont = document.createElement("div");
  // cont.style.cssText = "display: flex; flex-flow: row wrap; justify-content: space-between; align-items: center";
  let header = document.createElement("p");
  header.style.cssText = "display: flex; flex-flow: row nowrap; justify-content: space-between; align-items: center";
  let img = document.createElement("img");
  img.src = author.img;
  let span = document.createElement("span");
  span.textContent = author.name;
  let date = document.createElement("span");
  date.textContent = initTime();
  let comment = document.createElement("p");
  comment.textContent = document.querySelector(".comment").value;
  comment.style.cssText = "text-align:center;";
  header.appendChild(img);
  header.appendChild(span);
  header.appendChild(date);
  cont.appendChild(header);
  cont.appendChild(comment);
  let com_section = document.querySelector(".task3-container");
  com_section.appendChild(cont);

}
document.querySelector(".send-btn").onclick = () => create_comment(author);




console.log("Task 4");
// Дан массив с объектами, где каждый объект описывает книгу: артикул, автор, название, описание.
// Сформировать функцию, которой передаётся массив книг, и которая создаст и внесёт все
// необходимые html элементы, стили, и содержание для отображения всей информации о книгах в виду таблицы.

let books = [{
    title: "Title:",
    article: "Article",
    author: "Author",
    desc: "Description"
  },
  {
    title: "Foundation",
    article: "esbn-1243",
    author: "Asimov, A.",
    desc: "The aftermath of the fall of Galactic Empire"
  },
  {
    title: "A Song of Ice and Fire",
    article: "esbn-3242",
    author: "George R.R. Martin",
    desc: "Family-friendly fairy tale with kings, knights and dragons. Rated 3+"
  },
  {
    title: "Crime and Punishment",
    article: "esbn-53421",
    author: "Dostoyevskiy, F.",
    desc: "Depressed student tries to not be depressed in Saint-P."
  }
];

function printTable(books) {

  let container = document.querySelector(".task4-container");
  let table = document.createElement("table");
  table.style.cssText = "border: 1px black solid; border-collapse: collapse; text-align: center;";
  for (let book of books) {
    let tr = document.createElement("tr");

    for (let key in book) {
      if (book.hasOwnProperty(key)) {
        let td = document.createElement("td");
        td.style.cssText = "border: 1px black solid; padding: 10px;";
        td.innerHTML = book[key];
        tr.appendChild(td);
      }
    }

    table.appendChild(tr);

  }
  container.appendChild(table);

}

printTable(books);


console.log("Task 5");

let nav_bar = document.querySelector(".nav-wrapper");

nav_bar.addEventListener("click", function(e){
  e.preventDefault();
  let cls = e.target.dataset.link;
  console.log(cls);
  let tabs = document.querySelectorAll(".tab");
  for(let tab of tabs){
    tab.classList.remove("active");
    if (tab.classList.contains(cls)) {
      tab.classList.add("active");
    }
  }
});
