console.log("Task 1");


function Item (){
  this.name = ""
  this.price = 0;
}

Item.prototype.create=function(name,price){
  if (name && Number.isFinite(price)&& price>=0) {
    this.name = name;
    this.price = price;
  }

}
function ItemBag () {
  this.items = [];
  this.itemCount = 0;
  this.itemSum = 0;
}

ItemBag.prototype.add = function(...item){
  for (let it of item){
    if(it instanceof Item){
    this.items.push(it);
    this.itemCount++;
    this.itemSum += it.price;
    }
  }
}
ItemBag.prototype.getCount = function () {
  return this.itemCount
}

ItemBag.prototype.getSum = function () {
  return this.itemSum;
}



let milk = new Item();
milk.create("milk", 10);
let bread = new Item();
bread.create("bread", 5);
let eggs = new Item();
eggs.create("eggs", 20);

let bag = new ItemBag();
bag.add(milk,bread,eggs);
console.log(bag.getCount());
console.log(bag.getSum());
