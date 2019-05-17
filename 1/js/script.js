console.log("Task 1");
let space_left = 10*100, gr=15*25;
let multiplier = space_left/gr - space_left%gr;

console.log(space_left-gr*multiplier);

console.log("Task 2");
space_left = 15*100 - 600;
console.log(space_left);

console.log("Task 3");
let a =1, b =2,c =3;

(a>b)? a=b : b=a;
(a>c)? console.log(c) : console.log(a);

console.log("Task 4 - Closest number to 10");
let m = 8.5, n =11.45;
m = 10-m;
n = 10-n;
m = (m>0)? m : -m;
n = (n>0)? n : -n;
(m===n)? console.log("Числа %f и %f равноудалены от 10", m,n) : (m>n)? console.log(n) : console.log(m);

console.log("Task 5");
let x1 = 3, y1 =7, z1=-4, x2=5,y2=-3,z2=2,x3=1,y3=3,z3=-10;

let AB = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1) + (z2-z1)*(z2-z1) ),
 BC = Math.sqrt((x3-x2)*(x3-x2) + (y3-y2)*(y3-y2) + (z3-z2)*(z3-z2) ),
 AC = Math.sqrt((x3-x1)*(x3-x1) + (y3-y1)*(y3-y1) + (z3-z1)*(z3-z1) );

let eq = (BC>AB)? (BC>AC)? true : false : false;

(eq===true)? (BC*BC === AC*AC+AB*AB)? console.log("прямоугольный") : console.log("не прямоугольный") : console.log("не прямоугольный");;
