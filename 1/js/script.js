console.log("Task 1");
let space_left = 10*100, gr=15*25;
let multiplier = (space_left -space_left%gr) /gr

console.log(space_left-gr*multiplier);

console.log("Task 2");
space_left = 15*100 - 600;
console.log(space_left);

console.log("Task 3");
let a =1, b =2,c =3;

(a>b)? a=b : b=a;
(a>c)? console.log(c) : console.log(a);

console.log("Task 4 - Closest number to 10");
let m_initial = 8.5, n_initial =11.45;
m = 10-m_initial;
n = 10-n_initial;
m = (m>0)? m : -m;
n = (n>0)? n : -n;
(m===n)? console.log("Числа %f и %f равноудалены от 10", m_initial,n_initial) : (m_initial>n_initial)? console.log(n_initial) : console.log(m_initial);

console.log("Task 5");
// let x1 = 3, y1 =7, z1=-4, x2=5,y2=-3,z2=2,x3=1,y3=3,z3=-10;
// let x1 = 0, y1 =0, z1=0, x2=0,y2=1,z2=1,x3=0,y3=0,z3=-10;

// let AB = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1) ),
//  BC = Math.sqrt((x3-x2)*(x3-x2) + (y3-y2)*(y3-y2) + (z3-z2)*(z3-z2) ),
//  AC = Math.sqrt((x3-x1)*(x3-x1) + (y3-y1)*(y3-y1) + (z3-z1)*(z3-z1) );
// let x1 = 0, y1 = 0, z1 = 2, x2 = 3, y2 = 0, z2 = 0, x3 = 0, y3 = 0, z3 = 0;
let x1 = 0, y1 =0, z1=0, x2=0,y2=1,z2=1,x3=0,y3=0,z3=-10; //эти координаты от непрямоугольного тр.

let AB = (x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1) ,
 BC = (x3-x2)*(x3-x2) + (y3-y2)*(y3-y2) + (z3-z2)*(z3-z2) ,
 AC = (x3-x1)*(x3-x1) + (y3-y1)*(y3-y1) + (z3-z1)*(z3-z1) ;

// let eq = (BC>AB)? (BC>AC)? true : false : false;
// eq=true;

// (eq===true)? (BC*BC === AC*AC+AB*AB)? console.log("прямоугольный") : console.log("не прямоугольный") : console.log("не прямоугольный");;
// (eq)? (BC === AC+AB)? console.log("прямоугольный") : console.log("не прямоугольный") : console.log("не прямоугольный");

(AB===AC+BC)?console.log("прямоугольный"):
(AC===AB+BC)? console.log("прямоугольный"):
(BC===AB+AC)? console.log("прямоугольный"):
console.log("непрямоугольный");
