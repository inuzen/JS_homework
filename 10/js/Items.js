console.log("Task 1");
function Item (name,price){
  this.name = ""
  this.price = 0;

  this.create=function(name,price){
    if (name && Number.isFinite(price)&& price>=0) {
      this.name = name;
      this.price = price;
    }
};

}

function ItemBag () {
  let items = [];
  let itemCount = 0;

  let itemSum = 0;

  this.add = function(...item){
    item.forEach((it)=>{
      if(it instanceof Item){
      items.push(it);
      itemCount++;
      itemSum += it.price;
    }
    });
  };
  this.getCount = function () {
    return itemCount;
  }
  this.getCountL = function () {
    return itemCountL;
  }
  this.getSum = function () {
    return itemSum;
  }
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
